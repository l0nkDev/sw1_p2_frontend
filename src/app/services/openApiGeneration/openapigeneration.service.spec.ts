import {OpenApiGenerationService} from './openapigeneration.service';
import {Diagram} from '@syncfusion/ej2-angular-diagrams';
import {TestBed} from '@angular/core/testing';

describe('OpenApiGenerationService', () => {
  let service: OpenApiGenerationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        OpenApiGenerationService,
      ],
    }).compileComponents();
    service = TestBed.inject(OpenApiGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate a OpenAPI spec JSON.', () => {
    const diagram = new Diagram();
    expect(OpenApiGenerationService.generateJSON(diagram)).toBeTruthy();
  });
});
