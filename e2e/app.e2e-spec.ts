import { AudioTubePage } from './app.po';

describe('audio-tube App', () => {
  let page: AudioTubePage;

  beforeEach(() => {
    page = new AudioTubePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
