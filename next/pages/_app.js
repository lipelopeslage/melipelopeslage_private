import React, { useEffect, useState } from 'react'
import '../styles/globals.css'
import { BreadCrumb } from '../components/BreadCrumb'
import { Search } from './../components/Search'

const Wrapper = ({ children, loaded }) => (
  <div id='app' className={loaded ? 'loaded' : ''}>
    {children}
  </div>
)

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    import('../../webcomponents/dist/main.js')
    setTimeout(() => setLoaded(true), 200)
  }, [])

  return (
    <Wrapper loaded={loaded}>
      <meli-header role="banner">
        <a className='nav-logo' tabIndex='2' href='/'>
          Mercado Livre Brasil - Onde comprar e vender de Tudo
        </a>
        <Search query={pageProps.query} />
      </meli-header>
      <BreadCrumb props={pageProps}/>
      <Component {...pageProps} />
    </Wrapper>
  )
}

export default MyApp
