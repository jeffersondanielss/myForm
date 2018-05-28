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
   * Escuta as modificações nos campos select do formulário
   * para ativar as práximas perguntas se for o caso.
   *
   * @memberof AppComponent
   * @example
   * this.onChange('likes_thinkseg', 1)
   */

  onChange(questionName, value) {
    const targetName = this.questions[questionName].options.yes.show;
    const targetQuestion = this.questions[targetName];

    if ( value === '1' ) {
      targetQuestion.hidden = false;
    } else {
      targetQuestion.hidden = true;
    }
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
      .post({ answers: this.thinkForm.value })
      .then( ({ cool_level }) => this.cool_level = cool_level );
  }
}
