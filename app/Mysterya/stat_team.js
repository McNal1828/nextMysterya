'use client';
import useSWR from 'swr';
import styles from './page.module.css';

function calc(data, recent) {
	const data_recent = data.filter((obj) => obj.recent == recent);
	console.log(data_recent);
	const AB6 = ['HBP', 'BB', 'SF', 'SAC', 'I', 'Ob'];
	const H4 = ['H', '2B', '3B', 'HR'];
	const H3 = ['2B', '3B', 'HR'];
	const BB2 = ['BB', 'HBP'];
	const PA = data_recent.length;
	const AB = data_recent.filter((obj) => !AB6.includes(obj.result)).length;
	const H = data_recent.filter((obj) => H4.includes(obj.hit_result)).length;
	const LH = data_recent.filter((obj) => H3.includes(obj.hit_result)).length;
	const BB = data_recent.filter((obj) => BB2.includes(obj.result)).length;
	const K = data_recent.filter((obj) => obj.result == 'K').length;
	const score = data_recent.filter((obj) => obj)[0].game_score;
	return [PA, AB, H, LH, BB, K, score];
}
function Table({ data, recent }) {
	if (data.filter((obj) => obj.recent == recent).length == 0) return <></>;
	const [PA, AB, H, LH, BB, K, score] = calc(data, recent);
	console.log(PA, AB, H, LH, BB, K, score);
	return (
		<tr>
			<td>{score}</td>
			<td>{AB}</td>
			<td>{(H / (AB ? AB : 1)).toFixed(3)}</td>
			<td>{((H + BB) / (AB ? AB : 1)).toFixed(3)}</td>
			<td>{H}</td>
			<td>{BB}</td>
			<td>{K}</td>
		</tr>
	);
}

export default function Stat_Team() {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, error, isLoading } = useSWR('/api/mysterya/player/status', fetcher);

	if (error)
		return (
			<table className={styles.table}>
				<thead>
					<tr>
						<th>최근 3경기</th>
						<th>타수</th>
						<th>팀타율</th>
						<td>팀출루율</td>
						<th>안타</th>
						<th>사구</th>
						<th>삼진</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>로딩중 입니다......</td>
						<td>...</td>
						<td>...</td>
						<td>...</td>
						<td>...</td>
						<td>...</td>
						<td>...</td>
					</tr>
				</tbody>
			</table>
		);

	if (isLoading)
		return (
			<table className={styles.table}>
				<thead>
					<tr>
						<th>최근 3경기</th>
						<th>타수</th>
						<th>팀타율</th>
						<td>팀출루율</td>
						<th>안타</th>
						<th>사구</th>
						<th>삼진</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>로딩중 입니다......</td>
						<td>...</td>
						<td>...</td>
						<td>...</td>
						<td>...</td>
						<td>...</td>
						<td>...</td>
					</tr>
				</tbody>
			</table>
		);
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>최근 경기</th>
					<th>타수</th>
					<th>팀타율</th>
					<td>팀출루율</td>
					<th>안타</th>
					<th>사구</th>
					<th>삼진</th>
				</tr>
			</thead>
			<tbody>
				<Table data={data} recent={1} />
				<Table data={data} recent={2} />
				<Table data={data} recent={3} />
			</tbody>
		</table>
	);
}
