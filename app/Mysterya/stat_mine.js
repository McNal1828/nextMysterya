'use client';
import useSWR from 'swr';
import styles from './page.module.css';

export default function Stat_mine({ mnum }) {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/mysterya/player/status/${mnum}`, fetcher);
	if (error)
		return (
			<table className={styles.table}>
				<thead>
					<tr>
						<th>분류</th>
						<th>타석</th>
						<th className={styles.w900}>타수</th>
						<th>안타</th>
						<th className={styles.w900}>장타</th>
						<th className={styles.w900}>사사구</th>
						<th>삼진</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>에러발생</td>
					</tr>
					<tr>
						<td>에러발생</td>
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
						<th className={styles.w900}>타수</th>
						<th>안타</th>
						<th className={styles.w900}>사사구</th>
						<th className={styles.w900}>삼진</th>
						<th>도루</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>로딩중....</td>
						<td>...</td>
						<td className={styles.w900}>...</td>
						<td>...</td>
						<td className={styles.w900}>...</td>
						<td className={styles.w900}>...</td>
						<td>...</td>
					</tr>
					<tr>
						<td>로딩중....</td>
						<td>...</td>
						<td className={styles.w900}>...</td>
						<td>...</td>
						<td className={styles.w900}>...</td>
						<td className={styles.w900}>...</td>
						<td>...</td>
					</tr>
				</tbody>
			</table>
		);

	const personal_recent = data.recent.map((obj) => obj.recent);
	const personal_data = data.player;

	const AB6 = ['HBP', 'BB', 'SF', 'SAC', 'I', 'Ob'];
	const H4 = ['H', '2B', '3B', 'HR'];
	const H3 = ['2B', '3B', 'HR'];
	const BB2 = ['BB', 'HBP', 'IBB'];
	const PA = personal_data.length;
	const AB = personal_data.filter((obj) => !AB6.includes(obj.result)).length;
	const H = personal_data.filter((obj) => H4.includes(obj.hit_result)).length;
	const LH = personal_data.filter((obj) => H3.includes(obj.hit_result)).length;
	const BB = personal_data.filter((obj) => BB2.includes(obj.result)).length;
	const K = personal_data.filter((obj) => obj.result == 'K').length;
	const PA_recent5 = personal_data.filter((obj) => personal_recent.includes(obj.recent)).length;
	const AB_recent5 = personal_data.filter((obj) => personal_recent.includes(obj.recent)).filter((obj) => !AB6.includes(obj.result)).length;
	const H_recent5 = personal_data.filter((obj) => personal_recent.includes(obj.recent)).filter((obj) => H4.includes(obj.hit_result)).length;
	const LH_recent5 = personal_data.filter((obj) => personal_recent.includes(obj.recent)).filter((obj) => H3.includes(obj.hit_result)).length;
	const BB_recent5 = personal_data.filter((obj) => personal_recent.includes(obj.recent)).filter((obj) => BB2.includes(obj.result)).length;
	const K_recent5 = personal_data.filter((obj) => personal_recent.includes(obj.recent)).filter((obj) => obj.result == 'K').length;
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>분류</th>
					<th>타석</th>
					<th className={styles.w900}>타수</th>
					<th>안타</th>
					<th className={styles.w900}>장타</th>
					<th className={styles.w900}>삼진</th>
					<th>사사구</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>최근 5경기</td>
					<td>{PA_recent5}</td>
					<td className={styles.w900}>{AB_recent5}</td>
					<td>{H_recent5}</td>
					<td className={styles.w900}>{LH_recent5}</td>
					<td className={styles.w900}>{K_recent5}</td>
					<td>{BB_recent5}</td>
				</tr>
				<tr>
					<td>통산</td>
					<td>{PA}</td>
					<td className={styles.w900}>{AB}</td>
					<td>{H}</td>
					<td className={styles.w900}>{LH}</td>
					<td className={styles.w900}>{K}</td>
					<td>{BB}</td>
				</tr>
			</tbody>
		</table>
	);
}
