import css from './style.css'
import BotoElement from '../../utils/component.js'

class TextInput extends BotoElement {
  constructor() {
    super()
    this._input = null
    this._clickHandler = this.clickHandler.bind(this)
  }

  slotChange() {}

  html() {
    return `
    <style>${css}</style>
    <input type="text" value="value">
  `
  }

  clickHandler() {
    console.log('ola')
  }

  showed() {
    this._input = this.shadowRoot.querySelector('input')
    this._input.addEventListener('change', this._clickHandler)
  }

  hidden() {
    this._input.removeEventListener('change', this._clickHandler)
  }
}

BotoElement.register('boto-text-input', TextInput)
