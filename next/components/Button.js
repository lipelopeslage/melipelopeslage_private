function Button({ children, onClick }) {
  const buttonRef = React.useRef()
  React.useEffect(() => {
    import('../../webcomponents/dist/button.js')
  })
  React.useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.addEventListener('MeliClickEvent', onClick)
    }
  }, [buttonRef.current])
  return (
    <>
      <meli-button ref={buttonRef}>{children}</meli-button>
    </>
  )
}

export default Button
