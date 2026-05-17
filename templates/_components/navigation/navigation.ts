import { IComponent } from '@assets/js/@types/Component';

interface NavigationComponent extends IComponent {
  openNavigation(): void;
  closeNavigation(): void;
  toggleNavigation(): void;
  initEventListener(): void;
}

const navigation: NavigationComponent = {
  cfg: {
    name: 'c-navigation',
    selectors: {
      navigation: '.js-navigation',
      hamburger: '.js-hamburger',
    },
    classes: {
      active: 'is-active',
      hidden: 'hidden',
      overflowHidden: 'overflow-hidden',
    },
    el: {
      $navigation: null,
      $hamburger: null,
    },
  },
  setElements(mainEl: HTMLElement) {
    this.cfg.el.$navigation = mainEl;
    this.cfg.el.$hamburger = document.querySelector(this.cfg.selectors.hamburger);
  },

  openNavigation() {
    this.cfg.el.$hamburger.setAttribute('aria-expanded', 'true');
    this.cfg.el.$navigation.classList.add(this.cfg.classes.active);
    document.body.classList.add(this.cfg.classes.overflowHidden);
  },

  closeNavigation() {
    this.cfg.el.$hamburger.setAttribute('aria-expanded', 'false');
    this.cfg.el.$navigation.classList.remove(this.cfg.classes.active);
    document.body.classList.remove(this.cfg.classes.overflowHidden);
  },

  toggleNavigation() {
    const menuOpen = this.cfg.el.$navigation.classList.contains(this.cfg.classes.active);

    if (menuOpen) {
      this.closeNavigation();
    } else {
      this.openNavigation();
    }
  },

  initEventListener() {
    this.cfg.el.$hamburger.addEventListener('click', this.toggleNavigation.bind(this));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        this.closeNavigation();
      }
    });
  },

  init(el: HTMLElement) {
    this.setElements?.(el);
    this.initEventListener();
  },
};

export default navigation;
