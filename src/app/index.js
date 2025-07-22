import '../styles/index.scss';
import HomeImage from './classes/HomeImage';

class App {
  constructor () {
    this.deltaY = 0;

    this.selectImages();
    this.animateImages();
    this.handleWheel();
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

  animateImages () {
    this.imageTop.animate(this.deltaY);
    this.imageBottom.animate(this.deltaY);
  };
};

document.addEventListener('DOMContentLoaded', () => {
  new App()
});