import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class QuestionsService {
  URL = 'https://thinkseg-javascript-test.herokuapp.com/config';
  response = [];

  constructor(private http: HttpClient) {}

  parseResponse(object) {
    Object
      .keys(object)
      .map((objectKey, index) => {
        this.response.push(object[objectKey]);
      });
  }

  request() {
    interface QuestionResponse {
      questions: object;
    }

    this.http.get<QuestionResponse>(this.URL).subscribe(
      data => this.parseResponse(data.questions),
      err => console.log(err.message)
    );

  }

  getQuestions() {
    this.request();
    return this.response;
  }
}
