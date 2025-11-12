import {HttpClient} from '@angular/common/http';
import {Component, inject, Input, OnInit} from '@angular/core';
import {CanvasComponent} from '../canvas/canvas.component';
import {FormsModule} from '@angular/forms';
import {CodeGenerationService}
  from '../../services/codeGeneration/codegeneration.service';
import {VoiceRecognitionService}
  from '../../services/voice-recognition/voice-recognition.service';
import {saveAs} from 'file-saver';
import {GoogleGenAI} from '@google/genai';
import {z} from 'zod';
import {environment} from '../../../environments/environment.development';
import {ConnectorObject, Property}
  from '../../interfaces/serializedDiagram.interface';
import {DataType} from '../../interfaces/classproperty.interface';
import {NodeModel} from '@syncfusion/ej2-angular-diagrams';
import {SpringGenerationService}
  from '../../services/springGeneration/springgeneration.service';
import {FlutterGenerationService}
  from '../../services/flutterGeneration/fluttergeneration.service';
import {OpenApiGenerationService}
  from '../../services/openApiGeneration/openapigeneration.service';
import {BrowserAbstractionService}
  from '../../services/browserAbsctraction/browserabstraction.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  imports: [FormsModule],
})

export class NavbarComponent implements OnInit {
  public voiceRecognitionService = inject(VoiceRecognitionService);
  public window: any = new BrowserAbstractionService().getWindow();
  @Input() canvas: CanvasComponent | null = null;
  readonly http = inject(HttpClient);
  processing = false;
  public prompt = '';
  ai = new GoogleGenAI({apiKey: environment.GOOGLE_API_KEY});

  propertySchema = z.object({
    Name: z.string().describe('Nombre de la propiedad.'),
    Type: z.enum(['Integer', 'Long', 'Short', 'Float', 'Double',
      'String', 'Boolean', 'Character', 'Byte', 'LocalDate', 'LocalDateTime'])
        .describe('Tipo de dato de la propiedad.'),
  });

  classSchema = z.object({
    Id: z.string().describe('Identificador de la clase, empieza con "class_" ' +
      'mas 15 caracteres alfabeticos aleatorios mayusculas y minusculas.'),
    Title: z.string().describe('Nombre de la clase.'),
    Properties:
      z.string().describe('Lista de propiedades de la clase formateada ' +
        'en un string. Cada propiedad tiene un titulo de una palabra, ' +
        'un tipo cuyos posibles valores son: "Integer", "Long", "Short", ' +
        '"Float", "Double", "String", "Boolean", "Character", "Byte", ' +
        '"LocalDate" y "LocalDateTime". Por lo tanto cada propiedad consiste ' +
        'de dos palabras, titulo y tipo, y las propiedades estan separadas ' +
        'en la lista string por comas. El ID no es parte de las propiedades.'),
    OffsetX: z.number().describe('Posicion X en el diagrama.'),
    OffsetY: z.number().describe('Posicion Y en el diagrama.'),
  });

  connectorReferenceSchema = z.object({
    SourceClassId: z.string()
        .describe('The ID of the source class (e.g., "class_abc123...").'),
    TargetClassId: z.string()
        .describe('The ID of the target class (e.g., "class_xyz456...").'),
    SourceMultiplicity: z.enum(['0...1', '1...1', '*...*', '0...*', '1...*']),
    TargetMultiplicity: z.enum(['0...1', '1...1', '*...*', '0...*', '1...*']),
    Type: z.enum(['Association', 'Composition', 'Inheritance',
      'Dependency', 'Aggregation']).describe('Tipo de conector.'),
  });

  diagramSchema = z.object({
    classes: z.array(this.classSchema).describe('Clases en el diagrama.'),
    connectors: z.array(this.connectorReferenceSchema)
        .describe('Conexiones entre clases del diagrama.'),
  }).describe('Diagrama de clases para diseño de base de datos.');

  ngOnInit() {
    this.voiceRecognitionService.init();
  }

  public async submitPrompt(prompt: string) {
    console.log(`"${prompt}"`);
    if (this.canvas == null) return;
    this.processing = true;
    const diagram =JSON.stringify(
        CodeGenerationService.objectFromDiagram(this.canvas.diagram));
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: z.toJSONSchema(this.diagramSchema),
          systemInstruction: 'You are an expert database modeler. ' +
          'Your only task is to generate a UML database model in JSON format. '+
          'You must strictly adhere to the \'responseSchema\' provided. ' +
          'CRITICAL RULE: For fields with "enum" constraints '+
          '(Type, Multiplicity), you are only allowed to use the EXACT ' +
          'string values defined in the list. ' +
          'Do not generate explanatory text, only the complete JSON object.' +
          'You must use the following JSON diagram as a base and modify ' +
          'it in any way you\'re required to including creating new classes ' +
          'connections, properties in classes, deleting or editing certain'+
          'aspects of them. Preserve the class Id in the base JSON. Dont add ' +
          `properties unless youre asked to. Make sure the relations stay as is
          unless you're told to modify or delete them. Make sure to preserve the
          class Ids when working with those relations. If you're asked to create
          a class without any further instructions, make sure to add at least
          one property with a valid type and name, aside from Ids.
          The diagram is: ${diagram}`,
        },
      });
      console.log(response.text);
      this.parseAIResponse(response.text!);
      this.processing = false;
      prompt = '';
    } catch (error: any) {
      this.processing = false;
      if (error.status === 503) {
        alert('La IA está sobrecargada. Inténtelo de nuevo.');
      } else {
        console.log(error);
        alert('Ocurrió un error. Inténtelo de nuevo.');
      }
    }
  }

  parseAIResponse(response: string) {
    const newdiagram = JSON.parse(response);
    let nodelist: string[] = [];
    this.canvas!.diagram.nodes.forEach((node) => {
      if (node.id?.endsWith('_umlClass_header')) {
        nodelist.push((node as any).parentId);
      }
    });
    console.log(nodelist);
    newdiagram.classes.forEach((cl: any) => {
      let found = false;
      this.canvas!.diagram.nodes.forEach((node) => {
        if (node.id === cl.Id + '_umlClass_header') {
          found = true;
          nodelist = nodelist.filter((str) => str !== (node as any).parentId);
          node.annotations![0].content = cl.Title;
        }
        if (node.id === cl.Id) {
          const deletelist: NodeModel[] = [];
          node.children?.forEach((child) => {
            const childnode = this.canvas?.diagram.getNodeObject(child);
            if (childnode!.annotations?.length == 1) {
              deletelist.push(childnode!);
            }
          });
          deletelist.forEach((item) => {
            this.canvas?.diagram.remove(item);
          });
          (cl.Properties as string).split(', ').forEach((propstr) => {
            const splitprop = propstr.split(' ');
            this.canvas?.diagram.addChildToUmlNode(node,
                {name: splitprop[0], type: splitprop[1]},
                'Attribute',
            );
          });
        }
      });
      if (!found) {
        this.canvas!.addClass({
          Id: cl.Id,
          Title: cl.Title,
          Properties: this.propertiesFromResponse(cl.Properties),
          OffsetX: cl.OffsetX,
          OffsetY: cl.OffsetY,
        }, false);
      }
    });
    nodelist.forEach((id) => {
      this.canvas!.diagram.remove(this.canvas!.diagram.getNodeObject(id));
    });
    const tmpArray = [...this.canvas!.diagram.connectors];
    tmpArray.forEach((con) => {
      this.canvas!.diagram.remove(con);
    });
    newdiagram.connectors.forEach((conn: any) => {
      const newconn: ConnectorObject = {
        Source: {
          Class: {Id: conn.SourceClassId, Title: '', Properties: [],
            OffsetX: 0, OffsetY: 0,
          },
          Multiplicity: conn.SourceMultiplicity,
        },
        Target: {
          Class: {Id: conn.TargetClassId, Title: '', Properties: [],
            OffsetX: 0, OffsetY: 0,
          },
          Multiplicity: conn.TargetMultiplicity,
        },
        Type: conn.Type,
      };
      this.canvas?.addConnector(newconn);
    });
  }

  propertiesFromResponse(properties: string): Property[] {
    const list: Property[] = [];
    properties.split(', ').forEach((prop) => {
      const splitprop = prop.split(' ');
      list.push({
        Name: splitprop[0],
        Type: splitprop[1] as DataType,
      });
    });
    return list;
  }

  generatePNG(): void {
    this.canvas?.diagram.exportDiagram({format: 'PNG'});
  }

  generateJava(): void {
    SpringGenerationService.generateZipDownload(this.canvas!.diagram);
  }

  generateFlutter(): void {
    FlutterGenerationService.generateZipDownload(this.canvas!.diagram);
  }

  generateJson(): void {
    const data: string = this.canvas?.diagram.saveDiagram() as string;
    const blob = new Blob([data], {type: 'application/json'});
    saveAs( blob, 'diagram.json');
  }

  generateOpenApi(): void {
    OpenApiGenerationService.generateJSON(this.canvas!.diagram);
  }

  async loadJson(): Promise<void> {
    if (!('showOpenFilePicker' in this.window)) {
      alert('Your browser does not support the File System Access API.');
      return;
    }
    try {
      const fileHandles = await this.window.showOpenFilePicker({
        types: [
          {
            description: 'Picture',
            accept: {
              'image/jpeg': ['.jpg', '.jpeg'],
            },
          },
          {
            description: 'JSON',
            accept: {
              'applicaiton/json': ['.json'],
            },
          },
        ],
      });
      for (const handle of fileHandles) {
        const file = await handle.getFile();
        if (file.type === 'application/json') {
          const content = await file.text();
          this.canvas?.diagram.loadDiagram(content);
        }
        if (file.type === 'image/jpeg') {
          this.processing = true;
          const base64image = await this.encodeFileToBase64(file);
          console.log(base64image);
          try {
            const response = await this.ai.models.generateContent({
              model: 'gemini-2.5-pro',
              contents: [
                {
                  inlineData: {
                    data: (base64image as string).split(',')[1],
                    mimeType: 'image/jpeg',
                  },
                },
              ],
              config: {
                responseMimeType: 'application/json',
                responseSchema: z.toJSONSchema(this.diagramSchema),
                systemInstruction: `You are an expert database modeler.
                Your only task is to generate a UML database model in JSON
                format. You must strictly adhere to the 'responseSchema'
                provided. CRITICAL RULE: For fields with "enum" constraints
                (Type, Multiplicity), you are only allowed to use the EXACT
                string values defined in the list. Do not generate explanatory
                text, only the complete JSON object. You must extract from the
                attached image of a drawn UML database class diagram the classes
                with their names, their properties and property types, relative
                positions and the connections between them taking into account
                multiplicity and connection type. Once youve analyzed the
                picture, return the diagram in the specified JSON Schema. When
                setting the offset coordinates of the classes, take into account
                that the origin point (0,0) is on the top left corner of the
                screen. A higher OffsetX moves the items right, a higher OffsetY
                moves the items down. The font size of the Class titles is
                approximately 12 units on the coordinate system. Take that font
                size into account when approximating the positions of the
                classes.`,
              },
            });
            console.log(response.text!);
            this.parseAIResponse(response.text!);
            this.processing = false;
          } catch (e: any) {
            this.processing = false;
            if (e.status === 503) {
              alert('La IA está sobrecargada. Inténtelo de nuevo.');
            } else {
              alert('Ocurrió un error. Inténtelo de nuevo.');
            }
          }
        }
      }
    } catch (err) {
      console.error('File access error:', err);
    }
  }

  encodeFileToBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  }

  onSpeechRecognitionButton(): void {
    if (this.voiceRecognitionService.isListening) this.stopSpeechRecognition();
    else this.startSpeechRecognition();
  }

  startSpeechRecognition(): void {
    this.voiceRecognitionService.start();
  }

  stopSpeechRecognition(): void {
    this.voiceRecognitionService.stop();
    this.prompt = this.voiceRecognitionService.text;
    this.voiceRecognitionService.text = '';
  }
}
