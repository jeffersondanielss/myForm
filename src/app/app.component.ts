import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { QuestionsService } from './services/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  questionsService: QuestionsService;
  myForm: FormGroup;
  questions: object = {};
  names: Array<string> = [];
  cool_level: string = undefined;

  constructor(private qs: QuestionsService) {
    this.questionsService = qs;
    this.myForm = new FormGroup({});

    this.questionsService.get()
      .then( ({ questions }) => {
        this.questions = questions;
        this.names = Object.keys(questions);
        this.myForm = new FormGroup(this.getFormsNames());
      });
  }

  /**
   * Returna um grupo de campos controlados do formulário,
   * com os nomes das perguntas.
   *
   * @memberof AppComponent
   * @example
   * this.getFormsNames()
   */

  getFormsNames () {
    const inputs = {};
    this.names.forEach(name => inputs[name] = new FormControl());
    return inputs;
  }

  /**
   * Envia as respostas do formulário para um endpoint e
   * guarda a resposta para exibir para o usuário.
   *
   * @memberof AppComponent
   * @example
   * this.addAnswers()
   */

  addAnswers() {
    this.questionsService
      .post({ answers: this.myForm.value })
      .then( ({ cool_level }) => this.cool_level = cool_level );
  }
}
