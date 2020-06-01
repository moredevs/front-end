import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AsideComponent } from '../app/layout/aside/aside.component';
import { ServiceService } from './layout/service.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      imports: [
        RouterTestingModule.withRoutes([
          { path: '',   loadChildren: () =>  import('./layout/main/main.module').then(    m => m.MainModule  ) },
        ])
      ],
      declarations: [
        AppComponent,AsideComponent
      ],
      providers:[ServiceService]
      
    }).compileComponents();
  }));


  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('frontend');
  });

 
});
