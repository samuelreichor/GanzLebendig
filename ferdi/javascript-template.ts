<%
var splittedPath = modulePath.split('/');
var mn = moduleName;
mn = mn.replace('-', '_');
var cn = pathOptions.key.charAt(0) + '-' + mn;

var mnComponent = mn.charAt(0).toUpperCase() + mn.slice(1) + 'Component';
%>
import {IComponent} from '@assets/js/@types/Component';

interface <%= mnComponent %> extends IComponent {

}

const <%= mn %>: <%= mnComponent %> = {
  cfg: {
    name: 'c-<%= mn %>',
    selectors: {
      <%= mn %>: '.js-<%= mn %>',
    },
    classes: {
      active: 'is-active',
    },
    el: {
      $<%= mn %>: null,
    },
  },
  setElements(mainEl: HTMLElement) {
    this.cfg.el.$<%= mn %> = mainEl;
  },
  init(el: HTMLElement) {
    console.debug(`Init: ${this.cfg.name}`);
    this.setElements?.(el);
  },
};

export default <%= mn %>;
