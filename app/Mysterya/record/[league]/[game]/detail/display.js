import Image from 'next/image';
import styles from './display.module.css';
import Position from './position';
export default function Showdata({ data, player }) {
	const ko = {
		K: '삼진',
		SF: '희생플라이',
		SAC: '희생번트',
		GO: '땅볼',
		AO: '뜬볼',
		LD: '라인드라이브',
		DP: '병살',
		TP: '삼중살',
		FAO: '파울플라이',
		I: '타격방해',
		Ob: '주루방해',
		BB: '4구',
		HBP: '사구',
		H: '안타',
		'2B': '2루타',
		'3B': '3루타',
		HR: '홈런',
		FC: '야수선택',
		BH: '번트안타',
		E: '에러',
		IBB: '고의사구',
	};
	const base = { 1: '1루', 2: '2루', 3: '3루', 4: '홈' };
	const position_kr = ['투수', '포수 및 뒤', '1루', '2루', '3루', '유격수', '좌익수', '중견수', '우익수', '좌측파울', '우측파울'];
	const mwhy = { n: '', w: '폭투', pb: '포일', E: '에러, ' };
	console.log(player);
	return (
		<>
			<div className={styles.info}>
				<div style={{ display: 'flex' }}>
					<div className={styles.player}>
						<div className={styles.images}>
							<Image alt='선수이미지' src={`/image/mysterya/profile/${data.C.player_number}.jpg`} fill className={styles.img} />
						</div>
						<div className={`${styles.title} ${styles.w500}`}>
							<p>No.{data.C.player_number}</p>
							<p>{data.C.name}</p>
						</div>
					</div>
					<Position />
				</div>
				<div className={`${styles.image}`}>
					<p>
						<span>B</span>
						{[...Array(data.C.ball)].map((n, index) => (
							<span key={index}> </span>
						))}
					</p>
					<p>
						<span>S</span>
						{[...Array(data.C.strike)].map((n, index) => (
							<span key={index}> </span>
						))}
					</p>
					<p>
						<span>O</span>
						{[...Array(data.C.out_count)].map((n, index) => (
							<span key={index}> </span>
						))}
					</p>
				</div>
			</div>
			{data.S.map((obj1, index) => {
				return (
					<div key={index} className={styles.listcontent}>
						<p>
							{obj1.player_number}번 {base[obj1.steel]} 도루 {obj1.out ? '실패' : '성공'}
						</p>
						{obj1.note ? <p>{obj1.note}</p> : <></>}
					</div>
				);
			})}
			{Object.keys(data.H) != 0 ? (
				<div className={styles.listcontent}>
					<p>
						타석결과 :&nbsp;
						{data.H.hit_result ? `${ko[data.H.hit_result]}` : `${ko[data.H.result]}`}
						{data.H.direction ? `(${position_kr[Number(data.H.direction) - 1]})` : ``}
						{/* {data.H.swing ? '(스윙)' : ''} */}
						{data.H.final ? `(총 ${data.H.final}구)` : ''}
					</p>
				</div>
			) : (
				<></>
			)}
			{data.M.map((obj1, index) => {
				return (
					<div key={index} className={styles.listcontent}>
						<p>
							{obj1.player_number}번 {base[obj1.move]}이동 {obj1.out == 1 ? '아웃' : ''}
						</p>
						<p>
							{mwhy[obj1.why]} {obj1.note}
						</p>
					</div>
				);
			})}

			{/* <div>
				<p>{data.C.base1 ? '1루 주자 : ' + player.find((obj) => obj.player_number == Number(data.C.base1)).name : ''}</p>
				<p>{data.C.base2 ? '2루 주자 : ' + player.find((obj) => obj.player_number == Number(data.C.base2)).name : ''}</p>
				<p>{data.C.base3 ? '3루 주자 : ' + player.find((obj) => obj.player_number == Number(data.C.base3)).name : ''}</p>
				<p>{data.C.strike}</p>
				<p>{data.C.ball}</p>
				<p>{data.C.out_count}</p>
				<p>{data.C.player_number}</p>
				<p>{data.C.name}</p>
				<p>{data.C.call}</p>
			</div> */}

			{data.R.map((ele, index) => {
				return (
					<div key={index} className={styles.listcontent}>
						<p>{ele}번 득점</p>
					</div>
				);
			})}
		</>
	);
}
