
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
    'index.csr.html': {size: 697, hash: '63bf63c7815f4de53dab840392f8756c82daf897434550032f0ba891019387ee', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1210, hash: '2a5170887846eabbd31c80f591047c4eb2f8f9b995e997b4cf95af22b73c59c3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7795, hash: '115eec2cca931d599b29036754bca37c85587cba6c3efa458d4237fa7e06b615', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
