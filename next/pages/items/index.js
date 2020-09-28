import Head from 'next/head'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'
import styles from '../../styles/Items.module.css'

function Items({ products }) {
  return (
    <main>
      <Head>
        <title>Busca no Mercado Livre Brasil</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className={styles.productList}>
        {products.slice(0, 4).map((product) => (
          <div className={styles.productCard} key={uuid()}>
            <Link href={`/items/${product.id}`}>
              <a>
                <img src={product?.thumbnail} />
                <div className={styles.productInfo}>
                  <div className={styles.priceAddress}>
                    <span className={`${styles.price} ${product?.shipping?.free_shipping ? styles.freeShipping : ''}`}>$ {product?.price}</span>
                    <span className={styles.addressState}>{product?.address?.state_name}</span>
                  </div>
                  <h2 className={styles.title}>{product.title}</h2>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </section>
    </main>
  )
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`http://localhost:6000/api/items?q=${query.search}`)
  const response = await res.json()
  return {
    props: {
      products: response?.results,
      query: query.search
    }
  }
}

export default Items
