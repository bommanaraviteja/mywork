import { TestSwaggerPage } from './app.po';

describe('test-swagger App', function() {
  let page: TestSwaggerPage;

  beforeEach(() => {
    page = new TestSwaggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
