import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsService } from './questions.service';
import { AppComponent } from './app.component';
import { KeysPipe } from './keysPipe';
import { AlertComponent } from './components/alert/alert.component';
import { LogoComponent } from './components/logo/logo.component';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    AlertComponent,
    LogoComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
