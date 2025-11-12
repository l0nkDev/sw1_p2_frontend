import {Diagram} from '@syncfusion/ej2-angular-diagrams';
import {DataType} from '../../interfaces/classproperty.interface';
import {Multiplicity} from '../../interfaces/multiplicity.interface';
import {ClassObject, ConnectorObject, ConnectorType, DiagramObject}
  from '../../interfaces/serializedDiagram.interface';
import {codegenClass, codegenProperty, codegenRelation, codegenSchema}
  from '../../interfaces/codegenSchema.interface';

export class CodeGenerationService {
  static objectFromDiagram(diagram: Diagram): DiagramObject {
    const Classes: ClassObject[] = this.classesFromDiagram(diagram);
    const Connectors: ConnectorObject[] = this.connectorsFromDiagram(
        diagram,
        Classes,
    );
    return {Classes: Classes, Connectors: Connectors};
  }

  static classesFromDiagram(diagram: Diagram): ClassObject[] {
    const res: ClassObject[] = [];
    diagram.nodes.forEach((node) => {
      if (node.children != null && node.children.length! > 0) {
        const classInstance = diagram.getNodeObject(node.id!);
        const classHeader = diagram.getNodeObject(node.children[0]);
        const classObject: ClassObject = {
          Id: classInstance.id!,
          Title: classHeader.annotations![0].content!,
          Properties: [],
          OffsetX: classInstance.offsetX!,
          OffsetY: classInstance.offsetY!,
        };
        node.children.forEach((childID) => {
          if (
            !childID.endsWith('_umlClass_header') &&
            !childID.endsWith('_path')
          ) {
            const child = diagram.getNodeObject(childID);
            const splitAnnotation = child.annotations![0].content!.split(' ');
            classObject.Properties.push({
              Name: splitAnnotation[2],
              Type: splitAnnotation[4] as DataType,
            });
          }
        });
        res.push(classObject);
      }
    });
    return res;
  }

  static connectorsFromDiagram(
      diagram: Diagram,
      classes: ClassObject[],
  ): ConnectorObject[] {
    const res: ConnectorObject[] = [];
    diagram.connectors.forEach((connector) => {
      if (connector.sourceID != null && connector.targetID != null) {
        res.push({
          Source: {
            Class: this.getClassObject(connector.sourceID, classes)!,
            Multiplicity: connector.annotations![0].content as Multiplicity,
          },
          Type: connector.id?.startsWith('Association') ?
          ConnectorType.Association : connector.id?.startsWith('Inheritance') ?
          ConnectorType.Inheritance : ConnectorType.Composition,
          Target: {
            Class: this.getClassObject(connector.targetID, classes)!,
            Multiplicity: connector.annotations![1].content as Multiplicity,
          },
        });
      }
    });
    return res;
  }

  static getClassObject(
      classID: string,
      classes: ClassObject[],
  ): ClassObject | undefined {
    return classes.find((classObj) => classID === classObj.Id);
  }

  static genSchema(diagram: Diagram): codegenSchema {
    const json = this.objectFromDiagram(diagram);
    console.log(json);
    const schema: codegenSchema = {classes: json.Classes.map(
        (cl): codegenClass => {
          return {
            title: cl.Title,
            properties: cl.Properties.map((pr): codegenProperty => {
              return {
                title: pr.Name,
                type: pr.Type,
              };
            }),
            relations: json.Connectors.filter((con) => {
              return con.Source.Class.Title === cl.Title ||
              con.Target.Class.Title === cl.Title;
            })
                .map((con): codegenRelation => {
                  const src = con.Source;
                  const tar = con.Target;
                  const isSource = src.Class.Title === cl.Title;
                  const isTarget = tar.Class.Title === cl.Title;
                  const isSrcMany =
                      src.Multiplicity == Multiplicity.Many ||
                      src.Multiplicity == Multiplicity.OneToMany ||
                      src.Multiplicity == Multiplicity.ZeroToMany;
                  const isTarMany =
                      tar.Multiplicity == Multiplicity.Many ||
                      tar.Multiplicity == Multiplicity.OneToMany ||
                      tar.Multiplicity == Multiplicity.ZeroToMany;
                  return {
                    title: isSource ? tar.Class.Title : src.Class.Title,
                    isMany: isTarget ? isSrcMany : isTarMany,
                    hasMany: isSource ? isSrcMany : isTarMany,
                    owned: isSource ?
                    (isSrcMany && !isTarMany) ||
                    src.Multiplicity == Multiplicity.ZeroToMany ||
                    isSrcMany == isTarMany:
                    (isTarMany && !isSrcMany) ||
                    tar.Multiplicity == Multiplicity.ZeroToMany,
                    firstprop: isSource ? tar.Class.Properties[0].Name :
                      src.Class.Properties[0].Name,
                    firstproptype: isSource ? tar.Class.Properties[0].Type :
                      src.Class.Properties[0].Type,
                  };
                }),
          };
        })};
    console.log(schema);
    return schema;
  }
}
