import styles from './page.module.css';

export default async function Page({ params, searchParams }) {
	return (
		<div className={styles.main}>
			<p className={styles.title}>리그별 랭킹</p>
			<hr />
			<div className={styles.submain}>
				<p className={styles.subtitle}>로딩중...</p>
			</div>
		</div>
	);
}
