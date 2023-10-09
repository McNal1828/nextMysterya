'use client';
import styles from './tobase.module.css';
import { motion } from 'framer-motion';
import useSWR from 'swr';
import { useState } from 'react';

export default function Out({ player_number }) {
	const [recent, setrecent] = useState([]);
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/mysterya/player/status/${player_number}/tobase`, fetcher);
	if (error) {
		return <></>;
	}
	if (isLoading) {
		return (
			<div className={styles.main}>
				<div className={styles.count}></div>
			</div>
		);
	}
	const batting_data = data.tobase;

	const BB = batting_data.filter((obj) => obj.result == 'BB');
	const HBP = batting_data.filter((obj) => obj.result == 'HBP');
	const H = batting_data.filter((obj) => obj.hit_result == 'H' || obj.hit_result == '2B' || obj.hit_result == '3B' || obj.hit_result == 'HR');
	const ETC = batting_data.filter((obj) => obj.hit_result == 'E' || obj.hit_result == 'FC' || obj.result == 'Ob');

	const ko = {
		BB: '4구',
		HBP: '사구',
		H: '안타',
		ETC: '에러 등 기타',
	};
	const map = Object.entries({
		BB: { data: BB, length: BB.length },
		HBP: { data: HBP, length: HBP.length },
		H: { data: H, length: H.length },
		ETC: { data: ETC, length: ETC.length },
	})
		.filter(([, value]) => value.length != 0)
		.sort(([, a], [, b]) => b.length - a.length);
	const total_counts = map
		.map((data) => data[1].length)
		.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		}, 0);
	return (
		<motion.div
			className={styles.main}
			initial={{ x: 100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			// exit={{ x: -100, opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			<div className={`${styles.recent} ${styles.w1400}`}>
				<p>최근기록</p>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>리그</th>
							<th>게임</th>
							<th>이닝</th>
							<th>카운트</th>
						</tr>
					</thead>
					<tbody>
						{recent.map((obj, index) => {
							return (
								<tr key={index}>
									<td>
										{obj.name}({obj.division})
									</td>
									<td>{obj.game_score}</td>
									<td>{obj.inning}</td>
									<td>
										{obj.strike}s{obj.ball}b{obj.out_count}o
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<div className={styles.count}>
				<ul className={styles.rank}>
					{map.map((array, index) => {
						return (
							<motion.li
								whileHover={{ scale: 1.1, backgroundColor: 'rgba(202, 202, 202, 0.3)' }}
								key={index}
								onMouseEnter={(e) => {
									e.preventDefault();
									setrecent(array[1].data);
									console.log(array[1].data);
								}}
							>
								<span>
									{' '}
									{index == 0 ? '🥇' : ''}
									{index == 1 ? '🥈' : ''}
									{index == 2 ? '🥉' : ''}
								</span>
								<span> {ko[array[0]]}</span>
								<span>
									{array[1].length}회({((array[1].length / total_counts) * 100).toFixed(1)}%)
								</span>
							</motion.li>
						);
					})}
				</ul>
			</div>
		</motion.div>
	);
}
