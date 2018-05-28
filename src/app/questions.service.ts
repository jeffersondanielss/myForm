import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config, Quotations } from './interfaces';

@Injectable()

export class QuestionsService {
  URL = 'https://thinkseg-javascript-test.herokuapp.com/';

  constructor(private http: HttpClient) {}

  /**
   * Busca a configuração das questões no endpoint /config
   *
   * @memberof QuestionsService
   */

  get(): Promise<Config> {
    return this.http
      .get<Config>(`${this.URL}/config`)
      .toPromise();
  }

  /**
   * Envia as respostas do formulário para o endpoint /quotations
   * e returna uma promise com a resposta.
   *
   * @param {object} answers
   * @memberof QuestionsService
   */

  post(answers: object): Promise<Quotations> {
    return this.http
      .post<Quotations>(`${this.URL}/quotations`, answers)
      .toPromise();
  }
}
