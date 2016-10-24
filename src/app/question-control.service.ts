
// QuestionControlService, a simple service for transforming our questions to a FormGroup. 
// In a nutshell, the form group consumes the metadata from the question model and allows us
// to specify default values and validation rules.

import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  // Convert the list of questions into a form-group
  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}