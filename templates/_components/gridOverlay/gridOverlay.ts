const gridOverlay = {
  name: 'js-gridOverlay',
  selectors: {
    gridOverlay: '.js-gridOverlay',
    gridBtn: '.js-gridOverlayBtn',
  },
  classes: {
    hidden: 'hidden',
  },
  el: {
    $gridOverlay: null as HTMLElement | null,
    $gridBtn: null as HTMLElement | null,
  },

  setElement(): void {
    this.el.$gridOverlay = document.querySelector(this.selectors.gridOverlay);
    this.el.$gridBtn = document.querySelector(this.selectors.gridBtn);
  },

  toggleGrid(): void {
    let toggleState = false;

    toggleState = this.el.$gridOverlay.classList.contains(this.classes.hidden);

    if (!toggleState) {
      this.el.$gridOverlay?.classList.add(this.classes.hidden);
    }
    localStorage.setItem('gridVisible', String(toggleState));
  },

  checkLocalStorageState(): void {
    if (localStorage.getItem('gridVisible') === 'true') {
      this.el.$gridOverlay?.classList.remove(this.classes.hidden);
    }
  },

  toggleGridEventListener() {
    this.el.$gridBtn.addEventListener('click', () => {
      this.toggleGrid();

      if (localStorage.getItem('gridVisible') === 'true') {
        this.el.$gridOverlay?.classList.remove(this.classes.hidden);
      }
    });
  },

  init(): void {
    this.setElement();
    this.checkLocalStorageState();
    this.toggleGridEventListener();
  },
};

export default gridOverlay;
