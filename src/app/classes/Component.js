export default class Component {
  constructor ({ element, elements = {} }) {
    this.element = element;
  }

  getComponentPositionAbs () {
    this.positionAbsTop = this.element.getBoundingClientRect().top;
  };
  
  getComponentPositionView () {
    this.positionViewTop = this.element.getBoundingClientRect().top - window.pageYOffset + window.innerHeight;
  };

  createObserver () {
  this.observer = new window.IntersectionObserver( entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // this.animateIn();
      } else {
        // this.animateOut();
      };
    });
  })
  this.observer.observe(this.element)
  };

  updateTemplate () {
    
  };
}