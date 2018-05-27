import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { QuestionsService } from './questions.service';
import { KeysPipe } from './keysPipe';

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

  constructor(private qs: QuestionsService, fb: FormBuilder) {
    this.questionsService = qs;
    this.thinkForm = new FormGroup({});
    
    this.questionsService.request().then( data => {
      this.saveQuestions(data)
      this.thinkForm = new FormGroup(this.getFormGroup(this.names));
    })
  }

  saveQuestions(object) {
    Object.keys(object)
      .map((objectKey, index) => {
        this.names.push(objectKey)
        this.questions.push(object[objectKey]);
      });
  }

  onChange(a, value) {
    console.log(this.thinkForm.value)
    if ( value === "1" ) {
      console.log( a.yes.show )
    }
    
  }

  getFormGroup(names){
    let obj = {}

    for( let item of names) {
      obj[item] = new FormControl()
    }

    return obj
  }

  addPost(post) {
    console.log({ answers: this.thinkForm.value })
  }
}
