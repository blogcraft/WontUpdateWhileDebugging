import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { EndpointsService } from './providers/endpoints.service';
import { Observable, of } from 'rxjs';
import { UpdateService } from './update.service';
// import { FeriadosService } from './services/feriados.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let mockEndpointsService;

  beforeEach(waitForAsync(() => {
    mockEndpointsService = jasmine.createSpyObj(['getEndpoints']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        MatSnackBarModule,
        HttpClientTestingModule,
        ServiceWorkerModule.register('', { enabled: false }),
        AppComponent,
      ],
      providers: [
        {
          provide: EndpointsService,
          useValue: {
            getEndpoints(): Observable<any[]> {
              return of([]);
            },
          },
        },
        // { provide: FeriadosService, useValue: { getDiasFeriados(): Observable<any[]> { return of([]); } } },
        { provide: UpdateService, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    console.log('AppComponent');
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    // mockEndpointsService.getEndpoints.and.returnValue(of([]));
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('deberia de crear el app Component', waitForAsync(() => {
    const app = de.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('deberia tener un div con una clase "mat-typography"', waitForAsync(() => {
    const compiled = de.nativeElement;
    expect(de.query(By.css('.mat-typography'))).toBeTruthy();
  }));
});
