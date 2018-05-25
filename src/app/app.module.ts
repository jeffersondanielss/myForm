import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsService } from './questions.service';
import { AppComponent } from './app.component';
import { FieldsetComponent } from './fieldset/fieldset.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldsetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
