import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { QuestionsService } from './questions.service';
import { KeysPipe } from './keysPipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  questionsService: QuestionsService;
  thinkForm: FormGroup;
  post: any;
  questions = [];
  names = [];

  constructor(private qs: QuestionsService, fb: FormBuilder) {
    this.questionsService = qs;
    this.thinkForm = new FormGroup({});
    
    this.questionsService.request().then( data => {
      this.saveQuestions(data)
      this.thinkForm = new FormGroup(this.getFormGroup(this.names));
    })
  }

  getFormGroup(names){
    let inputs = {}
    names.forEach(name => inputs[name] = new FormControl());
    return inputs
  }

  saveQuestions(data) {
    Object.keys(data)
      .forEach( questionName => {
        this.names.push(questionName)
        this.questions.push(data[questionName]);
      });
  }

  onChange(a, value) {
    if (!a) return;

    if ( value === "1" ) {
      a.hidden = false
    } else {
      a.hidden = true
    }
    
  }

  addPost(post) {
    console.log({ answers: this.thinkForm.value })
  }
}
