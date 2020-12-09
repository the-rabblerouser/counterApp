import * as React from 'react';

import Head from 'next/head';
import styles from '../styles/Home.module.css';

const { useState } = React;

export default function Home() {
  const [count, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter(count + 1);
  };

  const decreaseCount = () => {
    count > 0 ? setCounter(count - 1) : null;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Counter App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Counter</h1>
        <h2 className={styles.count}>{count}</h2>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={increaseCount}>Increase</button>
          <button className={styles.button} onClick={decreaseCount}>Decrease</button>
        </div>
      </main>
    </div >
  );
}
