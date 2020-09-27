import "../styles/globals.css";
import Header from './../components/Header'
import Search from './../components/Search'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header>
        <Search query={pageProps.query}/>
      </Header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
