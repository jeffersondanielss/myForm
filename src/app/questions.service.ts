import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';

@Injectable()

export class QuestionsService {
  URL = 'https://thinkseg-javascript-test.herokuapp.com/config';
  response = [];

  constructor(private http: HttpClient) {}

  request() {
    interface QuestionResponse {
      questions: object;
    }

    return new Promise((resolve, reject) => {
      this.http.get<QuestionResponse>(this.URL).subscribe(
        data => resolve(data.questions),
        err => reject(err.message)
      );
    })

  }
}
