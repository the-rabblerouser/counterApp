import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Counter App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Counter App</h1>
        <div>
          <button>Increase</button>
          <button>Decrease</button>
        </div>
      </main>
    </div>
  );
}
