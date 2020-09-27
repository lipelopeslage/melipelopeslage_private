function Input({ children }) {
  const inputRef = React.useRef()
  React.useEffect(() => {
    import('../../webcomponents/dist/input.js')
  })
  React.useEffect(() => {
    if (inputRef.current) {
      //inputRef.current.addEventListener('blabla', () => alert('chamou'))
    }
  }, [inputRef.current])
  return (
    <>
      <meli-input ref={inputRef}>Input{children}</meli-input>
    </>
  )
}

export default Input
