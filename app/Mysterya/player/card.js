'use client';
import Image from 'next/image';
import styles from './card.module.css';
export default function Card({ support, name, number }) {
	return (
		<div
			className={styles.card}
			onClick={(e) => {
				location.href = 'player/' + number;
			}}
			style={{ cursor: 'pointer' }}
		>
			<Image alt='선수이미지' src={`/image/mysterya/profile/${number}.jpg`} width={200} height={200} className={styles.img} />
			<div className={styles.info}>
				<Image alt='응원팀' src={`/image/mysterya/support/${support}.png`} width={80} height={80} />
				<div className={styles.name}>
					<p>{name}</p>
					<p>No.{number}</p>
				</div>
			</div>
		</div>
	);
}
