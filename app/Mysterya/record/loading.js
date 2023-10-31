import styles from './page.module.css';
export default function Loading() {
	return (
		<div className={styles.main}>
			<p className={styles.title}>경기목록</p>
			<hr />
			<div>로딩중...</div>
		</div>
	);
}
