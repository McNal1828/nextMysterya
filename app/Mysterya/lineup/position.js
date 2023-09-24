'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import html2canvas from 'html2canvas';
export default function Position({ data }) {
	const top = ['55%', '78%', '55%', '35%', '55%', '35%', '15%', '5%', '15%'];
	const left = ['43%', '43%', '69%', '56%', '17%', '30%', '7%', '43%', '79%'];
	const [pnums, setpnums] = useState({
		1: '/image/mysterya/profile/default.jpg',
		2: '/image/mysterya/profile/default.jpg',
		3: '/image/mysterya/profile/default.jpg',
		4: '/image/mysterya/profile/default.jpg',
		5: '/image/mysterya/profile/default.jpg',
		6: '/image/mysterya/profile/default.jpg',
		7: '/image/mysterya/profile/default.jpg',
		8: '/image/mysterya/profile/default.jpg',
		0: '/image/mysterya/profile/default.jpg',
	});
	// const tem = new Map();
	// tem.set('default', { num: 'default', text: '선수' });
	// const [lnums, setlnums] = useState([tem]);
	// let mapval = [];
	const imgref1 = useRef(null);
	const imgref2 = useRef(null);
	const imgref3 = useRef(null);
	const imgref4 = useRef(null);
	const imgref5 = useRef(null);
	const imgref6 = useRef(null);
	const imgref7 = useRef(null);
	const imgref8 = useRef(null);
	const imgref9 = useRef(null);
	const imgrefs = [imgref1, imgref2, imgref3, imgref4, imgref5, imgref6, imgref7, imgref8, imgref9];

	function Select() {
		let re = [];
		for (let i = 0; i < 9; i++) {
			re.push(
				<li>
					<select
					// onChange={(e) => {
					// 	const num = e.target.value;
					// 	const text = e.target.options[e.target.options.selectedIndex].text;
					// }}
					>
						{data.map((val, index) => (
							<option key={index} value={val.number} name={val.name} tabIndex={index}>
								No.{val.number} {val.name}
							</option>
						))}
					</select>
				</li>
			);
		}
		return re;
	}

	return (
		<div className={styles.canvas} id='canvas'>
			<div className={styles.field}>
				{/* <Image alt='테스트용이미지' src='/image/mysterya/field.png' width={800} height={800} >ㅇㅇㅇ</Image> */}

				{top.map((val, index) => (
					<div
						key={index}
						style={{
							top: top[index],
							left: left[index],
						}}
						className={styles.position}
					>
						<div
							ref={imgrefs[index]}
							alt='선수'
							// src={pnums[index]}
							style={{
								backgroundImage: `url(${pnums[index]})`,
								backgroundSize: 'contain',
								backgroundRepeat: 'no-repeat',
								width: '120px',
								height: '120px',
							}}
						></div>

						<select
							onChange={(e) => {
								const temp = { ...pnums };
								temp[index] = `/image/mysterya/profile/${e.target.value}.jpg`;
								setpnums(temp);
							}}
							className={styles.select}
						>
							{data.map((val, index) => (
								<option key={index} value={val.number}>
									No.{val.number} {val.name}
								</option>
							))}
						</select>
					</div>
				))}
			</div>
			<div className={`${styles.sheet} ${styles.text}`}>
				<p className={styles.title}>타순</p>
				<ul>
					{top.map((val, index) => (
						<li key={index}>
							<p>{index + 1}번</p>
							<select className={styles.select}>
								{data.map((val, index) => (
									<option key={index} value={val.number} name={val.name} tabIndex={index}>
										No.{val.number} {val.name}
									</option>
								))}
							</select>
						</li>
					))}
				</ul>
				<button
					onClick={(e) => {
						html2canvas(document.querySelector('#canvas'), { backgroundColor: '#222222', allowTaint: true, useCORS: true }).then((canvas) => {
							var link = document.createElement('a');
							link.download = 'lineup.png';
							link.href = canvas.toDataURL('image/png');
							link.click();
						});
					}}
					className={styles.button}
				>
					저장하기
				</button>
			</div>
		</div>
	);
}
