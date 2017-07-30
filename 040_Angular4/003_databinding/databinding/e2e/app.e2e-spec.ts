import { DatabindingPage } from './app.po';

describe('databinding App', () => {
  let page: DatabindingPage;

  beforeEach(() => {
    page = new DatabindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
