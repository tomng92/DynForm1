import { Injectable }       from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { MyCounterQuestion }  from './question-mycounter';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'brave2',
        label: 'Indice de bravoure 2',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
      new DropdownQuestion({
        key: 'brave1',
        label: 'Indice de bravoure 1',
        options: [
          {key: 'solid',  value: 'solide'},
          {key: 'great',  value: 'très bien'},
          {key: 'good',   value: 'bien'},
          {key: 'unproven', value: 'non vérifié'}
        ],
        order: 4
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'Nom du héro',
        value: 'Bombasto',
        required: true,
        order: 1
      }),


      new MyCounterQuestion({
        key: 'thecounter',
        label: 'votre compteur',
        value: '111',
        required: false,
        order: 5
      }),


      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Courriel',
        type: 'email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);

  }
}
