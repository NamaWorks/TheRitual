import { getApiDataFront } from '../api/utils';
import '../styles/index.scss';
import HomeImage from './classes/HomeImage';
import Links from './classes/Links';

class App {
  constructor () {
    this.deltaY = 0;

    this.getTemplate();
    this.observeTemplateChange();
    this.content = document.querySelector('#content');

    const links = document.querySelectorAll('a')
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.templateElement.setAttribute('data-template', link.getAttribute('href').replace('/', ''));
    });
    });
  };

  getTemplate () {
      this.templateElement = document.querySelector('[data-template]');
      this.template = this.templateElement.getAttribute('data-template');
  };

  observeTemplateChange () {
    const observer = new MutationObserver(() => {
      this.getTemplate();
    });

    observer.observe(this.templateElement, { attributes: true, attributeFilter: ['data-template'] })
  };

  async onChange (template) {
    // await this.page.hide();

  const request = await window.fetch("http://localhost:3000/about");
  // const request = await window.fetch(url);
  
  if(request.status === 200){
    const html = await request.text();
    // now we can modify the inner html of our document with this one. maybe it would be better to print all the html inside a div in order to select whichever elements we want from them using querySelector and then adding them to our document => see Luis Bizarro project in order to know more (frontend index.js file).

    const div = document.createElement('div');

    div.innerHTML = html;

    const divContent = div.querySelector('.content');
    this.template = divContent.getAttribute('data-template');
    // we need to manage the template change here

    this.templateElement.setAttribute(this.template);

    this.content = divContent;
  }
  };

  
};

document.addEventListener('DOMContentLoaded', () => {
  new App();
});