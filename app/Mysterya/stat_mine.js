'use client';
import useSWR from 'swr';
import styles from './page.module.css';

export default function Stat_mine({ mnum }) {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/mysterya/player/status/${mnum}`, fetcher);

	if (error)
		return (
			<table className={styles.table}>
				<thead>
					<tr>
						<th>분류</th>
						<th>타석</th>
						<th>타수</th>
						<th>안타</th>
						<th>장타</th>
						<th>사사구</th>
						<th>삼진</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>로딩중</td>
					</tr>
					<tr>
						<td>로딩중</td>
					</tr>
				</tbody>
			</table>
		);

	if (isLoading)
		return (
			<table className={styles.table}>
				<thead>
					<tr>
						<th>분류</th>
						<th>타석</th>
						<th>타수</th>
						<th>안타</th>
						<th>사사구</th>
						<th>삼진</th>
						<th>도루</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>로딩중....</td>
						<td>...</td>
						<td>...</td>
						<td>...</td>
						<td>...</td>
						<td>...</td>
						<td>...</td>
					</tr>
					<tr>
						<td>로딩중....</td>
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
	const AB6 = ['HBP', 'BB', 'SF', 'SAC', 'I', 'Ob'];
	const H4 = ['H', '2B', '3B', 'HR'];
	const H3 = ['2B', '3B', 'HR'];
	const BB2 = ['BB', 'HBP'];
	const PA = data.length;
	const AB = data.filter((obj) => !AB6.includes(obj.result)).length;
	const H = data.filter((obj) => H4.includes(obj.hit_result)).length;
	const LH = data.filter((obj) => H3.includes(obj.hit_result)).length;
	const BB = data.filter((obj) => BB2.includes(obj.result)).length;
	const K = data.filter((obj) => obj.result == 'K').length;
	const PA_recent5 = data.length;
	const AB_recent5 = data.filter((obj) => !AB6.includes(obj.result)).filter((obj) => obj.recent <= 5).length;
	const H_recent5 = data.filter((obj) => H4.includes(obj.hit_result)).filter((obj) => obj.recent <= 5).length;
	const LH_recent5 = data.filter((obj) => H3.includes(obj.hit_result)).filter((obj) => obj.recent <= 5).length;
	const BB_recent5 = data.filter((obj) => BB2.includes(obj.result)).filter((obj) => obj.recent <= 5).length;
	const K_recent5 = data.filter((obj) => obj.result == 'K').filter((obj) => obj.recent <= 5).length;
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>분류</th>
					<th>타석</th>
					<th>타수</th>
					<th>안타</th>
					<th>장타</th>
					<th>사사구</th>
					<th>삼진</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>최근 5경기</td>
					<td>{PA_recent5}</td>
					<td>{AB_recent5}</td>
					<td>{H_recent5}</td>
					<td>{LH_recent5}</td>
					<td>{BB_recent5}</td>
					<td>{K_recent5}</td>
				</tr>
				<tr>
					<td>통산</td>
					<td>{PA}</td>
					<td>{AB}</td>
					<td>{H}</td>
					<td>{LH}</td>
					<td>{BB}</td>
					<td>{K}</td>
				</tr>
			</tbody>
		</table>
	);
}
