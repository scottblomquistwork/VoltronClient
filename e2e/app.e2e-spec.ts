import { VoltronClientPage } from './app.po';

describe('voltron-client App', () => {
  let page: VoltronClientPage;

  beforeEach(() => {
    page = new VoltronClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
