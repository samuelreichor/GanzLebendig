// Async load LazySizes and it's plugins
export default async () => {
  if (document.querySelectorAll('.lazyload').length) {
    const LazySizes = await import('lazysizes');

    // fix issue when image is already in viewport and content is not loaded yet
    document.addEventListener('DOMContentLoaded', () => {
      LazySizes.init();
    });
  }
};
