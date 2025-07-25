import { getApiDataFront } from '../api/utils';
import '../styles/index.scss';
import Navigation from './classes/Navigation';
import { backendUrl } from './utils/globalVariables';

class App {
  constructor () {
    this.deltaY = 0;
    this.getTemplate();
    this.observeTemplateChange();
    this.content = document.querySelector('#content');
  };

  getTemplate () {
      this.templateElement = document.querySelector('[data-template]');
      this.template = this.templateElement.getAttribute('data-template');
  };

  observeTemplateChange () {
    const observer = new MutationObserver(() => {
      this.template = this.templateElement.getAttribute('data-template')
      this.onChange(this.template);
    });

    observer.observe(this.templateElement, { attributes: true, attributeFilter: ['data-template'] });
  };

  async onChange (template) {
  const request = await fetch(backendUrl + template);  
  if(request.status === 200){
    // const html = await request.text();
    // const div = document.createElement('div');
    // div.innerHTML = html;
    // const divContent = div.querySelector('.content');
    // this.content.innerHTML = divContent.innerHTML;
    // history.pushState({}, '', this.template);
  }
  };  
};

document.addEventListener('DOMContentLoaded', () => {
  new App();
});

document.addEventListener('DOMContentLoaded', () => {
  new Navigation ({
    content: document.querySelector('#content'),
    templateElement: document.querySelector('[data-template]')
  });
});