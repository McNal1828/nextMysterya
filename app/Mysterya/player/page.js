import { use } from 'react';
import Card from './card';
import styles from './page.module.css';
export default function Page({ searchParams }) {
	const data = use(fetching(searchParams)).data;
	return (
		<div className={styles.main}>
			<p className={styles.title}>선수단</p>
			<hr />
			<div className={styles.cards}>
				{data.map((val, index) => (
					<Card key={index} support={val.support} name={val.name} number={val.number} />
				))}
			</div>
		</div>
	);
}

async function fetching(searchParams) {
	const cat = searchParams.cat;
	const val = searchParams.val;
	let url = 'http://localhost:3000/api/mysterya/player';
	if (Object.keys(searchParams).length !== 0 && val) {
		url = cat === 'name' ? `http://localhost:3000/api/mysterya/player/name/${val}` : `http://localhost:3000/api/mysterya/player/number/${val}`;
	}
	url = encodeURI(url);
	const res = await fetch(url);
	const data = await res.json();
	return data;
}
