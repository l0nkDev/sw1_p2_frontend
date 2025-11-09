import {Diagram} from '@syncfusion/ej2-angular-diagrams';

export class FlutterGenerationService {
  public static async generateZipDownload(diagram: Diagram) {
    const jsonData = this.objectFromDiagram(diagram);
    console.log(JSON.stringify(jsonData));
  }

  public static objectFromDiagram(diagram: Diagram): string {
    return diagram.saveDiagram();
  }
}
