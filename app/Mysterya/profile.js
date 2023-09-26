import Image from 'next/image';
import styles from './page.module.css';

export default async function Profile({ mnum }) {
	if (mnum == 0) {
		return (
			<div className={styles.my_info}>
				<Image alt='테스트용이미지' src='/image/mysterya/profile/default.jpg' width={160} height={160} style={{ borderRadius: '15%' }} />
				<p className={styles.my_number}>번호를 등록해주세요</p>
			</div>
		);
	}
	const url = encodeURI(`http://localhost:3000/api/mysterya/player/profile/${mnum}`);
	const res = await fetch(url);
	const data = await res.json();
	const name = data.data[0].name;

	return (
		<div className={styles.my_info}>
			<Image alt='테스트용이미지' src={`/image/mysterya/profile/${mnum}.jpg`} width={160} height={160} style={{ borderRadius: '15%' }} />
			<p className={styles.my_number}>
				No.{mnum} {name}
			</p>
		</div>
	);
}
