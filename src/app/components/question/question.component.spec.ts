import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionComponent } from './question.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { KeysPipe } from '../../pipes/keys.pipe';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ QuestionComponent, KeysPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
