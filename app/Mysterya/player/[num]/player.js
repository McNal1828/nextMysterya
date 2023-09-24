import Image from 'next/image';
import styles from './player.module.css';
export default function Player(player) {
	const number = player.player[0].number;
	const name = player.player[0].name;
	const support = player.player[0].support;
	return (
		<>
			<div className={styles.player}>
				<div className={styles.title}>
					<p>No.{number}</p>
					<p>{name}</p>
				</div>
				<div className={styles.images}>
					<Image alt='응원팀' src={`/image/mysterya/support/${support}.png`} width={160} height={160} />
					<Image alt='선수이미지' src={`/image/mysterya/profile/${number}.jpg`} width={200} height={200} className={styles.img} />
				</div>
			</div>
			<hr />
		</>
	);
}
