import {Diagram} from '@syncfusion/ej2-angular-diagrams';
import {CodeGenerationService} from './codegeneration.service';
import {TestBed} from '@angular/core/testing';

describe('CodeGenerationService', () => {
  let service: CodeGenerationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        CodeGenerationService,
      ],
    }).compileComponents();
    service = TestBed.inject(CodeGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate a diagram JSON.', () => {
    const diagram = new Diagram();
    expect(CodeGenerationService.objectFromDiagram(diagram)).toBeTruthy();
  });

  it('should generate a diagram schema definition.', () => {
    const diagram = new Diagram();
    expect(CodeGenerationService.genSchema(diagram)).toBeTruthy();
  });

  it('should generate a diagram\'s classes\' JSON.', () => {
    const diagram = new Diagram();
    expect(CodeGenerationService.classesFromDiagram(diagram)).toBeTruthy();
  });

  it('should generate a diagram\'s connectors\' JSON.', () => {
    const diagram = new Diagram();
    const classes = CodeGenerationService.classesFromDiagram(diagram);
    expect(CodeGenerationService.connectorsFromDiagram(diagram, classes))
        .toBeTruthy();
  });
});
