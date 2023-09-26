'use client';
import useSWR from 'swr';
import styles from './content.module.css';
import { Recent_5, Total, calc } from './calc';

export default function PlayerRecent({ player_number }) {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	console.log(player_number);
	const { data, error, isLoading } = useSWR(`/api/mysterya/player/status/${player_number}`, fetcher);
	if (error) {
		return <></>;
	}
	if (isLoading) {
		return <></>;
	}
	const personal_recent_1 = data[0].recent;
	const personal_recent_5_data = data.filter(
		(obj) => obj.recent in [personal_recent_1, personal_recent_1 + 1, personal_recent_1 + 2, personal_recent_1 + 3, personal_recent_1 + 4]
	);
	const personal_recent_1_data = personal_recent_5_data.filter((obj) => obj.recent == personal_recent_1);
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
									{data.game_score} &nbsp;&nbsp;&nbsp; {data.inning}이닝
								</td>
								<td>{data.hit_result ? data.hit_result : data.result}</td>
								<td>{data.final}</td>
								<td>{data.strike}</td>
								<td>{data.ball}</td>
								<td>{data.out_count}</td>
								<td>
									{data.base3 ? 'O' : 'X'}
									{data.base2 ? 'O' : 'X'}
									{data.base1 ? 'O' : 'X'}
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
						<Recent_5 data={personal_recent_5_data} recent={personal_recent_1} />
						<Recent_5 data={personal_recent_5_data} recent={personal_recent_1 + 1} />
						<Recent_5 data={personal_recent_5_data} recent={personal_recent_1 + 2} />
						<Recent_5 data={personal_recent_5_data} recent={personal_recent_1 + 3} />
						<Recent_5 data={personal_recent_5_data} recent={personal_recent_1 + 4} />
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
						<Total data={data} />
					</tbody>
				</table>
			</div>
		</>
	);
}
