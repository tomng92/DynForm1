import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { MyCounterInputComponent } from './custinput1/mycounter.component';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent,
                  MyCounterInputComponent],
  bootstrap: [ AppComponent ]
})


export class AppModule {
  constructor() {
  }
}
