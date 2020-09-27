function Header({ children }) {
  const headerRef = React.useRef()
  React.useEffect(() => {
    import('../../webcomponents/dist/header.js')
  })
  React.useEffect(() => {
    if (headerRef.current) {
      //headerRef.current.addEventListener('blabla', () => alert('chamou'))
    }
  }, [headerRef.current])
  return (
    <>
      <meli-header ref={headerRef}>[HeaderLogo]{children}</meli-header>
    </>
  )
}

export default Header
