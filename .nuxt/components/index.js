export { default as Immagine } from '../../components/Immagine.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Feature } from '../../components/feature.vue'
export { default as Grid } from '../../components/grid.vue'
export { default as Navbar } from '../../components/navbar.vue'
export { default as Page } from '../../components/page.vue'
export { default as Teaser } from '../../components/teaser.vue'

export const LazyImmagine = import('../../components/Immagine.vue' /* webpackChunkName: "components/Immagine" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyFeature = import('../../components/feature.vue' /* webpackChunkName: "components/feature" */).then(c => c.default || c)
export const LazyGrid = import('../../components/grid.vue' /* webpackChunkName: "components/grid" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => c.default || c)
export const LazyPage = import('../../components/page.vue' /* webpackChunkName: "components/page" */).then(c => c.default || c)
export const LazyTeaser = import('../../components/teaser.vue' /* webpackChunkName: "components/teaser" */).then(c => c.default || c)
