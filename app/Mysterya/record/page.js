import styles from './page.module.css';
import List from './list';

export default async function Page() {
	return (
		<div className={styles.main}>
			<p className={styles.title}>경기목록</p>
			<hr />
			<List />
		</div>
	);
}
