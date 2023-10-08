'use client';
import useSWR from 'swr';
import styles from './content.module.css';
import { League, Recent_5, Total, Year, calc } from './calc';

export default function PlayerRecent({ player_number }) {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/mysterya/player/status/${player_number}`, fetcher);
	if (error) {
		return <></>;
	}
	if (isLoading) {
		return (
			<>
				<div className={styles.content}>
					<div className={styles.scroll}>
						<div className={styles.title}>
							<p>최근경기 타석</p>
							<hr />
						</div>
						<table className={styles.table}>
							<thead>
								<tr>
									<th>경기</th>
									<th>결과</th>
									<th>공 개수</th>
									<th>S</th>
									<th>B</th>
									<th>O</th>
									<th>주자</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>데이터를 로딩하고있습니다 ...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div>
						<div className={styles.title}>
							<p>최근 5경기</p>
							<hr />
						</div>
						<table className={styles.table}>
							<thead>
								<tr>
									<th>경기</th>
									<th>타석</th>
									<th>타수</th>
									<th>타율</th>
									<th>출루율</th>
									<th>안타</th>
									<th>장타</th>
									<th>삼진</th>
									<th>4구</th>
									<th>사구</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>로딩중...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div>
						<div className={styles.title}>
							<p>통산기록</p>
							<hr />
						</div>
						<table className={styles.table}>
							<thead>
								<tr>
									<th>경기수</th>
									<th>타석</th>
									<th>타수</th>
									<th>타율</th>
									<th>장타율</th>
									<th>출루율</th>
									<th>안타</th>
									<th>2루타</th>
									<th>3루타</th>
									<th>홈런</th>
									<th>삼진</th>
									<th>4구</th>
									<th>사구</th>
									<th>OPS</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>로딩중...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
									<td>...</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</>
		);
	}
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
	};
	const personal_recent = data.recent.map((obj) => obj.recent);
	const personal_count = data.count;
	// const personal_total_count = personal_count
	// 	.map((data) => data.game_count)
	// 	.reduce((accumulator, currentValue) => {
	// 		return accumulator + currentValue;
	// 	}, 0);
	const personal_year = data.year;
	const personal_data = data.player;
	const personal_recent_5_data = personal_data.filter((obj) => personal_recent.indexOf(obj));
	const personal_recent_1_data = personal_data.filter((obj) => obj.recent == personal_recent[0]);
	return (
		<>
			<div className={styles.content}>
				<div className={styles.title}>
					<p>최근경기 타석</p>
					<hr />
				</div>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>경기</th>
							<th>결과</th>
							<th>공 개수</th>
							<th>S</th>
							<th>B</th>
							<th>O</th>
							<th>주자</th>
						</tr>
					</thead>
					<tbody>
						{personal_recent_1_data.map((data, index) => (
							<tr key={index}>
								<td>
									{data.game_score} &nbsp;&nbsp;&nbsp; {data.inning}회
								</td>
								<td>{ko[data.hit_result ? data.hit_result : data.result]}</td>
								<td>{data.final}</td>
								<td>{data.strike}</td>
								<td>{data.ball}</td>
								<td>{data.out_count}</td>
								<td>
									{data.base1 ? '1,' : ''}
									{data.base2 ? '2,' : ''}
									{data.base3 ? '3' : ''}
									{data.base1 || data.base2 || data.base3 ? '루' : '주자없음'}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className={styles.title}>
					<p>최근 5경기</p>
					<hr />
				</div>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>경기</th>
							<th>타석</th>
							<th>타수</th>
							<th>타율</th>
							<th>출루율</th>
							<th>안타</th>
							<th>장타</th>
							<th>삼진</th>
							<th>4구</th>
							<th>사구</th>
						</tr>
					</thead>
					<tbody>
						{personal_recent.map((data, index) => (
							<Recent_5 data={personal_recent_5_data} recent={data} key={index} />
						))}
					</tbody>
				</table>
				<div className={styles.title}>
					<p>통산기록</p>
					<hr />
				</div>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>경기수</th>
							<th>타석</th>
							<th>타수</th>
							<th>타율</th>
							<th>장타율</th>
							<th>출루율</th>
							<th>안타</th>
							<th>2루타</th>
							<th>3루타</th>
							<th>홈런</th>
							<th>삼진</th>
							<th>4구</th>
							<th>사구</th>
							<th>OPS</th>
						</tr>
					</thead>
					<tbody>
						<Total data={personal_data} personal_total_count={personal_count.length} />
					</tbody>
				</table>
				<div className={styles.title}>
					<p>리그 / 연도별</p>
					<hr />
				</div>
				<div className={styles.scroll}>
					<table className={styles.table}>
						<thead>
							<tr>
								<th>구분</th>
								<th>경기수</th>
								<th>타석</th>
								<th>타수</th>
								<th>타율</th>
								<th>장타율</th>
								<th>출루율</th>
								<th>안타</th>
								<th>2루타</th>
								<th>3루타</th>
								<th>홈런</th>
								<th>삼진</th>
								<th>4구</th>
								<th>사구</th>
								<th>OPS</th>
							</tr>
						</thead>
						<tbody>
							<League data={personal_data} count={personal_count} />
							<Year data={personal_data} year={personal_year} />
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
