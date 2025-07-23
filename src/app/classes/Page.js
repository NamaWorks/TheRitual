export default class Page {
  constructor ({ template }){
    this.template = template;
  };

  showTemplate() {
    console.log(this.template)
  }

  
};