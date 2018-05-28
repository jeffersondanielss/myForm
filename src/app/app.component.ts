import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
  questions = {};
  names = [];
  cool_level = undefined;

  constructor(private qs: QuestionsService) {
    this.questionsService = qs;
    this.thinkForm = new FormGroup({});

    this.questionsService.get()
      .then( ({ questions }) => {
        this.questions = questions;
        this.names = Object.keys(questions);
        this.thinkForm = new FormGroup(this.getFormsNames());
      });
  }

  getFormsNames() {
    const inputs = {};
    this.names.forEach(name => inputs[name] = new FormControl());
    return inputs;
  }

  onChange(questionName, value) {
    const targetName = this.questions[questionName].options.yes.show;
    const targetQuestion = this.questions[targetName];

    if ( value === '1' ) {
      targetQuestion.hidden = false;
    } else {
      targetQuestion.hidden = true;
    }
  }

  addAnswers(post) {
    this.questionsService
      .post({ answers: this.thinkForm.value })
      .then( ({ cool_level }) => this.cool_level = cool_level );
  }
}
