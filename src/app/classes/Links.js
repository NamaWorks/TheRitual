import { getApiDataFront } from '../../api/utils';
import Component from './Component';

export default class Links extends Component{
  constructor ({ element }) {
    super({ element });
  };

  initInterceptor () {
    if(!this.element.getAttribute('data-link')){

      this.element.setAttribute('data-link', 'navigation-link');
      this.element.classList.add('navigation__link');
      this.element.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if(link) {
          e.preventDefault();
          const url = link.getAttribute('href');
          this.handleNavigation(url);
        };
      })

    }
  };

  async handleNavigation(url) {
    history.pushState({}, '', url);
    // const data = await getApiDataFront(url)
  };
};