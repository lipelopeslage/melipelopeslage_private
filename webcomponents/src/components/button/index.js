import css from './style.css'
import BotoElement from '../../utils/component.js'

class Button extends BotoElement {
  constructor() {
    super()
    this.$button = this.shadowRoot.querySelector('button')
    this.clickHandler = this.onClick.bind(this)
  }

  slotChange() {}

  html() {
    return `
    <style>${css}</style>
    <button>
      <slot></slot>
    </button>
  `
  }

  showed() {
    this.$button.addEventListener('click', this.clickHandler)
  }

  hidden() {
    this.$button.removeEventListener('click', this.clickHandler)
  }

  onClick() {
    this.dispatchEvent(new CustomEvent('MeliClickEvent'))
  }
}

BotoElement.register('meli-button', Button)
