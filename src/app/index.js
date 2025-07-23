import '../styles/index.scss';
import HomeImage from './classes/HomeImage';

class App {
  constructor () {
    this.deltaY = 0;

    this.selectImages();
    this.handleWheel();
    this.addEventListeners();
  }

  handleWheel () {
    window.addEventListener('wheel', (e) => {
      this.deltaY = e.deltaY
    })
  };
  
  selectImages () {
    this.images = document.querySelectorAll('.home__gallery__image__content');
    this.imageTop = new HomeImage({ element: this.images[2] });
    this.imageBottom = new HomeImage({ element: this.images[6] });

    this.imageTop.setTop();
    this.imageBottom.setBottom();
  };

  addEventListeners () {
    window.addEventListener('load', () => {
      this.animateImages();
    });

    window.addEventListener('wheel', () => {
      this.animateImages();
    });
  };

  animateImages () {
    if (this.imageBottom && this.imageTop) {
      this.imageTop.animate(this.deltaY);
      this.imageBottom.animate(this.deltaY);
    };
  };
};

document.addEventListener('DOMContentLoaded', () => {
  new App();
});