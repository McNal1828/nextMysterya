import Link from 'next/link';
import styles from './page.module.css';

export default async function Page() {
	return (
		<div className={styles.main}>
			<p className={styles.title}>경기기록</p>
			<hr />
		</div>
	);
}
