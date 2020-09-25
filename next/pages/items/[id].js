import Head from "next/head";
import styles from "../../styles/Home.module.css";

function Item({ product }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>INTERNA PRODUTO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Teste
        {product.title}
      </main>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`http://localhost:6000/api/items/${query.id}`);
  const product = await res.json();
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      product
    },
  };
}

export default Item;
