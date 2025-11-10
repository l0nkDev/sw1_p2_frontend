import {Diagram} from '@syncfusion/ej2-angular-diagrams';
import {CodeGenerationService} from '../codeGeneration/codegeneration.service';
import JSZip from 'jszip';
import {codegenClass, codegenProperty, codegenSchema}
  from '../../interfaces/codegenSchema.interface';
import saveAs from 'file-saver';
import {DataType} from '../../interfaces/classproperty.interface';

export class FlutterGenerationService {
  public static async generateZipDownload(diagram: Diagram) {
    const zip = new JSZip();
    const genSchema = CodeGenerationService.genSchema(diagram);
    const response = await fetch('flutter_generated.zip');
    const zipTemplate = await response.arrayBuffer();
    const loadedZip = await zip.loadAsync(zipTemplate);
    genSchema.classes.forEach((schema) => {
      loadedZip.file(
          `lib/models/` +
          `${this.camelCase(schema.title)}.dart`,
          this.classToModel(schema),
      );
      loadedZip.file(
          `lib/services/` +
          `${this.camelCase(schema.title)}_service.dart`,
          this.classToService(schema),
      );
      loadedZip.file(
          `lib/screens/` +
          `${this.camelCase(schema.title)}_screen.dart`,
          this.classToScreen(schema),
      );
    });
    loadedZip.file(`lib/main.dart`,
        this.schemaToMain(genSchema),
    );
    loadedZip.generateAsync({type: 'blob'}).then((content) => {
      saveAs(content, 'flutter_generated.zip');
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

  static classToModel(schema: codegenClass) {
    const Ptitle = this.pascalCase(schema.title);
    let string = `class ${Ptitle} {\n  final int? id;\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      string +=
      `  final ${this.typeToFlutter(prop.type as DataType)}? ${title};\n`;
    });
    string += `\n  ${Ptitle} ({\n`;
    string += `    this.id,\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      string += `    this.${title},\n`;
    });
    string += `  });\n\n`;
    string += `  factory ${Ptitle}.fromJson(Map<String, dynamic> json) {\n`;
    string += `    if (json['attributes'] != null) {\n`;
    string += `      final attributes = json['attributes'];\n`;
    string += `      return ${Ptitle}(\n`;
    string += `        id: json['id'],\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      string += `        ${title}: ${this.parseType(prop)}\n`;
    });
    string += `      );\n    }\n\n`;
    string += `    return ${Ptitle}(\n`;
    string += `      id: json['id'],\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      string += `      ${title}: ${this.parseType(prop, false)}\n`;
    });
    string += `    );\n  }\n\n  Map<String, dynamic> toJson() {\n    return {`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      string += `      '${title}': ${title},\n`;
    });
    string += `    };\n  }\n}`;
    return string;
  }

  static classToService(schema: codegenClass): string {
    const Ptitle = this.pascalCase(schema.title);
    const Ctitle = this.camelCase(schema.title);
    let string = `import 'package:dio/dio.dart';\n`;
    string += `import 'package:flutter_generated/models/`;
    string += `${Ctitle}.dart';\n`;
    string += `import './../config.dart' as config;\n\n`;
    string += `class ${Ptitle}Service {\n`;
    string += `  final Dio _dio;\n\n`;
    string += `  ${Ptitle}Service()\n`;
    string += `      : _dio = Dio(BaseOptions(\n`;
    string += `          baseUrl: config.apiEndpoint,\n`;
    string += `          headers: {\n`;
    string += `            'Content-Type': 'application/json',\n`;
    string += `          },\n`;
    string += `        ));\n\n`;
    string += `  Future<List<${Ptitle}>> get${Ptitle}s() async {\n`;
    string += `    try {\n`;
    string += `      final response = await _dio.get('/${Ptitle}s');\n`;
    string += `      final List<dynamic> data = response.data;\n`;
    string +=
    `      return data.map((item) => ${Ptitle}.fromJson(item)).toList();\n`;
    string += `    } catch (e) {\n`;
    string += `      throw 'Failed to load ${Ctitle}s: \${e.toString()}';\n`;
    string += `    }\n`;
    string += `  }\n\n`;
    string += `  Future<${Ptitle}> create${Ptitle}(${Ptitle} ${Ctitle}) async {
    try {
      final response = await _dio.post('/${Ptitle}s', data: {
        'id': null,\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      string += `        '${title}': ${Ctitle}.${title},\n`;
    });
    string += `      });
      return ${Ptitle}.fromJson(response.data);
    } catch (e) {
      throw 'Failed to create ${Ctitle}: \${e.toString()}';
    }
  }

  Future<${Ptitle}> update${Ptitle}(String id, ${Ptitle} ${Ctitle}) async {
    try {
      print(id);
      final response = await _dio.put('/${Ptitle}s', data: {
        'id': int.parse(id),\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      string += `        '${title}': ${Ctitle}.${title},\n`;
    });
    string += `      });
      return ${Ptitle}.fromJson(response.data);
    } catch (e) {
      throw 'Failed to update ${Ctitle}: \${e.toString()}';
    }
  }

  Future<void> delete${Ptitle}(String id) async {
    try {
      await _dio.delete('/${Ptitle}s/$id');
    } catch (e) {
      throw 'Failed to delete ${Ctitle}: \${e.toString()}';
    }
  }`;
    string += `}\n`;
    return string;
  }

  static classToScreen(schema: codegenClass): string {
    const Ptitle = this.pascalCase(schema.title);
    const Ctitle = this.camelCase(schema.title);
    let s = `import 'package:flutter/material.dart';
import 'package:flutter_generated/models/${Ctitle}.dart';
import 'package:flutter_generated/services/${Ctitle}_service.dart';

class ${Ptitle}sScreen extends StatefulWidget {
  const ${Ptitle}sScreen({super.key});

  @override
  _${Ptitle}sScreenState createState() => _${Ptitle}sScreenState();
}

class _${Ptitle}sScreenState extends State<${Ptitle}sScreen> {
  final ${Ptitle}Service _${Ctitle}Service = ${Ptitle}Service();
  late Future<List<${Ptitle}>> _${Ctitle}sFuture;\n\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      s += `  final _${title}Controller = TextEditingController();\n`;
    });
    s += `\n  @override
  void initState() {
    super.initState();
    _refresh${Ptitle}s();
  }

  @override
  void dispose() {
`;
    schema.properties.forEach((prop) => {
      s += `_${this.camelCase(prop.title)}Controller.dispose();\n`;
    });
    s += `    super.dispose();
  }

  Future<void> _refresh${Ptitle}s() async {
    setState(() {
      _${Ctitle}sFuture = _${Ctitle}Service.get${Ptitle}s();
    });
  }

  void _show${Ptitle}Form({${Ptitle}? ${Ctitle}}) {
    if (${Ctitle} != null) {\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      s += `      _${title}Controller.text = ${Ctitle}.${title}!.toString();\n`;
    });

    s += `    } else {\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      s += `_${title}Controller.clear();\n`;
    });
    s +=`    }

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(${Ctitle} == null ? 'Create ${Ptitle}' : 'Edit ${Ptitle}'),
        content: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [\n`;
    schema.properties.forEach((prop) => {
      const Ptitle = this.pascalCase(prop.title);
      const Ctitle = this.camelCase(prop.title);
      s += `              TextField(\n`;
      s += `                controller: _${Ctitle}Controller,\n`;
      s +=
        `                decoration: InputDecoration(labelText: '${Ptitle}')\n`;
      s += `              ),\n`;
    });
    s += `            ],
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: Text('Cancel'),
          ),
          TextButton(
            onPressed: () async {
              try {
                final new${Ptitle} = ${Ptitle}(\n`;
    schema.properties.forEach((prop) => {
      s += `                  ${this.flutterStringParsing(prop)}\n`;
    });
    s += `                );
                if (${Ctitle} == null) {
                  await _${Ctitle}Service.create${Ptitle}(new${Ptitle});
                } else {
                  await _${Ctitle}Service.update${Ptitle}(
                      ${Ctitle}.id!.toString(), new${Ptitle});
                }

                Navigator.pop(context);
                _refresh${Ptitle}s();
                _showSnackBar(                    ` +
`'${Ptitle} \${${Ctitle} == null ? 'created' : 'updated'} successfully');
              } catch (e) {
                _showSnackBar(e.toString());
              }
            },
            child: Text(${Ctitle} == null ? 'Create' : 'Update'),
          ),
        ],
      ),
    );
  }

  Future<void> _delete${Ptitle}(${Ptitle} ${Ctitle}) async {
    final confirm = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Delete ${Ptitle}'),
        content: Text('Are you sure you want to delete ` +
        `\${${Ctitle}.${this.camelCase(schema.properties[0].title)}}?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: Text('Cancel'),
          ),
          TextButton(
            onPressed: () => Navigator.pop(context, true),
            child: Text('Delete'),
          ),
        ],
      ),
    );

    if (confirm == true) {
      try {
        await _${Ctitle}Service.delete${Ptitle}(${Ctitle}.id!.toString());
        _refresh${Ptitle}s();
        _showSnackBar('${Ptitle} deleted successfully');
      } catch (e) {
        _showSnackBar(e.toString());
      }
    }
  }

  void _showSnackBar(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(message)),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row(
          children: [
            Spacer(),
            Text('${Ptitle}'),
            Spacer(),
          ],
        ),
      ),
      body: RefreshIndicator(
        onRefresh: _refresh${Ptitle}s,
        child: FutureBuilder<List<${Ptitle}>>(
          future: _${Ctitle}sFuture,
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return Center(child: CircularProgressIndicator());
            }

            if (snapshot.hasError) {
              return Center(child: Text('Error: \${snapshot.error}'));
            }

            final ${Ctitle}s = snapshot.data!;

            return ListView.builder(
              itemCount: ${Ctitle}s.length,
              itemBuilder: (context, index) {
                final ${Ctitle} = ${Ctitle}s[index];
                return Dismissible(
                    key: Key(${Ctitle}.id.toString()),
                    direction: DismissDirection.endToStart,
                    background: Container(
                      color: Colors.red,
                      alignment: Alignment.centerRight,
                      padding: EdgeInsets.only(right: 16),
                      child: Icon(Icons.delete, color: Colors.white),
                    ),
                    onDismissed: (_) => _delete${Ptitle}(${Ctitle}),
                    child: ListTile(\n`;
    schema.properties.forEach((prop, index) => {
      const pPtitle = this.pascalCase(prop.title);
      const pCtitle = this.camelCase(prop.title);
      if (index == 0) {
        s += `                      title: Text('${pPtitle}: ` +
        `\${${Ctitle}.${pCtitle}}'),\n`;
      }
      if (index == 1) {
        s += `                      subtitle: Text('${pPtitle}: ` +
        `\${${Ctitle}.${pCtitle}}\\n`;
      }
      if (index > 1) s += `${pPtitle}: \${${Ctitle}.${pCtitle}}\\n`;
    });
    if (schema.properties.length > 1) s += `'),\n`;
    s += `                      trailing: Row(
                        mainAxisSize: MainAxisSize
                            .min, // Makes the Row take minimum space
                        children: [
                          IconButton(
                            icon: Icon(Icons.edit),
                            onPressed: () => _show${Ptitle}Form` +
                            `(${Ctitle}: ${Ctitle}),
                          ),
                          IconButton(
                            icon: Icon(Icons.delete),
                            onPressed: () => _delete${Ptitle}(${Ctitle}),
                          ),
                        ],
                      ),
                    ));
              },
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _show${Ptitle}Form(),
        child: Icon(Icons.add),
      ),
    );
  }
}`;
    return s;
  }

  static schemaToMain(schema: codegenSchema): string {
    let s = `import 'package:flutter/material.dart';\n`;
    schema.classes.forEach((cl) => {
      const title = this.pascalCase(cl.title);
      s += `import 'package:flutter_generated/screens/${title}_screen.dart';\n`;
    });
    s += `
void main() {
  runApp(MainApp());
}

class MainApp extends StatefulWidget {
  const MainApp({super.key});

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  Widget _lastSelection = DirectorsScreen();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter generated',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text('Flutter generated'),
          ),
        body: _lastSelection,
        drawer: Drawer(
          child: ListView(
            padding: EdgeInsets.zero,
            children: <Widget>[
              const DrawerHeader(
                child: Text('Classes', style: TextStyle(color: ` +
                `Colors.black, fontSize: 24)),
              ),\n`;
    schema.classes.forEach((cl) => {
      const title = this.pascalCase(cl.title);
      s +=
      `
              ListTile(
                title: const Text('${title}s'),
                onTap: () {
                  setState(() {
                    _lastSelection = ${title}sScreen();
                  });
                },
              ),`;
    });
    s += `
            ],
          ),
        ),
      ),
    );
  }
}
`;
    return s;
  }

  static parseType(prop: codegenProperty, attributesmode = true): string {
    const title = this.camelCase(prop.title);
    const json = attributesmode ? 'attributes' : 'json';
    switch (prop.type) {
      case DataType.double: {
        return '' +
          `double.parse(${json}['${title}'].toString()),`;
      }
      case DataType.float: {
        return '' +
          `double.parse(${json}['${title}'].toString()),`;
      }
      case DataType.localdate: {
        return `DateTime.parse(${json}['${title}']),`;
      }
      case DataType.localdatetime: {
        return `DateTime.parse(${json}['${title}']),`;
      }
      default: return `${json}['${title}'],`;
    }
  }

  static typeToFlutter(type: DataType): string {
    switch (type) {
      case DataType.character: return 'String';
      case DataType.double: return 'double';
      case DataType.boolean: return 'bool';
      case DataType.float: return 'double';
      case DataType.string: return 'String';
      default: return 'int';
    }
  }

  static flutterStringParsing(prop: codegenProperty): string {
    const title = this.camelCase(prop.title);
    switch (prop.type) {
      case DataType.character:
        return `${title}: _${title}Controller.text,`;
      case DataType.string:
        return `${title}: _${title}Controller.text,`;
      case DataType.double:
        return `${title}: double.parse(_${title}Controller.text),`;
      case DataType.boolean:
        return `${title}: bool.parse(_${title}Controller.text),`;
      case DataType.float:
        return `${title}: double.parse(_${title}Controller.text),`;
      default: return `${title}: int.parse(_${title}Controller.text),`;
    }
  }
}
