import css from './style.css'
import BotoElement from '../../utils/component.js'

class Header extends BotoElement {
  constructor() {
    super()
  }

  html() {
    return `
    <style>${css}</style>
    <slot></slot>    
  `
  }
}

BotoElement.register('meli-header', Header)
