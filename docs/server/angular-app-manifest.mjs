
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
    'index.csr.html': {size: 763, hash: '52b25fb9be37ec0dfae8d872264d609745a3916c1150c8398e7d9fa38a50ad24', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1276, hash: 'dcaf577bc3e8a21113f1ebc1d4d0e5e3aa20a9b74e06514e434d38d9f01a452f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7260, hash: '4db0ef02f5f71a7d4551c4c60284f64960b7f6f89e6d7aedd87ee2092d67638b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
