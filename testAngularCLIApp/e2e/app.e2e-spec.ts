import { TestAngularCLIAppPage } from './app.po';

describe('test-angular-cliapp App', function() {
  let page: TestAngularCLIAppPage;

  beforeEach(() => {
    page = new TestAngularCLIAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
