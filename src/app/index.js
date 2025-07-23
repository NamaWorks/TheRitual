import { getApiDataFront } from '../api/utils';
import '../styles/index.scss';
import HomeImage from './classes/HomeImage';
import Links from './classes/Links';

class App {
  constructor () {
    this.deltaY = 0;

    this.getTemplate();
    this.updateTemplate();
    this.handleWheel();
    // this.selectImages();

    const links = document.querySelectorAll('a')
    links.forEach(link => {
      console.log(link)
      link.addEventListener('click', (e) => {
        e.preventDefault();
        getApiDataFront()
    }) 
    })
  }

  getTemplate () {
      this.templateElement = document.querySelector('[data-template]');
      this.template = this.templateElement.getAttribute('data-template');
      console.log(this.template);
    };
    
  updateTemplate () {
    this.templateElement = document.querySelector('[data-template]');
    this.templateElement.addEventListener('change', () => {
      this.template = this.templateElement.getAttribute('data-template');
    })
  };

  createPages () {
    this.pages = {
      home: new Home(),
      about: new About(),
    };

    this.page = this.pages[this.template]
  };

  handleWheel () {
    window.addEventListener('wheel', (e) => {
      this.deltaY = e.deltaY
    })
  };
  
  // selectImages () {
  //   this.images = document.querySelectorAll('.home__gallery__image__content');
  //   this.imageTop = new HomeImage({ element: this.images[2] });
  //   this.imageBottom = new HomeImage({ element: this.images[6] });

  //   this.imageTop.setTop();
  //   this.imageBottom.setBottom();
  // };
};

document.addEventListener('DOMContentLoaded', () => {
  new App();
});