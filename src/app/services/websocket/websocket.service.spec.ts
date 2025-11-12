import {WebSocketService} from './websocket.service';
import {TestBed} from '@angular/core/testing';

describe('WebSocketService', () => {
  let service: WebSocketService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        WebSocketService,
      ],
    }).compileComponents();
    service = new WebSocketService('a');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('Integration: Websocket connection', () => {
  let service: WebSocketService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        WebSocketService,
      ],
    }).compileComponents();
    service = new WebSocketService('a');
  });

  it('should a connection be attained.', () => {
    expect(service).toBeTruthy();
  });
});
