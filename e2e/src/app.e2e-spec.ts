import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display logo', () => {
    page.navigateTo();
    expect(page.getLogo()).toEqual('myForm');
  });
});
