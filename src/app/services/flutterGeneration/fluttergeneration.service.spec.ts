import {FlutterGenerationService} from './fluttergeneration.service';
import {Diagram} from '@syncfusion/ej2-angular-diagrams';
import {TestBed} from '@angular/core/testing';

describe('FlutterGenerationService', () => {
  let service: FlutterGenerationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        FlutterGenerationService,
      ],
    }).compileComponents();
    service = TestBed.inject(FlutterGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate a Flutter project.', () => {
    const diagram = new Diagram();
    expect(FlutterGenerationService.generateZipDownload(diagram)).toBeTruthy();
  });
});
