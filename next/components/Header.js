function Header() {
    const headerRef = React.useRef()
  React.useEffect(() => {
    import("../../webcomponents/dist/header.js");
  });
  React.useEffect(() => {
    if(headerRef.current) {
        headerRef.current.addEventListener('blabla', () => alert('chamou'))
    }
  }, [headerRef.current])
  return (
    <>
      <meli-header ref={headerRef}>Header</meli-header>
    </>
  );
}

export default Header