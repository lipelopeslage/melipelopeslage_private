import css from './style.css'
import BotoElement from '../../utils/component.js'

class PizzaGraph extends BotoElement {
  constructor() {
    super()
    this._input = null
    this._clickHandler = this.clickHandler.bind(this)
  }

  slotChange() {}

  html() {
    return `
    <style>${css}</style>
    <div class='holder'>
      <div class='preview'></div>
      <div class='graphic'></div>
    </div>
  `
  }

  clickHandler() {
    console.log('ola')
  }

  plotGraphicCanvas(data) {
    const rad = (deg) => ((deg - 90) * Math.PI) / 180
    const c = this.shadowRoot.querySelector('canvas')
    const ctx = c.getContext('2d')
    const chartRadius = 100
    ctx.clearRect(0, 0, c.width, c.height)

    data.forEach((item) => {
      ctx.fillStyle = item.color
      ctx.beginPath()
      ctx.moveTo(chartRadius, chartRadius)
      ctx.arc(chartRadius, chartRadius, chartRadius, rad(item.rotation), rad(item.rotation + item.radiusPercent))
      ctx.lineTo(chartRadius, chartRadius)
      ctx.fill()
    })
  }

  plotGraphicSvg(data) {
    let html = `<svg viewBox="0 0 36 36" >`
    data.forEach((item) => {
      html += `
      <path
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="${item.color}";
        stroke-width="4";
        stroke-dasharray="${item.percent * 100}, 100"
        style="transform-origin: 50% 50%; transform: rotate(${item.rotation}deg);"
        data-label="${item.text}"
      />
    `
    })
    html += `</svg>`
    
    const getInfo = label => {
      const {text, value, percent } = data.find(item => item.text === label)
      return `
        <div class='graphic-hover'>
          <span class='graphic-hover-text'>${text}</span>
          <span class='graphic-hover-percent'>${percent.toFixed(2) * 100}%</span>
          <span class='graphic-hover-value'>${value} of 1</span>
        </div>
      `
    }

    this.shadowRoot.querySelector('.graphic').innerHTML = html
    const preview = this.shadowRoot.querySelector('.preview')
    Array.from(this.shadowRoot.querySelectorAll('.graphic path')).forEach((item) => {
      item.addEventListener('mouseover', (e) => {
        e.stopPropagation()
        e.target.style.strokeWidth = "3"
        e.target.style.opacity = ".8"
        preview.innerHTML = getInfo(e.target.getAttribute('data-label'))
      })
      item.addEventListener('mouseout', (e) => {
        preview.innerHTML = ''
        e.target.style.strokeWidth = "4"
        e.target.style.opacity = "1"
      })
    })
  }

  showed() {
    const data = [
      { text: 'sadness', value: 0.33, color: '#747AB8' },
      { text: 'joy', value: 0.6, color: '#45BA79' },
      { text: 'fear', value: 0.06, color: '#DF6E20' },
      { text: 'anger', value: 0.15, color: '#E64728' },
      { text: 'disgust', value: 0.07, color: '#A055AA' }
    ]
    const sum = data.reduce((acc, item) => (acc || 0) + item.value, 0)
    const newData = data.map((item) => {
      const percent = item.value / sum
      const radiusPercent = 360 * percent
      item.percent = percent
      item.radiusPercent = radiusPercent
      return item
    })
    const sortedData = newData.sort((a, b) => b.value - a.value)

    const graphData = sortedData.reduce((acc, item, index) => {
      const previousRotation = index === 0 ? 0 : acc[index - 1]?.rotation
      const previousRadius = index === 0 ? 0 : acc[index - 1]?.radiusPercent
      item.rotation = previousRotation + previousRadius
      return [...acc, item]
    }, [])

    console.log(sortedData)
    console.log(graphData)

    this.plotGraphicSvg(graphData)

    //this._input = this.shadowRoot.querySelector('input')
    //this._input.addEventListener('change', this._clickHandler)
  }

  hidden() {
    //this._input.removeEventListener('change', this._clickHandler)
  }
}

BotoElement.register('boto-pizza-graph', PizzaGraph)
