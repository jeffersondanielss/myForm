import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionsService } from './questions.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Forms';
  URL = 'https://thinkseg-javascript-test.herokuapp.com/config';
  questions = [];
  questionsService: QuestionsService;

  constructor(_questionsService: QuestionsService) {
    this.questionsService = _questionsService;
  }

  ngOnInit() {
    this.questions = this.questionsService.getQuestions();
  }

}
