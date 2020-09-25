//import shadyCss from 'utils/shadyCss'
const template = document.createElement('template')
template.innerHTML = `ROUTER<slot></slot>`

const meliHistory = () => {
  return {
    push: url => window.history.pushState('', '', url)
  }
}

//shadyCss(template, 'meli-router')
class Router extends HTMLElement {
  static get observedAttributes() {
    return ['path']
  }

  constructor() {
    super()
    this._shadownRoot = this.attachShadow({ mode: 'open' })
    this._shadownRoot.appendChild(template.content.cloneNode(true))
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attribute changed', name, newValue)
    this[name] = newValue
  }

  connectedCallback() {
    this._pages = this._shadownRoot.querySelector('slot').assignedElements()
    this.innerHTML = ''
    this.setAttribute('path', '/items?search=banana')
  }

  set path(value) {
    const pageToLoad = this._routes.find((route) => value.match(route.pathRegex))
    const page = this._pages.find((page) => page.getAttribute('path') === pageToLoad.path)
    const props = { query: null, params: null }

    if (value.match(/\?search/)) {
      props.query = value.replace('/items?search=', '')
    } else if (value.match(/\/items\//)) {
      props.params = value.replace('/items/', '')
    }

    Array.from(page.childNodes).forEach(elem => page.removeChild(elem))
    pageToLoad.component(props, page, meliHistory())

    Array.from(this.childNodes).forEach(elem => this.removeChild(elem))
    this.appendChild(page)
  }

  set routes(value) {
    this._routes = value
  }

  get routes() {
    return this._routes
  }
}

if (!window.customElements.get('meli-router')) {
  window.customElements.define('meli-router', Router)
}
