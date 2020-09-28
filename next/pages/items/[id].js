import Button from '../../components/Button'
import styles from '../../styles/Item.module.css'

function Item({ product }) {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.productInfo}>
          <div className={styles.productImage}>
            <img src={product?.pictures[0]?.url} />
          </div>
          <div className={styles.productBuy}>
            <h2>
              <small>
                {product?.attributes.find((attr) => attr.id === 'ITEM_CONDITION')?.value_name} - {product?.sold_quantity} vendidos
              </small>
              {product.title}
            </h2>
            <p>$ {product?.price}</p>
            <Button onClick={() => alert('clicou clicou')}>Comprar</Button>
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
