import { backendUrl } from "../utils/globalVariables";

export default class Navigation {
  constructor({ content, templateElement }) {
    this.content = content;
    this.templateElement = templateElement;
    this.initLinkInterceptor();
    this.handleBrowserNavigation();
  }

  initLinkInterceptor () {
    document.body.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-template-link]');
      if (link) {
        e.preventDefault();
        const template = link.getAttribute('data-template-link');
        this.templateElement.setAttribute('data-template', template);
        history.pushState({}, '', link.getAttribute('href'));
        this.loadContent(template);
        // for dynamic routes we'd need some kind of id or any way to get to the specific element
      }
    });
  };

  handleBrowserNavigation () {
    window.addEventListener('popstate', (e) => {
      // console.log(location.pathname);
      window.location.reload() // not the most optimal solution but works for a while
      // this.templateElement.setAttribute('data-template', location.pathname)
      // this.loadContent(template); // could we do it without loading the page? with some kind of cache or something // we could load the content as it loads when clicking on a link
    });
  };

  async loadContent (template) {
    const response = await fetch(`${backendUrl}${template}`);
    if (response.ok) {
      const html = await response.text();
      const div = document.createElement('div');
      div.innerHTML = html;
      const divContent = div.querySelector('.content');
      this.content.innerHTML = divContent ? divContent.innerHTML : '';
    };
  };
};