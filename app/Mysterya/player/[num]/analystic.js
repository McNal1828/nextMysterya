'use client';
import Image from 'next/image';
import { useRef } from 'react';
import styles from './content.module.css';
export default function Analystic({ pa_turn, pa_balltotal, pa_out, pa_tobase, pa_etc, pa_ballcount, pa_howbase2o3, pa_howbase0o1, pa_howbase, pa_direction }) {
	const directionTab = useRef(null);
	const howbaseTab = useRef(null);
	const turnTab = useRef(null);
	const ballcountTab = useRef(null);
	const balltotalTab = useRef(null);
	const outTab = useRef(null);
	const tobaseTab = useRef(null);
	const etcTab = useRef(null);
	const refs = [directionTab, howbaseTab, turnTab, ballcountTab, balltotalTab, outTab, tobaseTab, etcTab];
	const ko = ['타구방향 비율', '주자상황별', '타석횟수별', '볼카운트별', '타석당 공 갯수', '아웃비율', '출루비율', '기타'];
	const top = ['55%', '78%', '55%', '35%', '55%', '35%', '15%', '5%', '15%'];
	const left = ['39%', '39%', '65%', '52%', '13%', '26%', '3%', '39%', '75%'];
	const position = ['투수', '포수', '1루수', '2루수', '3루수', '유격수', '좌익수', '중견수', '우익수'];

	return (
		<>
			<div className={styles.content}>
				<div className={styles.title}>
					<p>타격 분석</p>
					<hr />
				</div>
				<nav>
					{ko.map((val, index) => (
						<button
							key={index}
							className={styles.navBtn}
							onClick={(e) => {
								refs.map((val) => {
									val.current.style = 'opacity:0';
									setTimeout(() => {
										val.current.classList.add(styles.hidden);
										refs[index].current.classList.remove(styles.hidden);
										setTimeout(() => {
											refs[index].current.style = 'opacity:1';
										}, 100);
									}, 200);
								});
							}}
						>
							{ko[index]}
						</button>
					))}
				</nav>
				<div className={styles.tabItems}>
					<div ref={directionTab} className={`${styles.tabItem}`}>
						<Image src={'/image/mysterya/field.png'} alt='야구장' fill={true} quality={100} />
						{position.map((val, index) => {
							let ratio = 0;
							pa_direction.map((val2) => {
								if (val === val2['포지션']) ratio = parseFloat(val2['비율']).toFixed(2);
							});
							let color = ratio >= 30 ? '#ff4800' : '#b813ff';
							return (
								<div
									key={index}
									className={styles.cirPer}
									style={{
										top: top[index],
										left: left[index],
										background: `conic-gradient(${color} 0% ${parseFloat(ratio) * 2}%, #00000040 ${parseFloat(ratio) * 2}% 100%)`,
									}}
								>
									<p className={styles.cen}>{ratio}%</p>
								</div>
							);
						})}
					</div>
					<div ref={howbaseTab} className={`${styles.tabItem} ${styles.hidden}`}>
						<table className={styles.table}>
							<thead>
								<tr>
									<th>베이스</th>
									<th>타석</th>
									<th>타수</th>
									<th>타율</th>
									<th>단타</th>
									<th>장타</th>
									<th>사사구</th>
									<th>삼진</th>
									<th>땅볼 및 뜬공</th>
									<th>병살 및 삼중살</th>
									<th>상대방실책</th>
									<th>타점</th>
								</tr>
							</thead>
							<tbody>
								{pa_howbase2o3.map((val, index) => (
									<tr key={index}>
										<td>{val['베이스']}</td>
										<td>{val['타석']}</td>
										<td>{val['타수']}</td>
										<td>{parseFloat(val['타율']).toFixed(3)}</td>
										<td>{val['단타']}</td>
										<td>{val['장타']}</td>
										<td>{val['사사구']}</td>
										<td>{val['삼진']}</td>
										<td>{val['땅볼 및 뜬공']}</td>
										<td>{val['병살 및 삼중살']}</td>
										<td>{val['상대방실책']}</td>
										<td>{val['타점']}</td>
									</tr>
								))}
								{pa_howbase0o1.map((val, index) => (
									<tr key={index}>
										<td>{val['베이스']}</td>
										<td>{val['타석']}</td>
										<td>{val['타수']}</td>
										<td>{parseFloat(val['타율']).toFixed(3)}</td>
										<td>{val['단타']}</td>
										<td>{val['장타']}</td>
										<td>{val['사사구']}</td>
										<td>{val['삼진']}</td>
										<td>{val['땅볼 및 뜬공']}</td>
										<td>{val['병살 및 삼중살']}</td>
										<td>{val['상대방실책']}</td>
										<td>{val['타점']}</td>
									</tr>
								))}
							</tbody>
							<thead>
								<tr>
									<th>베이스</th>
									<th>타석</th>
									<th>타수</th>
									<th>타율</th>
									<th>단타</th>
									<th>장타</th>
									<th>사사구</th>
									<th>삼진</th>
									<th>땅볼 및 뜬공</th>
									<th>병살 및 삼중살</th>
									<th>상대방실책</th>
									<th>타점</th>
								</tr>
							</thead>
							<tbody>
								{pa_howbase.map((val, index) => (
									<tr key={index}>
										<td>{val['베이스']}</td>
										<td>{val['타석']}</td>
										<td>{val['타수']}</td>
										<td>{parseFloat(val['타율']).toFixed(3)}</td>
										<td>{val['단타']}</td>
										<td>{val['장타']}</td>
										<td>{val['사사구']}</td>
										<td>{val['삼진']}</td>
										<td>{val['땅볼 및 뜬공']}</td>
										<td>{val['병살 및 삼중살']}</td>
										<td>{val['상대방실책']}</td>
										<td>{val['타점']}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div ref={turnTab} className={`${styles.tabItem} ${styles.hidden}`}>
						<table className={styles.table}>
							<thead>
								<tr>
									<th>타석 횟수</th>
									<th>타석</th>
									<th>타수</th>
									<th>타율</th>
									<th>안타</th>
									<th>사사구</th>
									<th>삼진</th>
									<th>땅볼 및 뜬공</th>
									<th>상대방실책</th>
								</tr>
							</thead>
							<tbody>
								{pa_turn.map((val, index) => (
									<tr key={index}>
										<td>{val['타석 횟수']}</td>
										<td>{val['타석']}</td>
										<td>{val['타수']}</td>
										<td>{parseFloat(val['타율']).toFixed(3)}</td>
										<td>{val['안타']}</td>

										<td>{val['사사구']}</td>
										<td>{val['삼진']}</td>
										<td>{val['땅볼 및 뜬공']}</td>

										<td>{val['상대방실책']}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div ref={ballcountTab} className={`${styles.tabItem} ${styles.hidden}`}>
						<table className={styles.table}>
							<thead>
								<tr>
									<th>볼카운트</th>
									<th>타석</th>
									<th>타수</th>
									<th>타율</th>
									<th>안타</th>
									<th>사사구</th>
									<th>삼진</th>
									<th>땅볼 및 뜬공</th>
									<th>상대방실책</th>
								</tr>
							</thead>
							<tbody>
								{pa_ballcount.map((val, index) => (
									<tr key={index}>
										<td>{val['볼카운트']}</td>
										<td>{val['타석']}</td>
										<td>{val['타수']}</td>
										<td>{parseFloat(val['타율']).toFixed(3)}</td>
										<td>{val['안타']}</td>

										<td>{val['사사구']}</td>
										<td>{val['삼진']}</td>
										<td>{val['땅볼 및 뜬공']}</td>

										<td>{val['상대방실책']}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div ref={balltotalTab} className={`${styles.tabItem} ${styles.hidden}`}>
						<table className={styles.table}>
							<thead>
								<tr>
									<th>공 갯수</th>
									<th>타석</th>
									<th>타율</th>
								</tr>
							</thead>
							<tbody>
								{pa_balltotal.map((val, index) => (
									<tr key={index}>
										<td>{val['공 갯수']}</td>
										<td>{val['타석']}</td>
										<td>{parseFloat(val['타율']).toFixed(3)}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div ref={outTab} className={`${styles.tabItem} ${styles.hidden}`}>
						<table className={styles.table}>
							<thead>
								<tr>
									<th>타수</th>
									<th>총 아웃</th>
									<th>루킹삼진</th>
									<th>루킹삼진비율</th>
									<th>스윙삼진</th>
									<th>땅볼</th>
									<th>뜬공</th>
									<th>직선타</th>
									<th>실책</th>
								</tr>
							</thead>
							<tbody>
								{pa_out.map((val, index) => (
									<tr key={index}>
										<td>{val['타수']}</td>
										<td>{val['총 아웃']}</td>
										<td>{val['루킹삼진']}</td>
										<td>{parseFloat(val['루킹삼진비율']).toFixed(3)}</td>
										<td>{val['스윙삼진']}</td>
										<td>{val['땅볼']}</td>
										<td>{val['뜬공']}</td>
										<td>{val['직선타']}</td>
										<td>{val['실책']}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div ref={tobaseTab} className={`${styles.tabItem} ${styles.hidden}`}>
						<table className={styles.table}>
							<thead>
								<tr>
									<th>총 출루</th>
									<th>안타</th>
									<th>4구</th>
									<th>사구</th>
								</tr>
							</thead>
							<tbody>
								{pa_tobase.map((val, index) => (
									<tr key={index}>
										<td>{val['총 출루']}</td>
										<td>{val['안타']}</td>
										<td>{val['4구']}</td>
										<td>{val['사구']}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div ref={etcTab} className={`${styles.tabItem} ${styles.hidden}`}>
						<table className={styles.table}>
							<thead>
								<tr>
									<th>K% : 타석당 삼진 비율</th>
									<th>BB% : 타석당 볼넷 비율</th>
									<th>K-BB% : 삼진-볼넷 비율 격차</th>
								</tr>
							</thead>
							<tbody>
								{pa_etc.map((val, index) => (
									<tr key={index}>
										<td>{parseFloat(val['K% : 타석당 삼진 비율']).toFixed(3)}</td>
										<td>{parseFloat(val['BB% : 타석당 볼넷 비율']).toFixed(3)}</td>
										<td>{parseFloat(val['K-BB% : 삼진-볼넷 비율 격차']).toFixed(3)}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}
