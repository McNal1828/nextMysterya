'use client';
import useSWR from 'swr';
import styles from './content.module.css';
export default function PlayerRecent({ player_number }) {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/mysterya/player/status/${player_number}`, fetcher);
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
						<tr>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
							<td>6</td>
							<td>7</td>
						</tr>
					</tbody>
				</table>
				<div className={styles.title}>
					<p>최근 5경기</p>
					<hr />
				</div>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>경기수</th>
							<th>타석</th>
							<th>타수</th>
							<th>타율</th>
							<th>안타</th>
							<th>2루타</th>
							<th>3루타</th>
							<th>홈런</th>
							<th>삼진</th>
							<th>4구</th>
							<th>사구</th>
							<th>장타율</th>
							<th>출루율</th>
							<th>OPS</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
							<td>6</td>
							<td>7</td>
							<td>8</td>
							<td>9</td>
							<td>0</td>
							<td>-</td>
							<td>1</td>
							<td>2</td>
							<td>3</td>
						</tr>
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
							<th>안타</th>
							<th>2루타</th>
							<th>3루타</th>
							<th>홈런</th>
							<th>삼진</th>
							<th>4구</th>
							<th>사구</th>
							<th>장타율</th>
							<th>출루율</th>
							<th>OPS</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
							<td>6</td>
							<td>7</td>
							<td>8</td>
							<td>9</td>
							<td>0</td>
							<td>-</td>
							<td>1</td>
							<td>2</td>
							<td>3</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}
