import { Template } from '../Template'

export const Search = ({ query }, page, history) => {
  const oReq = new XMLHttpRequest()
  const template = Template({
    style: `
      body{background-color: #gray;}
      `,
    html: `<p>Resultados de ${query}</p>`,
    parent: page
  })

  const reqListener = () => {
    const data = JSON.parse(oReq.response)
    const list = document.createElement('ul')
    data.results.slice(0, 4).forEach(item => {
      const listItem = document.createElement('li')
      listItem.innerHTML = item.id
      listItem.onclick = () => {
        history.push(`items/${item.id}`)
      }
      list.appendChild(listItem)
    })
    console.log(template.dom)
    template.updateChildren(list) 
  }
  
  oReq.onload = reqListener
  oReq.open('get', `//localhost:3000/api/items?q=${query}`, true)
  oReq.send()

  

}
