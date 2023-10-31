import Image from 'next/image';
import styles from './page.module.css';
import Card from './card';
export default async function Page({ params, searchParams }) {
	const url = process.env.BASE_URL + encodeURI(`/api/mysterya/ranking/league/${params.index}`);
	const res = await fetch(url, { cache: 'no-store' });
	const data_ = await res.json();
	const data = data_.data;
	const friend = data_.friend;
	const sorted = {};

	data.forEach((obj) => {
		if (!sorted.hasOwnProperty(obj.player_number))
			sorted[obj.player_number] = {
				number: obj.player_number,
				name: obj.name,
				PA: 0,
				AB: 0,
				H: 0,
				_2B: 0,
				_3B: 0,
				_4B: 0,
				BB: 0,
				HBP: 0,
				LK: 0,
				SK: 0,
				LS: 0,
				SS: 0,
				F: 0,
				HL: 0,
				HR: 0,
				ZZ: { H: 0, AB: 0, O: 0 },
				ZT: { H: 0, BB: 0, O: 0, SS: 0 },
				RBI: 0,
				RR: 0,
				BF: {},
				TB: 0,
				TBF: [, 0, 0],
			};
		if (obj.result == null) {
			if (obj.swing == 1 && obj.call == 's') {
				sorted[obj.player_number].SS += 1;
			}
			if (obj.swing == 0 && obj.call == 's') {
				sorted[obj.player_number].LS += 1;
			}
			if (obj.strike == 0 && obj.ball == 3 && obj.swing == 1 && obj.call == 's') {
				sorted[obj.player_number].ZT.SS += 1;
			}
		}
		if (obj.result != null) {
			sorted[obj.player_number].PA += 1;
			if (obj.result == 'BB') {
				sorted[obj.player_number].BB += 1;
				if (obj.strike == 0 && obj.ball == 3) {
					sorted[obj.player_number].ZT.BB += 1;
				}
			}
			if (obj.result == 'HBP') {
				sorted[obj.player_number].HBP += 1;
			}
			if (obj.result == 'F') {
				sorted[obj.player_number].F += 1;
			}
			if (obj.result == 'H') {
				sorted[obj.player_number].AB += 1;
				if (obj.hit_result == 'H') {
					sorted[obj.player_number].H += 1;
					if (obj.strike == 0 && obj.ball == 0) {
						sorted[obj.player_number].ZZ.AB += 1;
						sorted[obj.player_number].ZZ.H += 1;
					}
					if (obj.strike == 0 && obj.ball == 3) {
						sorted[obj.player_number].ZT.H += 1;
					}
				}
				if (obj.hit_result == '2B') {
					sorted[obj.player_number]._2B += 1;
					if (obj.strike == 0 && obj.ball == 0) {
						sorted[obj.player_number].ZZ.AB += 1;
						sorted[obj.player_number].ZZ.H += 1;
					}
					if (obj.strike == 0 && obj.ball == 3) {
						sorted[obj.player_number].ZT.H += 1;
					}
				}
				if (obj.hit_result == '3B') {
					sorted[obj.player_number]._3B += 1;
					if (obj.strike == 0 && obj.ball == 0) {
						sorted[obj.player_number].ZZ.AB += 1;
						sorted[obj.player_number].ZZ.H += 1;
					}
					if (obj.strike == 0 && obj.ball == 3) {
						sorted[obj.player_number].ZT.H += 1;
					}
				}
				if (obj.hit_result == 'HR') {
					sorted[obj.player_number]._4B += 1;
					if (obj.strike == 0 && obj.ball == 0) {
						sorted[obj.player_number].ZZ.AB += 1;
						sorted[obj.player_number].ZZ.H += 1;
					}
					if (obj.strike == 0 && obj.ball == 3) {
						sorted[obj.player_number].ZT.H += 1;
					}
				}
			}
			if (obj.result == 'K') {
				sorted[obj.player_number].AB += 1;
				if (obj.swing == 1) {
					sorted[obj.player_number].SK += 1;
				}
				if (obj.swing == 0) {
					sorted[obj.player_number].LK += 1;
				}
			}
			if (['7', '5', '6', 'L'].includes(obj.direction)) {
				sorted[obj.player_number].HL += 1;
			}
			if (['9', '3', '4', 'R'].includes(obj.direction)) {
				sorted[obj.player_number].HR += 1;
			}
			if (obj.RBI != null) {
				sorted[obj.player_number].RBI += obj.RBI;
			}
			if (['GO', 'AO', 'LD', 'FAO', 'E'].includes(obj.hit_result)) {
				if (obj.strike == 0 && obj.ball == 0) {
					sorted[obj.player_number].ZZ.AB += 1;
					sorted[obj.player_number].ZZ.O += 1;
				}
				if (obj.strike == 0 && obj.ball == 3) {
					sorted[obj.player_number].ZT.O += 1;
				}
			}
		}
		if (obj.final) sorted[obj.player_number].TB += obj.final;
	});
	friend.forEach((obj) => {
		if (!sorted.hasOwnProperty(obj.player_number))
			sorted[obj.player_number] = {
				number: obj.player_number,
				name: obj.name,
				PA: 0,
				AB: 0,
				H: 0,
				_2B: 0,
				_3B: 0,
				_4B: 0,
				BB: 0,
				HBP: 0,
				LK: 0,
				SK: 0,
				LS: 0,
				SS: 0,
				F: 0,
				HL: 0,
				HR: 0,
				ZZ: { H: 0, AB: 0, O: 0 },
				ZT: { H: 0, BB: 0, O: 0, SS: 0 },
				RBI: 0,
				RR: 0,
				BF: {},
				TB: 0,
			};
		if (!sorted.hasOwnProperty(obj.r_in))
			sorted[obj.player_number] = {
				number: obj.player_number,
				name: obj.name,
				PA: 0,
				AB: 0,
				H: 0,
				_2B: 0,
				_3B: 0,
				_4B: 0,
				BB: 0,
				HBP: 0,
				LK: 0,
				SK: 0,
				LS: 0,
				SS: 0,
				F: 0,
				HL: 0,
				HR: 0,
				ZZ: { H: 0, AB: 0, O: 0 },
				ZT: { H: 0, BB: 0, O: 0, SS: 0 },
				RBI: 0,
				RR: 0,
				BF: {},
				TB: 0,
			};
		sorted[obj.r_in].RR += 1;
		if (!sorted[obj.r_in].BF[obj.player_number]) sorted[obj.r_in].BF[obj.player_number] = 0;
		sorted[obj.r_in].BF[obj.player_number] += 1;
	});

	Object.values(sorted).forEach((obj) => {
		if (Object.keys(obj.BF).length != 0) {
			const entries = Object.entries(obj.BF);
			entries.sort((a, b) => b[1] - a[1]);
			obj.TBF = [...entries[0], entries[0][1] / obj.RR];
		}
	});

	const batting_king = Object.values(sorted).sort(
		(a, b) => (b.H + b._2B + b._3B + b._4B) / (b.AB ? b.AB : 1) - (a.H + a._2B + a._3B + a._4B) / (a.AB ? a.AB : 1)
	);
	const long_batting_king = Object.values(sorted).sort(
		(a, b) => (b.H + b._2B * 2 + b._3B * 3 + b._4B * 4) / (b.AB ? b.AB : 1) - (a.H + a._2B * 2 + a._3B * 3 + a._4B * 4) / (a.AB ? a.AB : 1)
	);
	const on_base_king = Object.values(sorted).sort(
		(a, b) => (b.H + b._2B + b._3B + b._4B + b.BB + b.HBP) / (b.PA ? b.PA : 1) - (a.H + a._2B + a._3B + a._4B + a.BB + a.HBP) / (a.PA ? a.PA : 1)
	);
	const RBI_king = Object.values(sorted).sort((a, b) => b.RBI - a.RBI);
	const K_king = Object.values(sorted).sort((a, b) => b.SK + b.LK - a.SK - a.LK);
	const BB_king = Object.values(sorted).sort((a, b) => b.BB + b.HBP - a.BB - a.HBP);
	const F_king = Object.values(sorted).sort((a, b) => b.F - a.F);
	const LH_king = Object.values(sorted).reduce((max, current) =>
		max.HL / (max.HL + max.HR ? max.HL + max.HR : 1) < current.HL / (current.HL + current.HR ? current.HL + current.HR : 1) ? current : max
	);
	const RH_king = Object.values(sorted).reduce((max, current) =>
		max.HR / (max.HL + max.HR ? max.HL + max.HR : 1) < current.HR / (current.HL + current.HR ? current.HL + current.HR : 1) ? current : max
	);
	const ZZ_king = Object.values(sorted).sort((a, b) => b.ZZ.H / (b.ZZ.AB ? b.ZZ.AB : 1) - a.ZZ.H / (a.ZZ.AB ? a.ZZ.AB : 1));
	const ZT_king = Object.values(sorted).sort(
		(a, b) => (b.ZT.O + b.ZT.SS) / (b.ZT.BB + b.ZT.H ? b.ZT.BB + b.ZT.H : 1) - (a.ZT.O + a.ZT.SS) / (a.ZT.BB + a.ZT.H ? a.ZT.BB + a.ZT.H : 1)
	);
	const pole_king = Object.values(sorted).sort((a, b) => (b.LK + b.LS) / b.TB - (a.LK + a.LS) / a.TB);
	const fan_king = Object.values(sorted).sort((a, b) => (b.SK + b.SS) / b.TB - (a.SK + a.SS) / a.TB);
	const RR_king = Object.values(sorted).sort((a, b) => b.RR - a.RR);
	const BF_king = Object.values(sorted).sort((a, b) => b.TBF[1] - a.TBF[1]);

	return (
		<div className={styles.main}>
			<p className={styles.title}>리그별 랭킹</p>
			<hr />
			<div className={styles.submain}>
				<p className={styles.subtitle}>타격왕</p>
				<hr />
				<div>
					<div className={styles.cards}>
						{batting_king
							.filter((obj) => obj.AB > 4)
							.slice(0, 3)
							.map((obj, index) => {
								return (
									<Card
										key={index}
										name={obj.name}
										number={obj.number}
										no={index}
										data1={['타율', ((obj.H + obj._2B + obj._3B + obj._4B) / (obj.AB ? obj.AB : 1)).toFixed(3)]}
										data2={['타수', obj.AB]}
										data3={['안타', obj.H + obj._2B + obj._3B + obj._4B]}
									/>
								);
							})}
					</div>
					<details>
						<summary className={styles.summary}>전체보기</summary>
						<div className={styles.detail}>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>이름</th>
										<th>타수</th>
										<th>타율</th>
										<th>안타</th>
									</tr>
								</thead>
								<tbody>
									{batting_king.map((obj, index) => {
										return (
											<tr key={index}>
												<td>{obj.name}</td>
												<td>{obj.AB}</td>
												<td>{((obj.H + obj._2B + obj._3B + obj._4B) / (obj.AB ? obj.AB : 1)).toFixed(3)}</td>
												<td>{obj.H + obj._2B + obj._3B + obj._4B}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</details>
				</div>
				<p className={styles.subtitle}>장타왕</p>
				<hr />
				<div>
					<div className={styles.cards}>
						{long_batting_king
							.filter((obj) => obj.AB > 4)
							.slice(0, 3)
							.map((obj, index) => {
								return (
									<Card
										key={index}
										name={obj.name}
										number={obj.number}
										no={index}
										data1={['장타율', ((obj.H + obj._2B * 2 + obj._3B * 3 + obj._4B * 4) / (obj.AB ? obj.AB : 1)).toFixed(3)]}
										data2={['타수', obj.AB]}
										data3={['장타', obj._2B + obj._3B + obj._4B]}
									/>
								);
							})}
					</div>
					<details>
						<summary className={styles.summary}>전체보기</summary>
						<div className={styles.detail}>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>이름</th>
										<th>타수</th>
										<th>장타율</th>
										<th className={styles.w800n}>2루타</th>
										<th className={styles.w800n}>3루타</th>
										<th className={styles.w800n}>홈런</th>
										<th className={styles.w800s}>장타</th>
									</tr>
								</thead>
								<tbody>
									{long_batting_king.map((obj, index) => {
										return (
											<tr key={index}>
												<td>{obj.name}</td>
												<td>{obj.AB}</td>
												<td>{((obj.H + obj._2B * 2 + obj._3B * 3 + obj._4B * 4) / (obj.AB ? obj.AB : 1)).toFixed(3)}</td>
												<td className={styles.w800n}>{obj._2B}</td>
												<td className={styles.w800n}>{obj._3B}</td>
												<td className={styles.w800n}>{obj._4B}</td>
												<td className={styles.w800s}>{obj._4B + obj._3B + obj._2B}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</details>
				</div>
				<p className={styles.subtitle}>출루왕</p>
				<hr />
				<div>
					<div className={styles.cards}>
						{on_base_king
							.filter((obj) => obj.PA > 4)
							.slice(0, 3)
							.map((obj, index) => {
								return (
									<Card
										key={index}
										name={obj.name}
										number={obj.number}
										no={index}
										data1={['출루율', ((obj.H + obj._2B + obj._3B + obj._4B + obj.BB + obj.HBP) / (obj.PA ? obj.PA : 1)).toFixed(3)]}
										data2={['안타', obj.H + obj._2B + obj._3B + obj._4B]}
										data3={['사사구', obj.BB + obj.HBP]}
									/>
								);
							})}
					</div>
					<details>
						<summary className={styles.summary}>전체보기</summary>
						<div className={styles.detail}>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>이름</th>
										<th>타석</th>
										<th>출루율</th>
										<th className={styles.w800n}>안타</th>
										<th className={styles.w800n}>4구</th>
										<th className={styles.w800n}>사구</th>
									</tr>
								</thead>
								<tbody>
									{on_base_king.map((obj, index) => {
										return (
											<tr key={index}>
												<td>{obj.name}</td>
												<td>{obj.PA}</td>
												<td>{((obj.H + obj._2B + obj._3B + obj._4B + obj.BB + obj.HBP) / (obj.PA ? obj.PA : 1)).toFixed(3)}</td>
												<td className={styles.w800n}>{obj.H + obj._2B + obj._3B + obj._4B}</td>
												<td className={styles.w800n}>{obj.BB}</td>
												<td className={styles.w800n}>{obj.HBP}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</details>
				</div>
				<p className={styles.subtitle}>타점왕</p>
				<hr />
				<div>
					<div className={styles.cards}>
						{RBI_king.slice(0, 3).map((obj, index) => {
							return <Card key={index} name={obj.name} number={obj.number} no={index} data1={['타점', obj.RBI]} />;
						})}
					</div>
					<details>
						<summary className={styles.summary}>전체보기</summary>
						<div className={styles.detail}>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>이름</th>
										<th>타점</th>
									</tr>
								</thead>
								<tbody>
									{RBI_king.map((obj, index) => {
										return (
											<tr key={index}>
												<td>{obj.name}</td>
												<td>{obj.RBI}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</details>
				</div>
				<p className={styles.subtitle}>득점왕</p>
				<hr />
				<div>
					<div className={styles.cards}>
						{RR_king.slice(0, 3).map((obj, index) => {
							return <Card key={index} name={obj.name} number={obj.number} no={index} data1={['득점', obj.RR]} />;
						})}
					</div>
					<details>
						<summary className={styles.summary}>전체보기</summary>
						<div className={styles.detail}>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>이름</th>
										<th>득점</th>
									</tr>
								</thead>
								<tbody>
									{RR_king.map((obj, index) => {
										return (
											<tr key={index}>
												<td>{obj.name}</td>
												<td>{obj.RR}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</details>
				</div>
				<p className={styles.subtitle}>삼진왕</p>
				<hr />
				<div>
					<div className={styles.cards}>
						{K_king.slice(0, 3).map((obj, index) => {
							return (
								<Card
									key={index}
									name={obj.name}
									number={obj.number}
									no={index}
									data1={['총 삼진', obj.LK + obj.SK]}
									data2={['루킹삼진', obj.LK]}
									data3={['스윙삼진', obj.SK]}
								/>
							);
						})}
					</div>
					<details>
						<summary className={styles.summary}>전체보기</summary>
						<div className={styles.detail}>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>이름</th>
										<th>삼진</th>
										<th>스윙삼진</th>
										<th>루킹삼진</th>
									</tr>
								</thead>
								<tbody>
									{K_king.map((obj, index) => {
										return (
											<tr key={index}>
												<td>{obj.name}</td>
												<td>{obj.LK + obj.SK}</td>
												<td>{obj.LK}</td>
												<td>{obj.SK}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</details>
				</div>
				<p className={styles.subtitle}>사사구왕</p>
				<hr />
				<div>
					<div className={styles.cards}>
						{BB_king.slice(0, 3).map((obj, index) => {
							return (
								<Card
									key={index}
									name={obj.name}
									number={obj.number}
									no={index}
									data1={['사사구', obj.BB + obj.HBP]}
									data2={['4구', obj.BB]}
									data3={['사구', obj.HBP]}
								/>
							);
						})}
					</div>
					<details>
						<summary className={styles.summary}>전체보기</summary>
						<div className={styles.detail}>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>이름</th>
										<th>사사구</th>
										<th>4구</th>
										<th>사구</th>
									</tr>
								</thead>
								<tbody>
									{BB_king.map((obj, index) => {
										return (
											<tr key={index}>
												<td>{obj.name}</td>
												<td>{obj.BB + obj.HBP}</td>
												<td>{obj.BB}</td>
												<td>{obj.HBP}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</details>
				</div>
				<p className={styles.subtitle}>파울왕</p>
				<hr />
				<div>
					<div className={styles.cards}>
						{F_king.slice(0, 3).map((obj, index) => {
							return <Card key={index} name={obj.name} number={obj.number} no={index} data1={['파울수', obj.F]} />;
						})}
					</div>
					<details>
						<summary className={styles.summary}>전체보기</summary>
						<div className={styles.detail}>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>이름</th>
										<th>파울수</th>
									</tr>
								</thead>
								<tbody>
									{F_king.map((obj, index) => {
										return (
											<tr key={index}>
												<td>{obj.name}</td>
												<td>{obj.F}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</details>
				</div>
				<p className={styles.subtitle}>우왕/좌왕</p>
				<hr />
				<div>
					<div className={`${styles.cards} ${styles.LR}`}>
						<Card
							name={RH_king.name}
							number={RH_king.number}
							no={0}
							data1={['우측비율', ((RH_king.HR / (RH_king.HL + RH_king.HR ? RH_king.HL + RH_king.HR : 1)) * 100).toFixed(1) + '%']}
						/>
						<Card
							name={LH_king.name}
							number={LH_king.number}
							no={0}
							data1={['좌측비율', ((LH_king.HL / (LH_king.HL + LH_king.HR ? LH_king.HL + LH_king.HR : 1)) * 100).toFixed(1) + '%']}
						/>
					</div>
					<details>
						<summary className={styles.summary}>전체보기</summary>
						<div className={styles.detail}>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>이름</th>
										<th>우측비율</th>
										<th>좌측비율</th>
									</tr>
								</thead>
								<tbody>
									{Object.values(sorted).map((obj, index) => {
										return (
											<tr key={index}>
												<td>{obj.name}</td>
												<td>
													{((obj.HR / (obj.HL + obj.HR ? obj.HL + obj.HR : 1)) * 100).toFixed(1)}% ({obj.HR}개)
												</td>
												<td>
													{((obj.HL / (obj.HL + obj.HR ? obj.HL + obj.HR : 1)) * 100).toFixed(1)}% ({obj.HL}개)
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</details>
				</div>
				<p className={styles.subtitle}>초구왕</p>
				<hr />
				<div>
					<div className={styles.cards}>
						{ZZ_king.slice(0, 3).map((obj, index) => {
							return (
								<Card
									key={index}
									name={obj.name}
									number={obj.number}
									no={index}
									data1={['타율', (obj.ZZ.H / (obj.ZZ.AB ? obj.ZZ.AB : 1)).toFixed(3)]}
									data2={['아웃', obj.ZZ.O]}
									data3={['안타', obj.ZZ.H]}
								/>
							);
						})}
					</div>
					<details>
						<summary className={styles.summary}>전체보기</summary>
						<div className={styles.detail}>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>이름</th>
										<th>타수</th>
										<th>타율</th>
										<th>안타</th>
										<th className={styles.w800n}>아웃</th>
									</tr>
								</thead>
								<tbody>
									{ZZ_king.map((obj, index) => {
										return (
											<tr key={index}>
												<td>{obj.name}</td>
												<td>{obj.ZZ.AB}</td>
												<td>{(obj.ZZ.H / (obj.ZZ.AB ? obj.ZZ.AB : 1)).toFixed(3)}</td>
												<td>{obj.ZZ.H}</td>
												<td className={styles.w800n}>{obj.ZZ.O}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</details>
				</div>
				<p className={styles.subtitle}>3볼욕망왕</p>
				<hr />
				<div>
					<div className={styles.cards}>
						{ZT_king.slice(0, 3).map((obj, index) => {
							return (
								<Card
									key={index}
									name={obj.name}
									number={obj.number}
									no={index}
									data1={['아웃', obj.ZT.O]}
									data2={['볼넷', obj.ZT.BB]}
									data3={['스윙', obj.ZT.SS]}
								/>
							);
						})}
					</div>
					<details>
						<summary className={styles.summary}>전체보기</summary>
						<div className={styles.detail}>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>이름</th>
										<th>아웃</th>
										<th className={styles.w800n}>스윙스트라이크</th>
										<th>볼넷</th>
										<th>안타</th>
										<th className={styles.w800n}>(스윙+아웃) / (볼넷+안타) 비율</th>
									</tr>
								</thead>
								<tbody>
									{ZT_king.map((obj, index) => {
										return (
											<tr key={index}>
												<td>{obj.name}</td>
												<td>{obj.ZT.O}</td>
												<td className={styles.w800n}>{obj.ZT.SS}</td>
												<td>{obj.ZT.BB}</td>
												<td>{obj.ZT.H}</td>
												<td className={styles.w800n}>{(obj.ZT.SS + obj.ZT.O) / (obj.ZT.BB + obj.ZT.H ? obj.ZT.BB + obj.ZT.H : 1)}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</details>
				</div>
				<p className={styles.subtitle}>전봇대왕</p>
				<hr />
				<div>
					<div className={styles.cards}>
						{pole_king.slice(0, 3).map((obj, index) => {
							return (
								<Card
									key={index}
									name={obj.name}
									number={obj.number}
									no={index}
									data1={['루킹K', obj.LK]}
									data2={['루킹S', obj.LS]}
									data3={['전체 공', obj.TB]}
								/>
							);
						})}
					</div>
					<details>
						<summary className={styles.summary}>전체보기</summary>
						<div className={styles.detail}>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>이름</th>
										<th>루킹삼진</th>
										<th>루킹스트라이크</th>
										<th>전체공대비 비율</th>
									</tr>
								</thead>
								<tbody>
									{pole_king.map((obj, index) => {
										return (
											<tr key={index}>
												<td>{obj.name}</td>
												<td>{obj.LK}</td>
												<td>{obj.LS}</td>
												<td>
													{(((obj.LS + obj.LK) / obj.TB) * 100).toFixed(1)}% ({obj.LK + obj.LS}/{obj.TB})
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</details>
				</div>
				<p className={styles.subtitle}>선풍기왕</p>
				<hr />
				<div>
					<div className={styles.cards}>
						{fan_king.slice(0, 3).map((obj, index) => {
							return (
								<Card
									key={index}
									name={obj.name}
									number={obj.number}
									no={index}
									data1={['스윙K', obj.SK]}
									data2={['스윙S', obj.SS]}
									data3={['전체 공', obj.TB]}
								/>
							);
						})}
					</div>
					<details>
						<summary className={styles.summary}>전체보기</summary>
						<div className={styles.detail}>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>이름</th>
										<th>스윙삼진</th>
										<th>스윙스트라이크</th>
										<th>전체공대비 비율</th>
									</tr>
								</thead>
								<tbody>
									{fan_king.map((obj, index) => {
										return (
											<tr key={index}>
												<td>{obj.name}</td>
												<td>{obj.SK}</td>
												<td>{obj.SS}</td>
												<td>
													{(((obj.SS + obj.SK) / obj.TB) * 100).toFixed(1)}% ({obj.SK + obj.SS}/{obj.TB})
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</details>
				</div>
				<p className={styles.subtitle}>환상의 짝궁</p>
				<hr />
				<div>
					<div className={`${styles.cards} ${styles.LR}`}>
						<Card name={BF_king[0].name} number={BF_king[0].number} no={0} data1={['득점', BF_king[0].RR]} />
						<Card name={sorted[BF_king[0]['TBF'][0]].name} number={BF_king[0]['TBF'][0]} no={0} data1={['불러들인 횟수', BF_king[0]['TBF'][1]]} />
					</div>
					<details>
						<summary className={styles.summary}>전체보기</summary>
						<div className={styles.detail}>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>이름</th>
										<th>가장 많이 불러들인사람</th>
										<th>횟수</th>
										<th>비율</th>
									</tr>
								</thead>
								<tbody>
									{Object.values(BF_king).map((obj, index) => {
										return (
											<tr key={index}>
												<td>{obj.name}</td>
												<td>{obj.TBF[0] ? sorted[obj.TBF[0]].name : ''}</td>
												<td>{obj.TBF[1]}</td>
												<td>
													{obj.TBF[2] ? (obj.TBF[2] * 100).toFixed(1) : 0}% (득점:
													{obj.RR})
												</td>
												{/* <td>{obj.name}</td>
												<td>{sorted[Object.keys(obj.BF)[0]] ? sorted[Object.keys(obj.BF)[0]].name : ''}</td>
												<td>{Object.values(obj.BF)[0]}</td>
												<td>
													{(((Object.values(obj.BF)[0] ? Object.values(obj.BF)[0] : 0) / (obj.RR ? obj.RR : 1)) * 100).toFixed(1)}%
													(득점:
													{obj.RR})
												</td> */}
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</details>
				</div>
			</div>
		</div>
	);
}
