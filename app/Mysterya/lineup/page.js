import { use } from 'react';
import Position from './position';
import styles from './page.module.css';
export default function Page() {
	const data = use(fetching()).data;
	return (
		<div className={styles.main}>
			<Position data={data} />
		</div>
	);
}
async function fetching(searchParams) {
	let url = 'http://localhost:3000/api/mysterya/player';
	url = encodeURI(url);
	const res = await fetch(url);
	const data = await res.json();
	return data;
}
