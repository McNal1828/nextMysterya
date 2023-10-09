'use client';
import Image from 'next/image';
import styles from './runner.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import useSWR from 'swr';
import { useEffect, useState } from 'react';

export default function Runner({ player_number }) {
	const [baseGraphic, setbaseGraphic] = useState([]);
	const [isb, setisb] = useState(false);

	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/mysterya/player/status/${player_number}/runner`, fetcher);
	if (error) {
		return <></>;
	}
	if (isLoading) {
		return (
			<div className={styles.main}>
				<div className={styles.ground}></div>
				<div className={styles.count}></div>
			</div>
		);
	}
	const personal_count = data.runner;
	const b0 = personal_count.filter((obj) => obj.base1 == null && obj.base2 == null && obj.base3 == null);
	const b1 = personal_count.filter((obj) => obj.base1 != null && obj.base2 == null && obj.base3 == null);
	const b2 = personal_count.filter((obj) => obj.base1 == null && obj.base2 != null && obj.base3 == null);
	const b3 = personal_count.filter((obj) => obj.base1 == null && obj.base2 == null && obj.base3 != null);
	const b12 = personal_count.filter((obj) => obj.base1 != null && obj.base2 != null && obj.base3 == null);
	const b13 = personal_count.filter((obj) => obj.base1 != null && obj.base2 == null && obj.base3 != null);
	const b23 = personal_count.filter((obj) => obj.base1 == null && obj.base2 != null && obj.base3 != null);
	const b123 = personal_count.filter((obj) => obj.base1 != null && obj.base2 != null && obj.base3 != null);
	const br = personal_count.filter((obj) => obj.base2 != null || obj.base3 != null);
	const bnr = personal_count.filter((obj) => obj.base2 == null && obj.base3 == null);

	return (
		<motion.div
			className={styles.main}
			initial={{ x: 100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			// exit={{ x: -100, opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			<div className={`${styles.ground} ${styles.w1400}`}>
				<Image src={'/image/mysterya/field.png'} alt='야구장' fill={true} quality={100} />
				{/* {counts.map((val, index) => ( */}
				<Groundbase baseGraphic={baseGraphic} isb={isb} />
				{/* ))} */}
			</div>
			<div className={styles.base}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>베이스</th>
							<th>타석</th>
							<th className={styles.w900n}>타수</th>
							<th>타율</th>
							<th className={styles.w900n}>장타율</th>
							<th className={styles.w600n}>출루율</th>
							<th>안타</th>
							<th className={`${styles.w600n}`}>장타</th>
							<th className={styles.w600n}>삼진</th>
							<th className={styles.w1200n}>4구</th>
							<th className={styles.w1200n}>사구</th>
							<th className={styles.w1200s}>사사구</th>
							<th className={styles.w900n}>OPS</th>
						</tr>
					</thead>
					<tbody>
						<BaseHead
							data={br}
							base={'득점권'}
							gp={[
								{ top: '48%', left: '50%', label: '득점권 2루' },
								{ top: '65%', left: '34%', label: '득점권 3루' },
							]}
							setbaseGraphic={setbaseGraphic}
							setisb={setisb}
						/>
						<Base
							data={b123}
							base={'만루'}
							gp={[
								{ top: '65%', left: '66%', label: '만루 1루' },
								{ top: '48%', left: '50%', label: '만루 2루' },
								{ top: '65%', left: '34%', label: '만루 3루' },
							]}
							setbaseGraphic={setbaseGraphic}
						/>
						<Base
							data={b23}
							base={'2,3루'}
							gp={[
								{ top: '48%', left: '50%', label: '23루 2루' },
								{ top: '65%', left: '34%', label: '23루 3루' },
							]}
							setbaseGraphic={setbaseGraphic}
						/>
						<Base
							data={b13}
							base={'1,3루'}
							gp={[
								{ top: '65%', left: '66%', label: '13루 1루' },

								{ top: '65%', left: '34%', label: '13루 3루' },
							]}
							setbaseGraphic={setbaseGraphic}
						/>
						<Base
							data={b12}
							base={'1,2루'}
							gp={[
								{ top: '65%', left: '66%', label: '12루 1루' },
								{ top: '48%', left: '50%', label: '12루 2루' },
							]}
							setbaseGraphic={setbaseGraphic}
						/>
						<Base data={b3} base={'3루'} gp={[{ top: '65%', left: '34%', label: '3루' }]} setbaseGraphic={setbaseGraphic} />
						<Base data={b2} base={'2루'} gp={[{ top: '48%', left: '50%', label: '2루' }]} setbaseGraphic={setbaseGraphic} />
						<BaseHead
							data={bnr}
							base={'비득점권'}
							gp={[{ top: '65%', left: '66%', label: '비득점권 1루' }]}
							setbaseGraphic={setbaseGraphic}
							setisb={setisb}
						/>
						<Base data={b1} base={'1루'} gp={[{ top: '65%', left: '66%', label: '1루' }]} setbaseGraphic={setbaseGraphic} />
						<Base data={b0} base={'노베이스'} gp={[]} setbaseGraphic={setbaseGraphic} />
					</tbody>
				</table>
			</div>
		</motion.div>
	);
}

function Groundbase({ baseGraphic, isb }) {
	let backgroundColor = '#ffff00';
	if (isb) backgroundColor = '#ffff0000';
	return (
		<AnimatePresence mode='popLayout'>
			{baseGraphic.map((val, index) => {
				return (
					<motion.div
						className={styles.groundbase}
						style={{
							backgroundColor,
							// left: left[index],
							// top: top[index],
							left: val.left,
							top: val.top,
						}}
						key={val.label}
						initial={{ display: 'none' }}
						animate={{ display: 'block' }}
						exit={{ display: 'none' }}
					></motion.div>
				);
			})}
		</AnimatePresence>
	);
}

export function BaseHead({ data, base, gp, setbaseGraphic, setisb }) {
	const PA = data.length;
	if (PA == 0) {
		return <></>;
	}
	const [AB, H, _2B, _3B, _4B, LH, BB2, BB, HBP, K] = calc(data);
	return (
		<tr
			onPointerEnter={(e) => {
				setbaseGraphic(gp);
				setisb(true);
			}}
			onPointerLeave={(e) => {
				setbaseGraphic([]);
				setisb(false);
			}}
		>
			<th>{base}</th>
			<th>{PA}</th>
			<th className={styles.w900n}>{AB}</th>
			<th>{(H / (AB ? AB : 1)).toFixed(3)}</th>
			<th className={styles.w900n}>{((H + _2B * 2 + _3B * 3 + _4B * 4) / (AB ? AB : 1)).toFixed(3)}</th>
			<th className={styles.w600n}>{((H + BB2) / (PA ? PA : 1)).toFixed(3)}</th>
			<th>{H}</th>
			<th className={`${styles.w600n}`}>{LH}</th>
			<th className={styles.w600n}>{K}</th>
			<th className={styles.w1200n}>{BB}</th>
			<th className={styles.w1200n}>{HBP}</th>
			<th className={styles.w1200s}>{HBP + BB}</th>
			<th className={styles.w900n}>{((H + _2B * 2 + _3B * 3 + _4B * 4) / (AB ? AB : 1) + (H + BB2) / (PA ? PA : 1)).toFixed(3)}</th>
		</tr>
	);
}
export function Base({ data, base, gp, setbaseGraphic }) {
	const PA = data.length;
	if (PA == 0) {
		return <></>;
	}
	const [AB, H, _2B, _3B, _4B, LH, BB2, BB, HBP, K] = calc(data);
	return (
		<tr
			onPointerEnter={(e) => {
				e.preventDefault();
				setbaseGraphic(gp);
			}}
			// onPointerLeave={(e) => {
			// 	e.preventDefault();
			// 	setbaseGraphic([]);
			// }}
		>
			<td>{base}</td>
			<td>{PA}</td>
			<td className={styles.w900n}>{AB}</td>
			<td>{(H / (AB ? AB : 1)).toFixed(3)}</td>
			<td className={styles.w900n}>{((H + _2B * 2 + _3B * 3 + _4B * 4) / (AB ? AB : 1)).toFixed(3)}</td>
			<td className={styles.w600n}>{((H + BB2) / (PA ? PA : 1)).toFixed(3)}</td>
			<td>{H}</td>
			<td className={`${styles.w600n}`}>{LH}</td>
			<td className={styles.w600n}>{K}</td>
			<td className={styles.w1200n}>{BB}</td>
			<td className={styles.w1200n}>{HBP}</td>
			<td className={styles.w1200s}>{HBP + BB}</td>
			<td className={styles.w900n}>{((H + _2B * 2 + _3B * 3 + _4B * 4) / (AB ? AB : 1) + (H + BB2) / (PA ? PA : 1)).toFixed(3)}</td>
		</tr>
	);
}

function calc(data) {
	const AB6 = ['HBP', 'BB', 'SF', 'SAC', 'I', 'Ob'];
	const H4 = ['H', '2B', '3B', 'HR'];
	const H3 = ['2B', '3B', 'HR'];
	const BB2_ = ['BB', 'HBP'];
	const AB = data.filter((obj) => !AB6.includes(obj.result)).length;
	const H = data.filter((obj) => H4.includes(obj.hit_result)).length;
	const _2B = data.filter((obj) => obj.result == '2B').length;
	const _3B = data.filter((obj) => obj.result == '3B').length;
	const _4B = data.filter((obj) => obj.result == 'HR').length;
	const LH = data.filter((obj) => H3.includes(obj.hit_result)).length;
	const BB2 = data.filter((obj) => BB2_.includes(obj.result)).length;
	const BB = data.filter((obj) => obj.result == 'BB').length;
	const HBP = data.filter((obj) => obj.result == 'HBP').length;
	const K = data.filter((obj) => obj.result == 'K').length;

	return [AB, H, _2B, _3B, _4B, LH, BB2, BB, HBP, K];
}
