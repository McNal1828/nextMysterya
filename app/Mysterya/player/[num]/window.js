'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './window.module.css';
import dynamic from 'next/dynamic';

export default function Window({ player_number }) {
	const Direction = dynamic(() => import('./direction.js'), { loading: () => <></>, ssr: false });
	const Runner = dynamic(() => import('./runnder.js'), { loading: () => <></>, ssr: false });
	const Ballcount = dynamic(() => import('./ballcount.js'), { loading: () => <></>, ssr: false });
	const Out = dynamic(() => import('./out.js'), { loading: () => <></>, ssr: false });
	const Tobase = dynamic(() => import('./tobase.js'), { loading: () => <></>, ssr: false });
	const Etc = dynamic(() => import('./etc.js'), { loading: () => <></>, ssr: false });
	const tabs = {
		direction: { label: '타구방향', tab: <Direction player_number={player_number} /> },
		runner: { label: '주자상황', tab: <Runner player_number={player_number} /> },
		ballcount: { label: '볼카운트', tab: <Ballcount player_number={player_number} /> },
		out: { label: '아웃', tab: <Out player_number={player_number} /> },
		onbase: { label: '출루', tab: <Tobase player_number={player_number} /> },
		etc: { label: '기타', tab: <Etc player_number={player_number} /> },
	};
	const [selectedTab, setSelectedTab] = useState('direction');
	return (
		<div className={styles.window}>
			<nav>
				<ul>
					{Object.keys(tabs).map((item) => (
						<li key={item} className={item === selectedTab ? 'selected' : ''} onClick={() => setSelectedTab(item)}>
							{`${tabs[item].label}`}
							{item === selectedTab ? <motion.div className={styles.underline} layoutId='underline' /> : null}
						</li>
					))}
				</ul>
			</nav>
			<AnimatePresence mode='sync'>
				<motion.div
					key={selectedTab ? selectedTab : 'empty'}
					// initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: -100, opacity: 0 }}
					transition={{ duration: 0.1 }}
					className={styles.main}
				>
					{selectedTab ? tabs[selectedTab].tab : ' '}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
