//import shadyCss from 'utils/shadyCss'

const template = document.createElement('template')
template.innerHTML = `PAGE<slot></slot>`

//shadyCss(template, 'meli-page')
class Page extends HTMLElement {
  constructor() {
    super()
    this._shadownRoot = this.attachShadow({ mode: 'open' })
    this._shadownRoot.appendChild(template.content.cloneNode(true))
  }

  attributeChangedCallback(name, oldValue, newValue) {

  }

  connectedCallback() {
    
  }

  set query(value) {
    console.log('>>> page query', value)
    console.log(this._shadownRoot.querySelector('slot').assignedElements())
  }

  set params(value) {
    console.log('>>> page params', value)
  }
}

if (!window.customElements.get('meli-page')) {
  window.customElements.define('meli-page', Page)
}
