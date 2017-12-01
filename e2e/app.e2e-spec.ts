import { LabCorpProjPage } from './app.po';

describe('lab-corp-proj App', () => {
  let page: LabCorpProjPage;

  beforeEach(() => {
    page = new LabCorpProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
