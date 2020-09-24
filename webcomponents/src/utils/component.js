import shadyCss from './shadyCss'

class BotoElement extends HTMLElement {
  constructor() {
    super()
    this._slot = null
    this._handleSlotChange = this.slotChange && this.slotChange.bind(this)
    this.build(this.html())
  }

  build(templateString) {
    const template = document.createElement('template')
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    template.innerHTML = templateString
    shadyCss(template, this.tagName.toLocaleLowerCase())
    this._shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this._addEvents()
    this.showed && this.showed()
  }

  disconnectedCallback() {
    this._removeEvents()
    this.hidden && this.hidden()
  }

  _addEvents() {
    this._slot = this._shadowRoot.querySelector('slot')
    this._slot && this._slot.addEventListener('slotChange', this._handleSlotChange)
  }

  _removeEvents() {
    this._slot && this._slot.removeEventListener('slotChange', this._handleSlotChange)
  }

  get slot() {
    return this._slot
  }

  get shadowRoot() {
    return this._shadowRoot
  }

  static register(tagName, className) {
    if (!window.customElements.get(tagName)) {
      window.customElements.define(tagName, className)
    }
  }
}

export default BotoElement
