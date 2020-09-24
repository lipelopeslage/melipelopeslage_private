import css from './style.css'
import BotoElement from '../../utils/component.js'

class Button extends BotoElement {
  constructor() {
    super()
    this._button = null
    this._clickHandler = this.clickHandler.bind(this)
  }

  slotChange() {}

  html() {
    return `
    <style>${css}</style>
      <button>
      </button>
  `
  }

  clickHandler() {
    alert('ola')
  }

  showed() {
    this._button = this.shadowRoot.querySelector('button')
    this._button.addEventListener('click', this._clickHandler)
  }

  hidden() {
    this._button.removeEventListener('click', this._clickHandler)
  }
}

BotoElement.register('boto-button', Button)
