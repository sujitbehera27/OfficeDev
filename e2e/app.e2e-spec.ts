import { OfficeDevPage } from './app.po';

describe('office-dev App', () => {
  let page: OfficeDevPage;

  beforeEach(() => {
    page = new OfficeDevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
