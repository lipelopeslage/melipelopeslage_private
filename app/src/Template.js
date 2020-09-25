const update = (parent, node) => {
  Array.from(parent.childNodes).forEach(elem => parent.removeChild(elem))
  parent.appendChild(node)
}
const render = (parent, template) => parent.appendChild(template)

export const Template = ({ style, html, parent }) => {
  const template = document.createDocumentFragment()
  const styleTag = document.createElement('style')
  const htmlTag = document.createElement('div')
  let dom

  styleTag.innerHTML = style
  htmlTag.innerHTML = html
  template.appendChild(styleTag)
  template.appendChild(htmlTag)
  
  render(parent, template)

  return {
    dom: parent,
    innerHTML: string => parent.innerHTML = string,
    appendChild: node => parent.appendChild(node),
    updateChildren: node => update(parent, node)
  }
}
