import css from './style.css'
import BotoElement from '../../utils/component.js'

class Header extends BotoElement {
  constructor() {
    super()
    this._input = null
  }

  slotChange() {}

  html() {
    return `
    <style>${css}</style>
    <header role="banner">
      <slot></slot>
    </header>
  `
  }

  showed() {
    this.shadowRoot.querySelector('header').addEventListener('click', () => this.dispatchEvent(new CustomEvent('blabla')))
  }

  hidden() {}
}

BotoElement.register('meli-header', Header)
