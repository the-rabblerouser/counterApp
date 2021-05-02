import * as React from 'react';

import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import Head from 'next/head';
import styles from '../styles/Home.module.css';

// const { useState } = React;

const useCounter = () => {
	const count = useSelector((state: RootStateOrAny) => state.count);
	const dispatch = useDispatch();
	const increment = () =>
		dispatch({
			type: 'INCREMENT',
		});
	const decrement = () =>
		dispatch({
			type: 'DECREMENT',
		});
	const reset = () =>
		dispatch({
			type: 'RESET',
		});
	return { count, increment, decrement, reset };
};

export default function Home(): JSX.Element {
	const { count, increment, decrement } = useCounter();

	// const increaseCount = (): void => {
	// 	setCounter(count + 1);
	// };

	// const decreaseCount = (): void => {
	// 	count > 0 ? setCounter(count - 1) : String;
	// };

	return (
		<div className={styles.container}>
			<Head>
				<title>Counter App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				{' '}
				<h1 className={styles.title}>Counter</h1>{' '}
			</>
			<main className={styles.main}>
				<h2 className={styles.count}>{count}</h2>
				<div className={styles.buttons}>
					<button className={styles.button} onClick={increment}>
						Increase
					</button>
					<button className={styles.button} onClick={decrement}>
						Decrease
					</button>
				</div>
			</main>
		</div>
	);
}
