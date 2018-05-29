import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { LogoComponent } from './components/logo/logo.component';
import { QuestionComponent } from './components/question/question.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ObjectToArray } from './pipes/objectToArray.pipe';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      declarations: [
        AppComponent,
        AlertComponent,
        LogoComponent,
        QuestionComponent,
        ObjectToArray
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
