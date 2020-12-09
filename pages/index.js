import * as React from 'react';

import Head from 'next/head';
import styles from '../styles/Home.module.css';

const { useState } = React;

export default function Home() {
  const [count, setCounter] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Counter App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <div>
          <button>Increase</button>
          <button>Decrease</button>
        </div>
      </main>
    </div>
  );
}
