import {Diagram} from '@syncfusion/ej2-angular-diagrams';
import {CodeGenerationService} from '../codeGeneration/codegeneration.service';
import JSZip from 'jszip';
import {codegenClass, codegenProperty, codegenRelation, codegenSchema}
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
    schema.relations.forEach((rel) => {
      const title = this.camelCase(rel.title);
      if (rel.isMany) string += `  final List<int>? ${title}Ids;`;
      else string += `  final int? ${title}Id;`;
    });
    string += `\n  ${Ptitle} ({\n`;
    string += `    this.id,\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      string += `    this.${title},\n`;
    });
    schema.relations.forEach((rel) => {
      const title = this.camelCase(rel.title);
      if (rel.isMany) string += `    this.${title}Ids,\n`;
      else string += `    this.${title}Id,\n`;
    });
    string += `  });\n\n`;
    string += `  factory ${Ptitle}.fromJson(Map<String, dynamic> json) {\n`;
    string += `    return ${Ptitle}(\n`;
    string += `      id: json['id'],\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      string += `      ${title}: ${this.parseType(prop, false)}\n`;
    });
    schema.relations.forEach((rel) => {
      const title = this.camelCase(rel.title);
      if (rel.isMany) {
        string += `      ${title}Ids: List<int>.from(json['${title}Ids']),\n`;
      } else string += `      ${title}Id: json['${title}Id'],\n`;
    });
    string +=
    `    );\n  }\n\n  Map<String, dynamic> toJson() {\n    return {\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      string += `      '${title}': ${title},\n`;
    });
    schema.relations.forEach((rel) => {
      const title = this.camelCase(rel.title);
      if (rel.isMany) string += `      '${title}Ids': ${title}Ids,\n`;
      else string += `      '${title}Id': ${title}Id,\n`;
    });
    string += `    };\n  }\n}`;
    return string;
  }

  static classToService(schema: codegenClass): string {
    const Ptitle = this.pascalCase(schema.title);
    const Ctitle = this.camelCase(schema.title);
    let s = `import 'package:intl/intl.dart';\n`;
    s += `import 'package:dio/dio.dart';\n`;
    s += `import 'package:flutter_generated/models/`;
    s += `${Ctitle}.dart';\n`;
    s += `import './../config.dart' as config;\n\n`;
    s += `class ${Ptitle}Service {\n`;
    s += `  final Dio _dio;\n\n`;
    s += `  ${Ptitle}Service()\n`;
    s += `      : _dio = Dio(BaseOptions(\n`;
    s += `          baseUrl: config.apiEndpoint,\n`;
    s += `          headers: {\n`;
    s += `            'Content-Type': 'application/json',\n`;
    s += `          },\n`;
    s += `        ));\n\n`;
    s += `  Future<List<${Ptitle}>> get${Ptitle}s() async {\n`;
    s += `    try {\n`;
    s += `      final response = await _dio.get('/${Ptitle}s');\n`;
    s += `      final List<dynamic> data = response.data;\n`;
    s +=
    `      return data.map((item) => ${Ptitle}.fromJson(item)).toList();\n`;
    s += `    } catch (e) {\n`;
    s += `      throw 'Failed to load ${Ctitle}s: \${e.toString()}';\n`;
    s += `    }\n`;
    s += `  }\n\n`;
    s += `  Future<${Ptitle}> create${Ptitle}(${Ptitle} ${Ctitle}) async {
    try {
      final response = await _dio.post('/${Ptitle}s', data: {
        'id': null,\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      if (prop.type == DataType.localdate) {
        s += `        '${title}': DateFormat('yyyy-MM-dd')` +
        `.format(${Ctitle}.${title}!),\n`;
      } else if (prop.type == DataType.localdatetime) {
        s += `        '${title}': DateFormat('yyyy-MM-ddTHH:mm:ss.SSS')` +
        `.format(${Ctitle}.${title}!),\n`;
      } else s += `        '${title}': ${Ctitle}.${title},\n`;
    });
    schema.relations.forEach((rel) => {
      const title = this.camelCase(rel.title);
      if (rel.isMany) s += `        '${title}Ids': ${Ctitle}.${title}Ids,\n`;
      else s += `        '${title}Id': ${Ctitle}.${title}Id,\n`;
    });
    s += `      });
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
      if (prop.type == DataType.localdate) {
        s += `        '${title}': DateFormat('yyyy-MM-dd')` +
        `.format(${Ctitle}.${title}!),\n`;
      } else if (prop.type == DataType.localdatetime) {
        s += `        '${title}': DateFormat('yyyy-MM-ddTHH:mm:ss.SSS')` +
        `.format(${Ctitle}.${title}!),\n`;
      } else s += `        '${title}': ${Ctitle}.${title},\n`;
    });
    schema.relations.forEach((rel) => {
      const title = this.camelCase(rel.title);
      if (rel.isMany) s += `        '${title}Ids': ${Ctitle}.${title}Ids,\n`;
      else s += `        '${title}Id': ${Ctitle}.${title}Id,\n`;
    });
    s += `      });
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
    s += `}\n`;
    return s;
  }

  static classToScreen(schema: codegenClass): string {
    const Ptitle = this.pascalCase(schema.title);
    const Ctitle = this.camelCase(schema.title);
    let s = `import 'package:intl/intl.dart';
import 'package:flutter/material.dart';
import 'package:flutter_generated/models/${Ctitle}.dart';
import 'package:flutter_generated/services/${Ctitle}_service.dart';\n`;
    schema.relations.forEach((rel) => {
      const title = this.camelCase(rel.title);
      s += `import 'package:flutter_generated/models/${title}.dart';\n`;
      s +=
        `import 'package:flutter_generated/services/${title}_service.dart';\n`;
    });
    s += `class ${Ptitle}sScreen extends StatefulWidget {
  const ${Ptitle}sScreen({super.key});

  @override
  _${Ptitle}sScreenState createState() => _${Ptitle}sScreenState();
}

class _${Ptitle}sScreenState extends State<${Ptitle}sScreen> {
  final ${Ptitle}Service _${Ctitle}Service = ${Ptitle}Service();\n`;
    schema.relations.forEach((rel) => {
      const rCtitle = this.camelCase(rel.title);
      const rPtitle = this.pascalCase(rel.title);
      s +=
        `  final ${rPtitle}Service _${rCtitle}Service = ${rPtitle}Service();\n`;
      s += `  late Future<List<${rPtitle}>> _${rCtitle}sFuture;\n`;
    });
    s +=`  late Future<List<${Ptitle}>> _${Ctitle}sFuture;\n\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      s += `  final _${title}Controller = TextEditingController();\n`;
    });
    schema.relations.forEach((rel) => {
      const rCtitle = this.camelCase(rel.title);
      if (!rel.isMany) s += `  int? _${rCtitle}Controller;\n`;
      else s += `  List<int>? _${rCtitle}sController;\n`;
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
      _${Ctitle}sFuture = _${Ctitle}Service.get${Ptitle}s();\n`;
    schema.relations.forEach((rel) => {
      const rCtitle = this.camelCase(rel.title);
      const rPtitle = this.pascalCase(rel.title);
      s += `      _${rCtitle}sFuture = _${rCtitle}Service.get${rPtitle}s();\n`;
    });
    s +=`    });
  }

  void _show${Ptitle}Form({${Ptitle}? ${Ctitle}}) {
    if (${Ctitle} != null) {\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      if (prop.type == DataType.localdate) {
        s += `      _${title}Controller.text = ${Ctitle}.${title}!` +
        `.toString().split(' ')[0];\n`;
      } else {
        s +=
        `      _${title}Controller.text = ${Ctitle}.${title}!.toString();\n`;
      }
    });
    schema.relations.forEach((rel) => {
      const rCtitle = this.camelCase(rel.title);
      if (!rel.isMany) {
        s += `      _${rCtitle}Controller = ${Ctitle}.${rCtitle}Id;\n`;
      } else {
        s += `      _${rCtitle}sController = ${Ctitle}.${rCtitle}Ids;\n`;
      }
    });

    s += `    } else {\n`;
    schema.properties.forEach((prop) => {
      const title = this.camelCase(prop.title);
      s += `      _${title}Controller.clear();\n`;
    });
    schema.relations.forEach((rel) => {
      const rCtitle = this.camelCase(rel.title);
      if (!rel.isMany) s += `      _${rCtitle}Controller = null;\n`;
      else s += `      _${rCtitle}sController = [];\n`;
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
    schema.relations.forEach((rel) => {
      const rCtitle = this.camelCase(rel.title);
      const rPtitle = this.pascalCase(rel.title);
      const display =this.flutterDisplayParseNoTitle(
          rel.firstprop, rel.firstproptype,
      );
      if (!rel.isMany) {
        s += `              FutureBuilder(
                future: _${rCtitle}sFuture,
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return Center(child: CircularProgressIndicator());
                  }
                  if (snapshot.hasError) {
                    return Center(child: Text('Error: \${snapshot.error}'));
                  }
                  final ${rCtitle}s = snapshot.data!;
                  List<DropdownMenuItem<int>> items =
                    ${rCtitle}s.map<DropdownMenuItem<int>>((${rPtitle} i) {
                      return DropdownMenuItem<int>(
                        value: i.id!,
                        child: Text(${display}'),
                      );
                    }).toList();
                    List<DropdownMenuItem<int>> base =
                      [DropdownMenuItem(value: 0, child: Text('None'),)];
                    base.addAll(items);
                  return DropdownButtonFormField(
                    decoration: InputDecoration(
                      labelText: '${rPtitle}',
                    ),
                    value: _${rCtitle}Controller ?? 0,
                    items: base,
                    onChanged: (value) => {_${rCtitle}Controller = value != 0` +
                      ` ? value : null});
                }
              ),\n`;
      } else {
        s += `              FutureBuilder(
                future: _${rCtitle}sFuture,
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return Center(child: CircularProgressIndicator());
                  }
                  if (snapshot.hasError) {
                    return Center(child: Text('Error: \${snapshot.error}'));
                  }
                  final ${rCtitle}s = snapshot.data!;
                  return InkWell(
                    child: IgnorePointer(
                      child: DropdownButtonFormField(
                        decoration: InputDecoration(
                          labelText: '${rPtitle}s',
                        ),
                        value: 0,
                        items: [DropdownMenuItem(child: Text('Expand'),` +
                        ` value: 0,)],
                        onChanged: (v) {},
                      ),
                    ),
                    onTap: () {
                      ValueNotifier<int> notifier = ValueNotifier` +
                      `(_${rCtitle}sController!.length);
                      showDialog(
                        context: context, builder: (context) => AlertDialog(
                          title: Text('${rPtitle}s'),
                          content: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Row(
                                children: [
                                  Expanded(
                                    child: DropdownButtonFormField(
                                      items: ${rCtitle}s.map<DropdownMenuItem` +
                                      `<int>>((i) {
                                        return DropdownMenuItem<int>(
                                          value: i.id,
                                          child: Text(${display}'),
                                          );
                                      }).toList(),
                                      onChanged: (v) {
                                        if (!_${rCtitle}sController!` +
                                        `.contains(v)) {
                                          _${rCtitle}sController!.add(v!);
                                          notifier.value = _${rCtitle}s` +
                                          `Controller!.length;
                                        }
                                      }
                                    ),
                                  ),
                                  IconButton(onPressed: (){}, icon: ` +
                                  `Icon(Icons.add),)
                                ],
                              ),
                              ValueListenableBuilder(
                                valueListenable: notifier,
                                builder: (context, a, b) {
                                  return Column(
                                    children: List.generate(${rCtitle}s` +
                                    `.length, (index) {
                                      ${rPtitle} i = ${rCtitle}s[index];
                                      if (_${rCtitle}sController!` +
                                      `.contains(i.id)) {
                                        return ListTile(
                                          title: Row(
                                            children: [
                                              Text(${display}'),
                                              Spacer(),
                                              IconButton(
                                                onPressed: () {
                                                  _${rCtitle}sController!` +
                                                  `.remove(i.id);
                                                  notifier.value = ` +
                                                  `_${rCtitle}sController!` +
                                                  `.length;
                                                },
                                                icon: Icon(Icons.delete)
                                              ),
                                            ],
                                          ),
                                          subtitle: Text('\${i.id}'),
                                        );
                                      };
                                      return SizedBox(height: 0);
                                    }),
                                  );
                                }
                              ),
                            ],
                          ),
                        ),
                      );
                    },
                  );
                },
              ),\n`;
      }
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
    schema.relations.forEach((rel) => {
      const rCtitle = this.camelCase(rel.title);
      if (!rel.isMany) {
        s += `                  ${rCtitle}Id: _${rCtitle}Controller,\n`;
      } else {
        s += `                  ${rCtitle}Ids: _${rCtitle}sController,\n`;
      }
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
                _showSnackBar(\n                    ` +
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
                    child: ListTile(\n
                      title: Text('\${${Ctitle}.id}'),
                      subtitle: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [\n`;
    schema.properties.forEach((prop) => {
      const display = this.flutterDisplayParse(prop.title, prop.type, Ctitle);
      s += `                        Text(${display}'),\n`;
    });
    schema.relations.forEach((rel) => {
      const rCtitle = this.camelCase(rel.title);
      const rPtitle = this.pascalCase(rel.title);
      if (!rel.isMany) {
        const display = this.flutterRelationDisplayParse(rel, Ctitle);
        s += `                            FutureBuilder(
                            future: _${rCtitle}sFuture,
                            builder: (context, snapshot) {
                              if (snapshot.connectionState == ConnectionState` +
                                `.waiting) {
                                return Center(child: ` +
                                  `CircularProgressIndicator());
                              }
                              if (snapshot.hasError) {
                                return Center(child: Text('Error: ` +
                                  `\${snapshot.error}'));
                              }
                              final ${rCtitle}s = snapshot.data!;
                              try {
                                return(Text(${display}'));
                              } catch(e) {
                                return(Text('${rPtitle}: None'));
                              }
                            }
                          ),\n`;
      } else {
        const display = this.flutterDisplayParseNoTitle(
            rel.firstprop,
            rel.firstproptype,
        );
        s += `                        Row(
                          children: [
                            Text('${rPtitle}s: \${(${Ctitle}.` +
                            `${rCtitle}Ids??[]).isEmpty ? 'Empty' : ''}'),
                            if ((${Ctitle}.${rCtitle}Ids??[]).isNotEmpty) ` +
                            `IconButton(onPressed: (){
                              _${rCtitle}sController = ${Ctitle}.${rCtitle}` +
                              `Ids??[];
                              showDialog(
                                context: context, builder: (context) => ` +
                                `AlertDialog(
                                  title: Text('${rPtitle}s'),
                                  content: FutureBuilder(
                                    future: _${rCtitle}sFuture,
                                    builder: (context, snapshot) {
                                      if (snapshot.connectionState == ` +
                                      `ConnectionState.waiting) {
                                        return Center(child: ` +
                                        `CircularProgressIndicator());
                                      }

                                      if (snapshot.hasError) {
                                        return Center(child: Text('Error: ` +
                                        `\${snapshot.error}'));
                                      }

                                      final ${rCtitle}s = snapshot.data!;
                                      return Column(
                                        mainAxisSize: MainAxisSize.min,
                                        children: [
                                          Column(
                                            children: List` +
                                        `.generate(${rCtitle}s.length, (index) {
                                              ${rPtitle} i = ${rCtitle}s[index];
                                              if (_${rCtitle}sController!` +
                                              `.contains(i.id)) {
                                                return ListTile(
                                                  title: Row(
                                                    children: [
                                                      Text(${display}'),
                                                      Spacer(),
                                                    ],
                                                  ),
                                                  subtitle: Text('\${i.id}'),
                                                );
                                              };
                                              return SizedBox(height: 0);
                                            }),
                                          ),
                                        ],
                                      );
                                    }
                                  ),
                                ),
                              );
                            }, icon: Icon(Icons.list)),
                            Spacer(),
                          ],
                        ),\n`;
      }
    });
    s += `                      ]),
                          trailing: Row(
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
  Widget _lastSelection = ${this.pascalCase(schema.classes[0].title)}sScreen();

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
      case DataType.localdate: return 'DateTime';
      case DataType.localdatetime: return 'DateTime';
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
      case DataType.localdate:
        return `${title}: DateTime.parse(_${title}Controller.text),`;
      case DataType.localdatetime:
        return `${title}: DateTime.parse(_${title}Controller.text),`;
      default: return `${title}: int.parse(_${title}Controller.text),`;
    }
  }

  static flutterDisplayParse(title: string, type: string, name: string)
    : string {
    const Ptitle = this.pascalCase(title);
    const Ctitle = this.camelCase(title);
    switch (type) {
      case DataType.boolean:
        return `'${Ptitle}: \${${name}.${Ctitle}! ? '✔' : '✘'}`;
      case DataType.localdate:
        return `'${Ptitle}: \${DateFormat('dd-MM-yyyy')` +
        `.format(${name}.${Ctitle}!)}`;
      case DataType.localdatetime:
        return `'${Ptitle}: \${DateFormat('dd-MM-yyyy hh:mm:ss.SSS')` +
        `.format(${name}.${Ctitle}!)}`;
      default: return `'${Ptitle}: \${${name}.${Ctitle}}`;
    }
  }

  static flutterDisplayParseNoTitle(title: string, type: string)
    : string {
    const Ctitle = this.camelCase(title);
    switch (type) {
      case DataType.boolean:
        return `'\${i.${Ctitle}! ? '✔' : '✘'}`;
      case DataType.localdate:
        return `'\${DateFormat('dd-MM-yyyy')` +
        `.format(i.${Ctitle}!)}`;
      case DataType.localdatetime:
        return `'\${DateFormat('dd-MM-yyyy hh:mm:ss.SSS')` +
        `.format(i.${Ctitle}!)}`;
      default: return `'\${i.${Ctitle}}`;
    }
  }

  static flutterRelationDisplayParse(relation: codegenRelation, name: string)
    : string {
    const rPtitle = this.pascalCase(relation.title);
    const Ctitle = this.camelCase(relation.firstprop);
    const varname = this.camelCase(relation.title);
    switch (relation.firstproptype) {
      case DataType.boolean:
        return `'${rPtitle}: \${${varname}s.firstWhere((i) => i.id ==` +
        ` ${name}.${varname}Id).${Ctitle}! ? '✔' : '✘'}`;
      case DataType.localdate:
        return `'${rPtitle}: \${DateFormat('dd-MM-yyyy')` +
        `.format(${varname}s.firstWhere((i) => i.id ==` +
        ` ${name}.${varname}.Id).${Ctitle}!)}`;
      case DataType.localdatetime:
        return `'${rPtitle}: \${DateFormat('dd-MM-yyyy hh:mm:ss.SSS')` +
        `.format(${varname}s.firstWhere((i) => i.id ==` +
        ` ${name}.${varname}Id).${Ctitle}!)}`;
      default: return `'${rPtitle}: \${${varname}s.firstWhere((i) => i.id ==` +
        ` ${name}.${varname}Id).${Ctitle}}`;
    }
  }
}
