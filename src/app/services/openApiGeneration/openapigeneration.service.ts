import {DataType} from './../../interfaces/classproperty.interface';
import {saveAs} from 'file-saver';
import {Diagram} from '@syncfusion/ej2-angular-diagrams';
import {CodeGenerationService} from '../codeGeneration/codegeneration.service';

export class OpenApiGenerationService {
  public static async generateJSON(diagram: Diagram) {
    const schema = CodeGenerationService.genSchema(diagram);
    const json: any = {
      'openapi': '3.0.1',
      'info': {
        'title': 'Generated API',
        'version': '1.0.0',
        'description': 'A simple example of an OpenAPI API.',
      },
      'servers': [
        {
          'url': 'http://localhost:8080/api/v1',
        },
      ],
      'paths': {},
      'components': {
        'schemas': {},
      },
    };
    schema.classes.forEach((cl) => {
      const Ptitle = this.pascalCase(cl.title);
      const get = {
        'tags': [Ptitle],
        'operationId': `get${Ptitle}`,
        'responses': {
          '200': {
            'description': 'OK',
            'content': {
              '*/*': {
                'schema': {
                  'uniqueItems': true,
                  'type': 'array',
                  'items': {
                    '$ref': `#/components/schemas/${Ptitle}DTO`,
                  },
                },
              },
            },
          },
        },
      };
      const post = {
        'tags': [Ptitle],
        'operationId': `save${Ptitle}`,
        'requestBody': {
          'content': {
            'application/json': {
              'schema': {
                '$ref': `#/components/schemas/${Ptitle}DTO`,
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'OK',
            'content': {
              '*/*': {
                'schema': {
                  '$ref': `#/components/schemas/${Ptitle}DTO`,
                },
              },
            },
          },
        },
      };
      const put = {
        'tags': [Ptitle],
        'operationId': `update${Ptitle}`,
        'requestBody': {
          'content': {
            'application/json': {
              'schema': {
                '$ref': `#/components/schemas/${Ptitle}DTO`,
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'OK',
            'content': {
              '*/*': {
                'schema': {
                  '$ref': `#/components/schemas/${Ptitle}DTO`,
                },
              },
            },
          },
        },
      };
      json['paths'][`/${Ptitle}s`] = {'get': get, 'post': post, 'put': put};
      const del = {
        'tags': [Ptitle],
        'operationId': `delete${Ptitle}`,
        'parameters': [
          {
            'name': 'Id',
            'in': 'path',
            'required': true,
            'schema': {
              'type': 'integer',
              'format': 'int32',
            },
          },
        ],
        'responses': {
          '200': {
            'description': 'OK',
            'content': {
              '*/*': {
                'schema': {
                  'type': 'string',
                },
              },
            },
          },
        },
      };
      json['paths'][`/${Ptitle}s/{Id}`] = {'delete': del};
      const Cschema: any = {
        'type': 'object',
        'properties': {
          'id': {
            'type': 'integer',
            'format': 'int64',
          },
        },
      };
      cl.properties.forEach((prop) => {
        const pCtitle = this.camelCase(prop.title);
        Cschema['properties'][pCtitle] =
          this.dataTypeToSwagger(prop.type as DataType);
      });
      cl.relations.forEach((rel) => {
        const rCtitle = this.camelCase(rel.title);
        if (!rel.isMany) {
          Cschema['properties'][`${rCtitle}Id`] = {
            'type': 'integer',
            'format': 'int64',
          };
        } else {
          Cschema['properties'][`${rCtitle}Ids`] = {
            'uniqueItems': true,
            'type': 'array',
            'items': {
              'type': 'integer',
              'format': 'int64',
            },
          };
        }
      });
      json['components']['schemas'][`${Ptitle}DTO`] = Cschema;
    });
    const blob = new Blob([JSON.stringify(json)], {type: 'application/json'});
    saveAs( blob, 'diagram.oas.json');
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

  static dataTypeToSwagger(type: DataType): any {
    switch (type) {
      case DataType.integer: return {'type': 'integer', 'format': 'int32'};
      case DataType.long: return {'type': 'integer', 'format': 'int64'};
      case DataType.short: return {'type': 'integer', 'format': 'int32'};
      case DataType.boolean: return {'type': 'boolean'};
      case DataType.byte: return {'type': 'string', 'format': 'byte'};
      case DataType.character: return {'type': 'string', 'format': 'byte'};
      case DataType.double: return {'type': 'number', 'format': 'double'};
      case DataType.float: return {'type': 'number', 'format': 'float'};
      case DataType.localdate: return {'type': 'string', 'format': 'date'};
      case DataType.localdatetime:
        return {'type': 'string', 'format': 'date-time'};
    }
    return {'type': 'string'};
  }
}
