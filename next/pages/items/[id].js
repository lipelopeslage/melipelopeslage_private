import Head from 'next/head'
import styles from '../../styles/Item.module.css'

function Item({ product }) {
  return (
    <main>
      <Head>
        <title>Descontaço em {product.title} - Mercado Livre Brasil</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className={styles.section}>
        <div className={styles.productInfo}>
          <div className={styles.productImage}>
            <img src={product?.pictures[0]?.url} alt={`Imagem de ${product.title}`} />
          </div>
          <div className={styles.productBuy}>
            <h2>
              <small>
                {product?.attributes.find((attr) => attr.id === 'ITEM_CONDITION')?.value_name} - {product?.sold_quantity} vendidos
              </small>
              {product.title}
            </h2>
            <div className={styles.productImageMobile}>
              <img src={product?.pictures[0]?.url} alt={`Imagem de ${product.title}`}/>
            </div>
            <p>$ {product?.price}</p>
            <meli-button onClick={() => window.open(product.permalink, '_blank')}>Comprar</meli-button>
          </div>
        </div>
        <div className={styles.productDescription}>
          <h3>Descripción del producto</h3>
          <p>{product?.description?.plain_text}</p>
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`http://localhost:6000/api/items/${query.id}`)
  const product = await res.json()
  return {
    props: {
      product
    }
  }
}

export default Item
