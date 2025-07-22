import Component from "./Component";

export default class HomeImage extends Component{
  constructor ({ element }) {
    super({element});
    this.element = element;
    this.getComponentPositionView();
    this.animate();
  }
  
  setTop () {
    this.element.classList.add('top__image');
    this.top = true;
  };
  
  setBottom () {
    this.element.classList.add('bottom__image');
    this.bottom = true;
  };

  animate () {
  };
};