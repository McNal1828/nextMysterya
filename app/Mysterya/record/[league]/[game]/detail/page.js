import Container from './container';
import styles from './page.module.css';

export default async function Page({ params, searchParams }) {
	return (
		<div className={styles.main}>
			<p className={styles.title}>경기기록</p>
			<hr />
			<Container league={params.league} game={params.game} />
		</div>
	);
}
