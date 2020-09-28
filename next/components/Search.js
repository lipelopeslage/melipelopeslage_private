import React, { useEffect, useRef } from 'react'

export const Search = ({ query }) => {
  const searchRef = useRef()

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.addEventListener('MeliSearchEvent', ({ detail: { query } }) => (window.location.href = `/items?q=${query}`))
    }
  }, [searchRef.current])

  return (
    <>
      <form>
        <meli-search query={query} ref={searchRef}>
          <span className='search-icon'></span>
        </meli-search>
      </form>
    </>
  )
}
