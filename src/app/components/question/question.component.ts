import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent {

  @Input() questions: object;
  @Input() question;
  @Input() names: Array<string>;
  @Input() questionIndex: number;
  @Input() group: FormGroup;

  constructor() {}


  /**
   * Escuta as modificações nos campos select do formulário
   * para ativar as práximas perguntas se for o caso.
   *
   * @param {string} questionName
   * @param {string} value
   * @memberof QuestionComponent
   * @example
   * this.onChange('likes_myform', '1')
   */

  onChange(questionName: string, value: string) {
    try {
      const targetName = this.questions[questionName].options.yes.show;
      const targetQuestion = this.questions[targetName];

      if ( value === '1' ) {
        targetQuestion.hidden = false;
      } else {
        targetQuestion.hidden = true;
      }
    } catch ( error ) {
      return; // Fim das questões
    }
  }

}
