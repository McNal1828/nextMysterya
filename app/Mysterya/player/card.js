'use client';
import Image from 'next/image';
import styles from './card.module.css';
import { motion, stagger } from 'framer-motion';
export default function Card({ support, name, number }) {
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
				location.href = 'player/' + number;
			}}
			style={{ cursor: 'pointer' }}
			variants={varients}
			initial='hidden'
			whileInView='whileInView'
			viewport={{ once: true }}
		>
			<Image alt='선수이미지' src={`/image/mysterya/profile/${number}.jpg`} width={200} height={200} className={styles.img} />
			<div className={styles.info}>
				<div className={styles.name}>
					<p>{name}</p>
					<p>No.{number}</p>
				</div>
			</div>
		</motion.div>
	);
}
