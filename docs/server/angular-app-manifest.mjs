
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
    'index.csr.html': {size: 697, hash: 'a27217b1b73cd3e1e572342cf7d3fc09f7b14f1ff717b90029b874ba14f2aae4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1210, hash: '7ed4a86737f6938c1dc1fec3b3562b2e22b86bc5b39d4eb4a1e6d517c9cbc3da', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7621, hash: '7d40536b9bfc853ec9611a9d6a1db144ebd486add2b8cf462e44e852f7dfd0db', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
