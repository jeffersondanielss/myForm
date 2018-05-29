import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getLogo() {
    return element(by.css('app-root .logo')).getAttribute('alt');
  }
}
