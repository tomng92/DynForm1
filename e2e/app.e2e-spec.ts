import { DynForm1Page } from './app.po';

describe('dyn-form1 App', function() {
  let page: DynForm1Page;

  beforeEach(() => {
    page = new DynForm1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
