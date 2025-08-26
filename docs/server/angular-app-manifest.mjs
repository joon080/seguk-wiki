
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
    'index.csr.html': {size: 697, hash: '10158e62efbb635b31e7a0c5796fc99dbffaf0d00f6637821cc6c7b9a874637a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1210, hash: 'be03016fc5e8a2841c192b7d27a66987865dcbf47ce622f0088b592b4573cd6d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7777, hash: '8bf86bc30cd5025255652d4f1424afa64c1d1415c34f08d3d525e8afa700bf19', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
