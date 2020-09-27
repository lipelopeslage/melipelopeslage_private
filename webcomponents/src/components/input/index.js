import css from './style.css'
import BotoElement from '../../utils/component.js'

class Input extends BotoElement {
  constructor() {
    super()
    this._input = null
  }

  slotChange() {}

  html() {
    return `
    <style>${css}</style>
    <input type="text"/>
  `
  }

  showed() {
    //this.shadowRoot.querySelector('header').addEventListener('click', () => this.dispatchEvent(new CustomEvent('blabla')))
  }

  hidden() {
    
  }
}

BotoElement.register('meli-input', Input)
