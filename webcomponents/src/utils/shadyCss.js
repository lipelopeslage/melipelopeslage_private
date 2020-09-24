export default (template, componentName) => {
  if (window.ShadyCSS) window.ShadyCSS.prepareTemplate(template, componentName)
}
