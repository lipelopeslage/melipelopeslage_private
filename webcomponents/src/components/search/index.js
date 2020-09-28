import css from './style.css'
import BotoElement from '../../utils/component.js'

class Search extends BotoElement {
  constructor() {
    super()
    this.$input = this.shadowRoot.querySelector('input')
    this.$button = this.shadowRoot.querySelector('button')
    this.clickHandler = this.searchHandler.bind(this)
  }

  slotChange() {}

  html() {
    return `
    <style>${css}</style>
    <input type="text" class="nav-search-input" aria-label="Digite o que você quer encontrar" name="as_word" placeholder="Buscar produtos, marcas e muito mais…" maxlength="120" autocapitalize="off" autocorrect="off" spellcheck="false" autocomplete="off" tabindex="3" value="busca">
    <button type="submit"><div aria-label="Buscar"></div></button>
  `
  }

  showed() {
    this.$input.value = this.getAttribute('query')
    this.$button.addEventListener('click', this.clickHandler)
  }

  hidden() {
    this.$button.removeEventListener('click', this.clickHandler)
  }

  searchHandler() {
    this.dispatchEvent(
      new CustomEvent('MeliSearchEvent', {
        detail: { query: this.$input.value }
      })
    )
  }
}

BotoElement.register('meli-search', Search)
