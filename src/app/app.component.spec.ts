import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting}
  from '@angular/common/http/testing';
import {CanvasComponent} from './components/canvas/canvas.component';
import {NavbarComponent} from './components/navbar/navbar.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CanvasComponent, NavbarComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  afterEach(() => {
    const diagramInstance = component?.canvas?.diagram;
    if (diagramInstance) {
      component.canvas.diagram.destroy();
    }
    fixture.destroy();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should create a canvas', () => {
    expect(component.canvas).toBeTruthy();
  });

  it('should create a navbar', () => {
    expect(component.navbar).toBeTruthy();
  });
});

describe('Integration: Component intercommunication', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CanvasComponent, NavbarComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  afterEach(() => {
    const diagramInstance = component?.canvas?.diagram;
    if (diagramInstance) {
      component.canvas.diagram.destroy();
    }
    fixture.destroy();
  });

  it('Should navbar be able to access canvas.', () => {
    const navbar = component.navbar;
    expect(navbar.canvas).toBeTruthy();
  });
});

describe('Integration: Connection to AI model', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CanvasComponent, NavbarComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  afterEach(() => {
    const diagramInstance = component?.canvas?.diagram;
    if (diagramInstance) {
      component.canvas.diagram.destroy();
    }
    fixture.destroy();
  });

  it('Should properly connect to Gemini\'s API and receive a response',
      async () => {
        await expectAsync(component.navbar
            .submitPrompt('Agrega una clase docente.'))
            .toBeResolved();
      });
});
