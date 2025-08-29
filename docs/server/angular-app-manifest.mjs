
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/seguk-wiki/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/seguk-wiki"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 889, hash: 'e621b909df61d88f427c5e3afbe02723f40682925e98036a33f3b8b96baf0fb7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1210, hash: '8e51a1d3067bace3ba580b9eb1828e87fa718343ccea6edd4d0f1e1ed7b60329', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8248, hash: '5d94fe31ca4835852553bf7adaf3acad4ea0e56403d2bdc388913b380348bc66', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HQCIPD4C.css': {size: 67, hash: 'nibY493osCc', text: () => import('./assets-chunks/styles-HQCIPD4C_css.mjs').then(m => m.default)}
  },
};
