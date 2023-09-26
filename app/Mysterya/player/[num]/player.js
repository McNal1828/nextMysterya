import Image from 'next/image';
import styles from './player.module.css';
export default function Player({ player }) {
	const number = player[0].player_number;
	const name = player[0].name;
	return (
		<>
			<div className={styles.player}>
				<div className={styles.images}>
					<Image alt='선수이미지' src={`/image/mysterya/profile/${number}.jpg`} width={160} height={160} className={styles.img} />
				</div>
				<div className={styles.title}>
					<p>No.{number}</p>
					<p>{name}</p>
				</div>
			</div>
			<hr />
		</>
	);
}
