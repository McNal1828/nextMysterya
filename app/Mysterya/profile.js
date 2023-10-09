import Image from 'next/image';
import styles from './page.module.css';

export default async function Profile({ mnum }) {
	if (mnum == 0) {
		return (
			<div className={styles.my_info}>
				<Image alt='테스트용이미지' src='/image/mysterya/profile/default.jpg' style={{ borderRadius: '15%' }} width={160} height={160} />
				<p className={styles.my_number} style={{ fontSize: '1em' }}>
					번호를 등록해주세요
				</p>
			</div>
		);
	}
	const url = process.env.BASE_URL + encodeURI(`/api/mysterya/player/profile/${mnum}`);
	const res = await fetch(url, { cache: 'no-store' });
	const data = await res.json();
	const name = data.data[0].name;

	return (
		<div className={styles.my_info}>
			<Image alt='테스트용이미지' src={`/image/mysterya/profile/${mnum}.jpg`} sizes='100vw' width={160} height={160} style={{ borderRadius: '15%' }} />
			<p className={styles.my_number}>
				No.{mnum} {name}
			</p>
		</div>
	);
}
