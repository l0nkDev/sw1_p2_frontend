import {TestBed} from '@angular/core/testing';
import {VoiceRecognitionService} from './voice-recognition.service';
import {BrowserAbstractionService}
  from '../browserAbsctraction/browserabstraction.service';

describe('VoiceRecognitionService', () => {
  let service: VoiceRecognitionService;
  let mockBrowserService: jasmine.SpyObj<BrowserAbstractionService>;

  const mockWindow = {
    SpeechRecognition: null,
  };

  beforeEach(async () => {
    mockBrowserService =
      jasmine.createSpyObj('BrowserAbstractionService', ['getWindow']);
    mockBrowserService.getWindow.and
        .returnValue(mockWindow as unknown as Window);
    await TestBed.configureTestingModule({
      providers: [
        {provide: BrowserAbstractionService, useValue: mockBrowserService},
        VoiceRecognitionService,
      ],
    }).compileComponents();
    service = TestBed.inject(VoiceRecognitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
