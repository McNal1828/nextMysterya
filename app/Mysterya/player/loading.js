import Image from 'next/image';
import styles from './page.module.css';
export default function Loading() {
	return (
		<div className={styles.main}>
			<p className={styles.title}>선수단</p>
			<hr />
			<div className={styles.cards}>
				<div className={styles.card}>
					<div className={styles.info}>
						<div className={styles.name}>
							<p>로딩중입니다</p>
							<p>...</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
