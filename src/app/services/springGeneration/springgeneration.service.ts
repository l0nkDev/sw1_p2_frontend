import JSZip from 'jszip';
import {saveAs} from 'file-saver';
import {Diagram} from '@syncfusion/ej2-angular-diagrams';
import {CodeGenerationService} from '../codeGeneration/codegeneration.service';
import {codegenClass} from '../../interfaces/codegenSchema.interface';

export class SpringGenerationService {
  public static async generateZipDownload(diagram: Diagram) {
    const zip = new JSZip();
    const genSchema = CodeGenerationService.genSchema(diagram);
    const response = await fetch('generated.zip');
    const zipTemplate = await response.arrayBuffer();
    const loadedZip = await zip.loadAsync(zipTemplate);
    genSchema.classes.forEach((schema) => {
      loadedZip.file(
          `src/main/java/com/umlonk/generated/repo/` +
          `${this.pascalCase(schema.title)}Repo.java`,
          this.classToRepo(schema),
      );
      loadedZip.file(
          `src/main/java/com/umlonk/generated/dto/` +
          `${this.pascalCase(schema.title)}DTO.java`,
          this.classToDTO(schema),
      );
      loadedZip.file(
          `src/main/java/com/umlonk/generated/controller/` +
          `${this.pascalCase(schema.title)}Controller.java`,
          this.classToController(schema),
      );
      loadedZip.file(
          `src/main/java/com/umlonk/generated/model/`+
          `${this.pascalCase(schema.title)}.java`,
          this.classToEntity(schema),
      );
      loadedZip.file(
          `src/main/java/com/umlonk/generated/service/` +
          `${this.pascalCase(schema.title)}Service.java`,
          this.classToService(schema),
      );
    });
    loadedZip.generateAsync({type: 'blob'}).then((content) => {
      saveAs(content, 'generated_files.zip');
    });
  }

  static camelCase(string: string): string {
    return string[0].toLowerCase() + string.substring(1);
  }

  static pascalCase(string: string): string {
    return string[0].toUpperCase() + string.substring(1);
  }
  static snakeCase(string: string): string {
    return string.replace(' ', '').replace('-', '').toLowerCase();
  }

  static classToController(schema: codegenClass): string {
    const Ptitle = this.pascalCase(schema.title);
    const Ctitle = this.camelCase(schema.title);
    const string =

`package com.umlonk.generated.controller;

import com.umlonk.generated.dto.${Ptitle}DTO;
import com.umlonk.generated.service.${Ptitle}Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/${Ptitle}s")
public class ${Ptitle}Controller {

    @Autowired
    private ${Ptitle}Service ${Ctitle}Service;

    @GetMapping("")
    public List<${Ptitle}DTO> get${Ptitle}() {
        return ${Ctitle}Service.getAll${Ptitle}s();
    }

    @PostMapping("")
    public ${Ptitle}DTO save${Ptitle}(@RequestBody ${Ptitle}DTO ${Ctitle}DTO) {
        return ${Ctitle}Service.save${Ptitle}(${Ctitle}DTO);
    }

    @PutMapping("")
    public ${Ptitle}DTO update${Ptitle}(@RequestBody ${Ptitle}DTO ${Ctitle}DT` +
    `O) {
        return ${Ctitle}Service.update${Ptitle}(${Ctitle}DTO);
    }

    @DeleteMapping("{Id}")
    public String delete${Ptitle}(@PathVariable int Id) {
        return ${Ctitle}Service.delete${Ptitle}(Id);
    }
}`;
    return string;
  }

  static classToDTO(schema: codegenClass):
  string {
    const Ptitle = this.pascalCase(schema.title);
    let string =

`package com.umlonk.generated.dto;

import jakarta.persistence.Entity;
import java.util.List;
import lombok.*;
import java.time.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ${Ptitle}DTO {
    private Long id;
`;
    schema.properties.forEach((prop) => {
      string +=
      `    private ${prop.type} ${this.camelCase(prop.title)};\n`;
    });
    schema.relations.forEach((rel) => {
      string +=
        `    private ${rel.isMany ? 'List<Long>' : 'Long'} ` +
        `${this.camelCase(rel.title)}${rel.isMany ? 'Ids' : 'Id'};\n`;
    });
    string += `}`;
    return string;
  }

  static classToEntity(schema: codegenClass): string {
    let string =
`import jakarta.persistence.*;
import java.util.List;
import lombok.*;
import java.time.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ${this.pascalCase(schema.title)} {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
`;
    schema.properties.forEach((prop) => {
      string += `    private ` +
      `${prop.type} ${this.camelCase(prop.title)};\n`;
    });
    schema.relations.forEach((rel) => {
      if (!rel.isMany && !rel.hasMany) {
        string += `    @OneToOne(${rel.owned ? 'cascade=CascadeType.ALL' :
          `mappedBy="${this.camelCase(schema.title)}"`})\n`;
        if (rel.owned) {
          string +=
          `    @JoinColumn(name="${this.snakeCase(rel.title)}_id")\n`;
        }
        string += `    private ${this.pascalCase(rel.title)} ` +
        `${this.camelCase(rel.title)};\n`;
      }
      if (!rel.isMany && rel.hasMany) {
        string += `    @ManyToOne\n`;
        string += `    @JoinColumn(name="` +
        `${this.snakeCase(rel.title)}_id")\n`;
        string += `    private ${this.pascalCase(rel.title)} ` +
        `${this.camelCase(rel.title)};\n`;
      }
      if (rel.isMany && !rel.hasMany) {
        string += `    @OneToMany(mappedBy="` +
        `${this.camelCase(schema.title)}")\n`;
        string += `    private List<${this.pascalCase(rel.title)}> ` +
        `${this.camelCase(rel.title)}s;\n`;
      }
      if (rel.isMany && rel.hasMany) {
        string += `    @ManyToMany${rel.owned ?
          '' : `(mappedBy="${this.camelCase(schema.title)}s")`}\n`;
        if (rel.owned) {
          string += `    @JoinTable(\n`;
          string += `        name="${this.camelCase(schema.title)}_` +
          `${this.camelCase(rel.title)}",\n`;
          string += `        joinColumns = @JoinColumn(name="` +
          `${this.snakeCase(schema.title)}_id"),\n`;
          string += `        inverseJoinColumns = @JoinColumn(name="` +
          `${this.snakeCase(rel.title)}_id"))\n`;
        }
        string += `    private List<${this.pascalCase(rel.title)}> ` +
        `${this.camelCase(rel.title)}s;\n`;
      }
    });
    string += `}`;
    return 'package com.umlonk.generated.model;\n\n' + string;
  }

  static classToRepo(schema: codegenClass): string {
    const Ptitle = this.pascalCase(schema.title);
    const string =
`package com.umlonk.generated.repo;

import com.umlonk.generated.model.${Ptitle};
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ${Ptitle}Repo extends JpaRepository<${Ptitle}, Long> {
}`;
    return string;
  }

  static classToService(schema: codegenClass)
  : string {
    const Ptitle = this.pascalCase(schema.title);
    const Ctitle = this.camelCase(schema.title);
    let string =
`package com.umlonk.generated.service;

import com.umlonk.generated.model.*;
import com.umlonk.generated.dto.${Ptitle}DTO;
import com.umlonk.generated.repo.${Ptitle}Repo;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import java.util.List;
import org.modelmapper.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ${Ptitle}Service {

    @Autowired
    private ${Ptitle}Repo ${Ctitle}Repository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private EntityManager entityManager;

    private void mapperSetup() {
        try {
            modelMapper.addMappings(new PropertyMap<${Ptitle}DTO, ${Ptitle}>() {
                @Override
                protected void configure() {
`;
    schema.relations.forEach((rel) => {
      string += `                    skip(destination.get` +
          `${this.pascalCase(rel.title)}${rel.isMany ? 's' : ''}());\n`;
    });
    string += `           }
            });
      } catch(ConfigurationException a) {}
    }

    public List<${Ptitle}DTO> getAll${Ptitle}s() {
        List<${Ptitle}> ${Ctitle}List = ${Ctitle}Repository.findAll();
        return modelMapper.map(${Ctitle}List, new TypeToken<List<` +
        `${Ptitle}DTO>>() {}.getType());
    }

    public ${Ptitle}DTO save${Ptitle}(${Ptitle}DTO ${Ctitle}DTO) {
        mapperSetup();
        ${Ptitle} ${Ctitle} = modelMapper.map(${Ctitle}DTO, ${Ptitle}.class);
`;
    schema.relations.forEach((rel) => {
      if (!rel.isMany && !rel.hasMany) {
        string +=
`        if (${Ctitle}DTO.get${rel.title}Id() != null) {
            ${Ctitle}.set${rel.title}(entityManager.getReference(${rel.title}` +
`.class, ${Ctitle}DTO.get${rel.title}Id()));
            ${Ctitle}.get${rel.title}().set${Ptitle}(${Ctitle});
        }
        else ${Ctitle}.set${rel.title}(null);\n`;
      }
    });
    string +=
`        ${Ctitle}Repository.save(${Ctitle});
        return ${Ctitle}DTO;
    }

    public ${Ptitle}DTO update${Ptitle}(${Ptitle}DTO ${Ctitle}DTO) {
        mapperSetup();
        ${Ptitle} ${Ctitle} = ${Ctitle}Repository.findById(${Ctitle}` +
        `DTO.getId()).orElseThrow();
        modelMapper.map(${Ctitle}DTO, ${Ctitle});
`;
    schema.relations.forEach((rel) => {
      if (!rel.isMany && !rel.hasMany) {
        string +=
`        if (${Ctitle}DTO.get${rel.title}Id() != null)
            ${Ctitle}.set${rel.title}(entityManager.getReference(${rel.title}` +
`.class, ${Ctitle}DTO.get${rel.title}Id()));
        else ${Ctitle}.set${rel.title}(null);\n`;
      }
    });
    string +=
`        ${Ctitle}Repository.save(${Ctitle});
        return ${Ctitle}DTO;
    }

    public String delete${Ptitle}(long ${Ctitle}Id) {
        ${Ctitle}Repository.deleteById((${Ctitle}Id));
        return "${Ptitle} deleted";
    }
}`;
    return string;
  }
}
