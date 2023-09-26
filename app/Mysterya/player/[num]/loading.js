import Image from 'next/image';
import styles from './page.module.css';
export default function Loading() {
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<p>로딩중입니다...</p>
			</div>
		</div>
	);
}
