import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { QuestionsService } from './questions.service';

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
  cool_level = undefined;

  constructor(private qs: QuestionsService, fb: FormBuilder) {
    this.questionsService = qs;
    this.thinkForm = new FormGroup({});
    
    this.questionsService.get().then( ({ questions }) => {
      this.saveQuestions(questions)
      this.thinkForm = new FormGroup(this.getFormsNames());
    })
  }

  getFormsNames(){
    let inputs = {}
    this.names.forEach(name => inputs[name] = new FormControl());
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

  addAnswers(post) {
    this.questionsService
      .post({ answers: this.thinkForm.value })
      .then( ({ cool_level }) => this.cool_level = cool_level )
  }
}
