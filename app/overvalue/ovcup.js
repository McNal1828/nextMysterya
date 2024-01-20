'use client';
import Link from 'next/link';
import styles from './ovcup.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';

/**
 *
 * @param {Object} param
 * @param {string} param.name
 * @param {Array<{year: Number, map: String, team1: String, team2: String, score : String}>} param.data
 * @param {string} param.background
 * @returns
 */
export default function Ovcup({ name, data, background }) {
	const size = data.length;
	const [slide, setslide] = useState(0);
	const [maxcount, setmaxcount] = useState(size);
	const [count, setcount] = useState(0);
	const [slidesize, setslidesize] = useState(0);
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 600) {
				setslidesize(65);
				setmaxcount(size - 1);
			}
			if (window.innerWidth > 600) {
				setslidesize(45);
				setmaxcount(size - 2);
			}
			if (window.innerWidth > 900) {
				setslidesize(25);
				setmaxcount(size - 4);
			}
			if (window.innerWidth > 1200) {
				setslidesize(20);
				setmaxcount(size - 5);
			}
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	useEffect(() => {
		setslide(-count * slidesize);
	}, [count]);
	useEffect(() => {
		setslide(-count * slidesize);
	}, [slidesize]);
	useEffect(() => {
		console.log(count);
		console.log(maxcount);
		if (count > maxcount) {
			setcount(maxcount);
		}
		setslide(-count * slidesize);
	}, [maxcount]);

	return (
		<div className={`${styles.ovcup} ${styles[background]}`}>
			<h1 className={styles.title}>
				<span className={styles.maintitle}>{name}</span>
			</h1>
			<div className={styles.gamelist}>
				<div className={styles.container}>
					<ul style={{ transform: `translateX(${slide}%)` }}>
						{data.map((obj, index) => (
							<li key={index}>
								<div className={styles.listimg}>
									<Image src={`/image/overvalue/map/${obj.map}`} fill alt='맵이미지' />
								</div>
								<div className={styles.listtext}>
									<p className={styles.team}>
										{obj.team1} vs {obj.team2}
									</p>
									<p className={styles.score}>{obj.score}</p>
								</div>
							</li>
						))}
					</ul>
					<div
						className={`${styles.swiper_button} ${styles.swiper_left}`}
						onClick={(e) => {
							count != 0 ? setcount(count - 1) : '';
						}}
						style={count == 0 ? { display: 'none' } : {}}
					></div>
					<div
						className={`${styles.swiper_button} ${styles.swiper_right}`}
						onClick={(e) => {
							count != maxcount ? setcount(count + 1) : '';
						}}
						style={count == maxcount ? { display: 'none' } : {}}
					></div>
				</div>
			</div>
		</div>
	);
}
