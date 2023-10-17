'use client';
import Image from 'next/image';
import styles from './card.module.css';
import { motion, stagger } from 'framer-motion';
export default function Card({ name, number, no, data1, data2, data3 }) {
	const varients = {
		hidden: { opacity: 0, y: 60 },

		whileInView: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay: 0.2,
			},
		},
	};

	// const ref = useRef(null);
	// const isInView = useInView(ref, { once: true });
	return (
		<motion.div
			className={styles.card}
			onClick={(e) => {
				location.href = '/Mysterya/player/' + number;
			}}
			style={{ cursor: 'pointer' }}
			variants={varients}
			initial='hidden'
			whileInView='whileInView'
			viewport={{ once: true }}
		>
			<div className={styles.img}>
				<Image
					alt='선수이미지'
					src={`/image/mysterya/profile/${number}.jpg`}
					fill
					style={{
						objectFit: 'contain',
					}}
				/>
			</div>
			<div className={styles.info}>
				<p className={styles.no}>
					{no == 0 ? '🥇' : ''}
					{no == 1 ? '🥈' : ''}
					{no == 2 ? '🥉' : ''}위
				</p>
				<div>
					<div className={styles.name}>
						<p>No.{number}</p>
						<p>{name}</p>
					</div>
					<div className={styles.stat}>
						<span>
							{data1[0]}:{data1[1]} &nbsp;
						</span>
						{data2 ? (
							<span>
								{data2[0]}:{data2[1]} &nbsp;
							</span>
						) : (
							<></>
						)}
						{data3 ? (
							<span>
								{data3[0]}:{data3[1]}
							</span>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</motion.div>
	);
}
