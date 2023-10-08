'use client';
import Image from 'next/image';
import styles from './ballcount.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import useSWR from 'swr';
import { useEffect, useState } from 'react';

export default function Ballcount({ player_number }) {
	const [selected_strike, setselected_strike] = useState(2);
	const [selected_ball, setselected_ball] = useState(3);
	const [selected_out, setselected_out] = useState(2);
	const [selectedTab, setSelectedTab] = useState('all');

	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/mysterya/player/status/${player_number}/ballcount`, fetcher);
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
	const personal_ballcount = data.ballcount;
	const o0 = personal_ballcount.filter((obj) => obj.out_count == 0);
	const o1 = personal_ballcount.filter((obj) => obj.out_count == 1);
	const o2 = personal_ballcount.filter((obj) => obj.out_count == 2);
	const tabs = {
		all: { label: '통합', data: personal_ballcount, out: 0 },
		'0out': { label: '0아웃', data: o0, out: 0 },
		'1out': { label: '1아웃', data: o1, out: 1 },
		'2out': { label: '2아웃', data: o2, out: 2 },
	};
	return (
		<motion.div
			className={styles.main}
			initial={{ x: 100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			// exit={{ x: -100, opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			<div className={styles.image}>
				<p>
					<span>B</span>
					{[...Array(selected_ball)].map((n, index) => (
						<span key={index}> </span>
					))}
				</p>
				<p>
					<span>S</span>
					{[...Array(selected_strike)].map((n, index) => (
						<span key={index}> </span>
					))}
				</p>
				<p>
					<span>O</span>
					{[...Array(selected_out)].map((n, index) => (
						<span key={index}> </span>
					))}
				</p>
			</div>
			<div className={styles.base}>
				<nav>
					<ul>
						{Object.keys(tabs).map((item) => (
							<li
								key={item}
								className={item === selectedTab ? 'selected' : ''}
								onClick={() => {
									setSelectedTab(item);
									setselected_out(tabs[item].out);
								}}
							>
								{`${tabs[item].label}`}
								{item === selectedTab ? <motion.div className={styles.underline} layoutId='ballunderline' /> : null}
							</li>
						))}
					</ul>
				</nav>
				<AnimatePresence mode='wait'>
					<motion.div
						key={selectedTab ? selectedTab : 'empty'}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className={styles.table}
					>
						{selectedTab ? (
							<Table data={tabs[selectedTab].data} setselected_strike={setselected_strike} setselected_ball={setselected_ball} />
						) : (
							' '
						)}
					</motion.div>
				</AnimatePresence>
			</div>
		</motion.div>
	);
}
function Table({ data, setselected_strike, setselected_ball }) {
	const s0b0 = data.filter((obj) => obj.strike == 0 && obj.ball == 0);
	const s0b1 = data.filter((obj) => obj.strike == 0 && obj.ball == 1);
	const s0b2 = data.filter((obj) => obj.strike == 0 && obj.ball == 2);
	const s0b3 = data.filter((obj) => obj.strike == 0 && obj.ball == 3);
	const s1b0 = data.filter((obj) => obj.strike == 1 && obj.ball == 0);
	const s1b1 = data.filter((obj) => obj.strike == 1 && obj.ball == 1);
	const s1b2 = data.filter((obj) => obj.strike == 1 && obj.ball == 2);
	const s1b3 = data.filter((obj) => obj.strike == 1 && obj.ball == 3);
	const s2b0 = data.filter((obj) => obj.strike == 2 && obj.ball == 0);
	const s2b1 = data.filter((obj) => obj.strike == 2 && obj.ball == 1);
	const s2b2 = data.filter((obj) => obj.strike == 2 && obj.ball == 2);
	const s2b3 = data.filter((obj) => obj.strike == 2 && obj.ball == 3);
	const avg_tot =
		data
			.map((data) => data.final)
			.reduce((accumulator, currentValue) => {
				return accumulator + currentValue;
			}, 0) / (data.length ? data.length : 1);
	const avg_strike =
		data
			.map((data) => data.strike)
			.reduce((accumulator, currentValue) => {
				return accumulator + currentValue;
			}, 0) / (data.length ? data.length : 1);
	const avg_ball =
		data
			.map((data) => data.ball)
			.reduce((accumulator, currentValue) => {
				return accumulator + currentValue;
			}, 0) / (data.length ? data.length : 1);

	return (
		<div>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>볼카운트</th>
						<th>타석</th>
						<th>타율</th>
						<th>출루율</th>
						<th>아웃</th>
						<th>안타</th>
						<th>사사구</th>
					</tr>
				</thead>
				<tbody>
					<Calc data={s0b0} setselected_strike={setselected_strike} setselected_ball={setselected_ball} />
					<Calc data={s0b1} setselected_strike={setselected_strike} setselected_ball={setselected_ball} />
					<Calc data={s0b2} setselected_strike={setselected_strike} setselected_ball={setselected_ball} />
					<Calc data={s0b3} setselected_strike={setselected_strike} setselected_ball={setselected_ball} />
					<Calc data={s1b0} setselected_strike={setselected_strike} setselected_ball={setselected_ball} />
					<Calc data={s1b1} setselected_strike={setselected_strike} setselected_ball={setselected_ball} />
					<Calc data={s1b2} setselected_strike={setselected_strike} setselected_ball={setselected_ball} />
					<Calc data={s1b3} setselected_strike={setselected_strike} setselected_ball={setselected_ball} />
					<Calc data={s2b0} setselected_strike={setselected_strike} setselected_ball={setselected_ball} />
					<Calc data={s2b1} setselected_strike={setselected_strike} setselected_ball={setselected_ball} />
					<Calc data={s2b2} setselected_strike={setselected_strike} setselected_ball={setselected_ball} />
					<Calc data={s2b3} setselected_strike={setselected_strike} setselected_ball={setselected_ball} />
				</tbody>
			</table>
			<p>평균 공 개수 : {avg_tot.toFixed(1)}개</p>
			<p>
				평균 카운트 : {avg_strike.toFixed(1)}S {avg_ball.toFixed(1)}B
			</p>
		</div>
	);
}

function Calc({ data, setselected_strike, setselected_ball }) {
	const PA = data.length;
	if (PA == 0) {
		return <></>;
	}

	const AB6 = ['HBP', 'BB', 'SF', 'SAC', 'I', 'Ob'];
	const H4 = ['H', '2B', '3B', 'HR'];
	const outs = ['DP', 'TP', 'GO', 'AO', 'LD', 'FC', 'FAO', 'E'];
	const BB2_ = ['BB', 'HBP'];
	const AB = data.filter((obj) => !AB6.includes(obj.result)).length;
	const H = data.filter((obj) => H4.includes(obj.hit_result)).length;
	const BB2 = data.filter((obj) => BB2_.includes(obj.result)).length;
	const out = data.filter((obj) => obj.result == 'K' || outs.includes(obj.hit_result)).length;
	return (
		<tr
			onPointerEnter={(e) => {
				e.preventDefault();
				setselected_strike(data[0].strike);
				setselected_ball(data[0].ball);
			}}
		>
			<td>
				{data[0].strike}S{data[0].ball}B
			</td>
			<td>{PA}</td>
			<td>{(H / (AB ? AB : 1)).toFixed(3)}</td>
			<td>{((H + BB2) / (PA ? PA : 1)).toFixed(3)}</td>
			<td>{out}번</td>
			<td>{H}번</td>
			<td>{BB2}번</td>
		</tr>
	);
}
