import './Router'
import './Page'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { Product } from './pages/Product'

export const App = () => {
  const router = document.createElement('meli-router')
  router.routes = [
    {
      name: 'Home',
      component: Home,
      path: '/',
      pathRegex: /^\/$/gmi
    },
    {
      name: 'Search',
      component: Search,
      path: '/items',
      pathRegex: /^\/items(\?)search=[a-z0-9_-]*$/gmi 
    },
    {
      name: 'Product',
      component: Product,
      path: '/items/:id',
      pathRegex: /^\/items\/[a-z0-9_-]*$/gmi
    }
  ]
  router.innerHTML = `
    <meli-page component="Home" path="/"></meli-page>
    <meli-page component="Search" path="/items"></meli-page>
    <meli-page component="Product" path="/items/:id"></meli-page>
  `
  const app = document.createElement('div')
  app.id = `root`
  app.appendChild(router)
  return app
}
