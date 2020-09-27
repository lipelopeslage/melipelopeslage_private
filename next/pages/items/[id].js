import Head from 'next/head'
import Button from '../../components/Button'
import styles from '../../styles/Home.module.css'

function Item({ product }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>INTERNA PRODUTO</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <img src={product?.pictures[0]?.url} />
        <h2>
          <small>
            {product?.attributes.find((attr) => attr.id === 'ITEM_CONDITION')?.value_name}
            {product?.sold_quantity} vendidos
          </small>
          {product.title}${product?.price}
        </h2>
        <Button onClick={() => alert('clicou clicou')}>
          Comprar
        </Button>
        <h3>Descripción del producto</h3>
        <p>{product?.description?.plain_text}</p>
      </main>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`http://localhost:6000/api/items/${query.id}`)
  const product = await res.json()
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      product
    }
  }
}

export default Item
