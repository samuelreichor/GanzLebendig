module.exports = {
  defaults: {
    template: true,
    css: false,
    javascript: false,
    vue: false,
  },
  files: {
    template: {
      name: '',
      postfix: '',
      extension: 'twig',
    },
    css: {
      name: '',
      postfix: '',
      extension: 'pcss',
    },
    javascript: {
      name: '',
      postfix: '',
      extension: 'ts',
    },
    vue: {
      name: '',
      postfix: '',
      extension: 'vue',
    },
  },
  paths: {
    templateBase: 'ferdi/',
    modulePath: './templates/',
    pathOptions: {
      // the first character of each key works as an alias for the path so you could use `-a` as an alias for atomic
      components: '_components/',
      pages: '_pages/',
      blocks: '_contentBuilder/blocks/',
      sections: '_sections/',
      embeds: '_embeds/',
    },
  },
};
