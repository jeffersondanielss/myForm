import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsService } from './questions.service';
import { AppComponent } from './app.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { KeysPipe } from './keysPipe'

@NgModule({
  declarations: [
    AppComponent,
    FieldsetComponent,
    KeysPipe
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
