export const Product = ({params}) => {
  const page = document.createElement('div')
  page.innerHTML = `Página do produto de id ${params}`
  return page
}
