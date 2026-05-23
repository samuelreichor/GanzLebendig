// Desktop only: pin the hero background image to the viewport at the hero's own
// height, so the headline scrolls away over a standing image while the content
// scrolls opaquely over it.
//
// On mobile the pin is deliberately skipped: `position: fixed` jumps while the
// browser's address bar collapses on first scroll. There the image just stays
// `absolute inset-0` (CSS default) and scrolls away normally with the hero —
// a pure-CSS, jank-free behaviour.
const hero = {
  init(header: HTMLElement) {
    const bg = header.querySelector<HTMLElement>('.js-hero-bg');
    if (!bg) return;

    const desktop = window.matchMedia('(min-width: 768px)');
    let observer: ResizeObserver | null = null;

    const syncHeight = () => {
      bg.style.height = `${header.offsetHeight}px`;
    };

    const pin = () => {
      bg.style.position = 'fixed';
      bg.style.top = '0';
      bg.style.left = '0';
      bg.style.right = '0';
      bg.style.bottom = 'auto';
      syncHeight();

      if (!observer && 'ResizeObserver' in window) {
        observer = new ResizeObserver(syncHeight);
        observer.observe(header);
      }
    };

    const unpin = () => {
      observer?.disconnect();
      observer = null;
      bg.removeAttribute('style');
    };

    const apply = () => (desktop.matches ? pin() : unpin());

    apply();
    desktop.addEventListener('change', apply);
  },
};

export default hero;
