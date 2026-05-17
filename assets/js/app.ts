// because vite generated code does not go through babel
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';

import '../css/app.pcss';

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
