'use client';
import styles from './out.module.css';
import { motion } from 'framer-motion';
import useSWR from 'swr';
import { useState } from 'react';

export default function Out({ player_number }) {
	const [recent, setrecent] = useState([]);
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/mysterya/player/status/${player_number}/out`, fetcher);
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
	const batting_data = data.out;
	const SK = batting_data.filter((obj) => obj.result == 'K' && obj.swing == 1);
	const LK = batting_data.filter((obj) => obj.result == 'K' && obj.swing == 0);
	const SF = batting_data.filter((obj) => obj.result == 'SF');
	const SAC = batting_data.filter((obj) => obj.result == 'SAC');
	const GO = batting_data.filter((obj) => obj.hit_result == 'GO');
	const AO = batting_data.filter((obj) => obj.hit_result == 'AO');
	const LD = batting_data.filter((obj) => obj.hit_result == 'LD');
	const DP = batting_data.filter((obj) => obj.hit_result == 'K');
	const TP = batting_data.filter((obj) => obj.hit_result == 'K');
	const FAO = batting_data.filter((obj) => obj.hit_result == 'K');
	const ko = {
		SK: '헛스윙삼진',
		LK: '루킹삼진',
		SF: '희생플라이',
		SAC: '희생번트',
		GO: '땅볼',
		AO: '뜬볼',
		LD: '라인드라이브',
		DP: '병살',
		TP: '삼중살',
		FAO: '파울플라이',
	};
	const map = Object.entries({
		SK: { data: SK, length: SK.length },
		LK: { data: LK, length: LK.length },
		SF: { data: SF, length: SF.length },
		SAC: { data: SAC, length: SAC.length },
		GO: { data: GO, length: GO.length },
		AO: { data: AO, length: AO.length },
		LD: { data: LD, length: LD.length },
		DP: { data: DP, length: DP.length },
		TP: { data: TP, length: TP.length },
		FAO: { data: FAO, length: FAO.length },
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
			<div className={styles.recent}>
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
									{' '}
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
