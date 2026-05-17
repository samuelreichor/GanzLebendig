import '../css/app.css';

import components from './_importComponents';
import vendors from './_importVendors';

// Add JS Loaded class to the body
document.documentElement.classList.add('js-loaded');

// App main
const main = () => {
  components();
  vendors();
};

main();
