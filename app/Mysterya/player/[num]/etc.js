'use client';
import styles from './etc.module.css';
import { motion } from 'framer-motion';
import useSWR from 'swr';
import { useState } from 'react';

export default function Out({ player_number }) {
	return (
		<motion.div
			className={styles.main}
			initial={{ x: 100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			// exit={{ x: -100, opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			<div className={styles.list}>
				<p>예정</p>
				<hr />
				<p>득점</p>
				<p>도루</p>
				<p>이동</p>
				<p>타점</p>
				<p>최고의짝궁</p>
				<p>최고의타순</p>
			</div>
		</motion.div>
	);
}
