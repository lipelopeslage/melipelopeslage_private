function Search({ query, children }) {
  const searchRef = React.useRef()
  React.useEffect(() => {
    import('../../webcomponents/dist/search.js')
  })
  React.useEffect(() => {
    if (searchRef.current) {
      searchRef.current.addEventListener('MeliSearchEvent', ({ detail: { query } }) => (window.location.href = `/items?q=${query}`))
    }
  }, [searchRef.current])
  return (
    <>
      <meli-search query={query} ref={searchRef}>
        Search{children}
      </meli-search>
    </>
  )
}

export default Search
