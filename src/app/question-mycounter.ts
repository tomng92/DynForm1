import { QuestionBase } from './question-base';

export class MyCounterQuestion extends QuestionBase<string> {
  controlType = 'mycounter';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
