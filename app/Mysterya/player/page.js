// import { use } from 'react';
import Card from './card';
import styles from './page.module.css';
// import { motion } from 'framer-motion';
export default async function Page({ searchParams }) {
	let url = process.env.BASE_URL + encodeURI(`/api/mysterya/player/`);
	if (searchParams.cat == 'number' && searchParams.val) url = process.env.BASE_URL + encodeURI(`/api/mysterya/player/number/${searchParams.val}`);
	if (searchParams.cat == 'name' && searchParams.val) url = process.env.BASE_URL + encodeURI(`/api/mysterya/player/name/${searchParams.val}`);
	const res = await fetch(url, { cache: 'no-store' });
	const data_ = await res.json();
	const data = data_.data;
	return (
		<div className={styles.main}>
			<p className={styles.title}>선수단</p>
			<hr />
			<div className={styles.cards}>
				{data.map((val, index) => (
					<Card key={index} name={val.name} number={val.player_number} />
				))}
			</div>
		</div>
	);
}

// async function fetching(searchParams) {
// 	const cat = searchParams.cat;
// 	const val = searchParams.val;
// 	let url = 'http://localhost:3000/api/mysterya/player';
// 	if (Object.keys(searchParams).length !== 0 && val) {
// 		url = cat === 'name' ? `http://localhost:3000/api/mysterya/player/name/${val}` : `http://localhost:3000/api/mysterya/player/number/${val}`;
// 	}
// 	url = encodeURI(url);
// 	const res = await fetch(url);
// 	const data = await res.json();
// 	return data;
// }
