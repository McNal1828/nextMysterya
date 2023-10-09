'use client';
import Image from 'next/image';
import styles from './direction.module.css';
import { LayoutGroup, motion, useMotionValue, useTransform } from 'framer-motion';
import useSWR from 'swr';
import { useEffect, useState } from 'react';

const top = ['65%', '85%', '65%', '48%', '65%', '48%', '25%', '10%', '25%', '85%', '85%'];
const left = ['50%', '50%', '66%', '60%', '34%', '40%', '20%', '50%', '80%', '20%', '80%'];
const position = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'L', 'R'];
const position_kr = ['투수', '포수 및 뒤', '1루', '2루', '3루', '유격수', '좌익수', '중견수', '우익수', '좌측파울', '우측파울'];

export default function Direction({ player_number }) {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/mysterya/player/status/${player_number}/direction`, fetcher);
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
	const batting_data = data.batting;

	if (batting_data.find((data) => data.direction == 'B')) {
		if (batting_data.find((data) => data.direction == '2')) {
			batting_data[batting_data.findIndex((data) => data.direction == '2')].count += batting_data.find((data) => data.direction == 'B').count;
		}
		if (!batting_data.find((data) => data.direction == '2')) {
			batting_data.push({ direction: '2', count: batting_data.find((data) => data.direction == 'B').count });
		}
		batting_data.splice(
			batting_data.findIndex((data) => data.direction == 'B'),
			1
		);
	}

	const total_counts = batting_data
		.map((data) => data.count)
		.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		}, 0);
	const counts = batting_data.map((data) => ({ [data.direction]: data.count }));

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
				{counts.map((val, index) => (
					<Groundcircle data={val} key={index} total_counts={total_counts} />
				))}
			</div>
			<div className={styles.count}>
				<Rank data={batting_data} />
			</div>
		</motion.div>
	);
}
function Groundcircle({ data, total_counts }) {
	const percent = useMotionValue(0);
	const where = Object.keys(data)[0];
	const count = data[where];
	const index = position.indexOf(where);
	percent.set(count / total_counts);
	const x = '-50%';
	const y = '-50%';
	const backgroundColor = useTransform(percent, [0, 1], ['#00f', '#f00']);
	const scale = useTransform(percent, [0, 1], ['0.9', '1.5']);
	return (
		<motion.div
			key={index}
			className={styles.groundcircle}
			style={{
				scale,
				backgroundColor,
				left: left[index],
				top: top[index],
				y,
				x,
			}}
			id={where}
		></motion.div>
	);
}

function Rank({ data }) {
	const [sort_count, setsort_count] = useState(false);
	const [sort_dirrection, setsort_dirrection] = useState(false);
	// useEffect(() => {
	// 	if (sort_dirrection == true) {
	// 		setsort_count(false);
	// 	}
	// 	if (sort_count == true) {
	// 		setsort_dirrection(false);
	// 	}
	// }, [sort_dirrection, sort_count]);
	const sort_by_count = (arrry) => {
		if (sort_count) {
			arrry.reverse();
			console.log(sort_count);
			return arrry;
		}
		if (!sort_count) {
			console.log(sort_count);
			arrry.sort((a, b) => b.count - a.count);
			setsort_count(true);
			setsort_dirrection(false);
			return arrry;
		}
	};
	const sort_by_dirrection = (arrry) => {
		if (sort_dirrection) {
			console.log(sort_dirrection);
			arrry.reverse();
			return arrry;
		}
		if (!sort_dirrection) {
			console.log(sort_dirrection);
			arrry.sort((a, b) => b.direction - a.direction);
			setsort_dirrection(true);
			setsort_count(false);
			return arrry;
		}

		return arrry;
	};

	const [rank, setrank] = useState(data);

	return (
		<>
			<div className={styles.buttons}>
				<button
					onClick={(e) => {
						e.preventDefault();
						setrank(sort_by_count([...rank]));
					}}
				>
					횟수정렬
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						setrank(sort_by_dirrection([...rank]));
					}}
				>
					포지션정렬
				</button>
			</div>
			<ul className={styles.rank}>
				{[...rank].map((data, index) => (
					// <List data={data} key={index} />
					<motion.li
						layout
						key={data.direction}
						onHoverStart={(e) => {
							document.getElementById(data.direction).style.translate = '27% 25%';
							document.getElementById(data.direction).style.transitionDuration = '0.1s';
							document.getElementById(data.direction).style.scale = '1.5';
						}}
						onHoverEnd={(e) => {
							document.getElementById(data.direction).style.translate = '';
							document.getElementById(data.direction).style.scale = '';
						}}
						whileHover={{ scale: 1.1, backgroundColor: 'rgba(202, 202, 202, 0.3)' }}
					>
						<div className={styles.direction}>{position_kr[position.indexOf(data.direction)]}</div>
						<div className={styles.directioncount}>{data.count}회</div>
					</motion.li>
				))}
			</ul>
		</>
	);
}
