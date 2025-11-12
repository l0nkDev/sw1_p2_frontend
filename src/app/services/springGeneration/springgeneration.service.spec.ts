import {SpringGenerationService} from './springgeneration.service';
import {Diagram} from '@syncfusion/ej2-angular-diagrams';
import {TestBed} from '@angular/core/testing';

describe('SpringGenerationService', () => {
  let service: SpringGenerationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        SpringGenerationService,
      ],
    }).compileComponents();
    service = TestBed.inject(SpringGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate a Spring project.', () => {
    const diagram = new Diagram();
    expect(SpringGenerationService.generateZipDownload(diagram)).toBeTruthy();
  });
});
