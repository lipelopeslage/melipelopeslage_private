import Head from 'next/head'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'
import styles from '../../styles/Home.module.css'

function Items({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        Main content
        {products.slice(0, 4).map((product) => (
          <div key={uuid()}>
            <Link href={`/items/${product.id}`}>
              <a>
                <img src={product?.thumbnail} />
                <p>{product?.price}</p>
                <p>
                  {product.title}
                  <small>{product?.address?.state_name}</small>
                </p>
                <hr/>
              </a>
            </Link>
          </div>
        ))}
      </main>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`http://localhost:6000/api/items?q=${query.q}`)
  const response = await res.json()
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products: response?.results,
      query: query.q
    }
  }
}

export default Items
