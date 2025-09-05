
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
    'index.csr.html': {size: 889, hash: 'a4c2d680d811fb0235c9b9311a5a5e0d0f106f25b9e4bfc7db2b79b27ae2554e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1210, hash: '5c506866450c3a66d8062686df191c9a1b21f5fab0dd58ec7a038f8e106b59a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8248, hash: '3969990a4f8993f3627d055a8b0c69050ee7c0f88f3e1e054789e2587b4ceb74', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HQCIPD4C.css': {size: 67, hash: 'nibY493osCc', text: () => import('./assets-chunks/styles-HQCIPD4C_css.mjs').then(m => m.default)}
  },
};
