import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config, Quotations } from './interfaces';

@Injectable()

export class QuestionsService {
  URL = 'https://thinkseg-javascript-test.herokuapp.com/';

  constructor(private http: HttpClient) {}

  get() {
    return this.http
      .get<Config>(`${this.URL}/config`)
      .toPromise();
  }

  post(answers) {
    return this.http
      .post<Quotations>(`${this.URL}/quotations`, answers)
      .toPromise();
  }
}
