import styles from './content.module.css';
export default function Summary({ data }) {
	const summary = data[0];
	return (
		<>
			<div className={styles.content}>
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
							<td>{summary['경기수']}</td>
							<td>{summary['타석']}</td>
							<td>{summary['타수']}</td>
							<td>{parseFloat(summary['타율']).toFixed(3)}</td>
							<td>{summary['안타']}</td>
							<td>{summary['2루타']}</td>
							<td>{summary['3루타']}</td>
							<td>{summary['홈런']}</td>
							<td>{summary['삼진']}</td>
							<td>{summary['4구']}</td>
							<td>{summary['사구']}</td>
							<td>{parseFloat(summary['장타율']).toFixed(3)}</td>
							<td>{parseFloat(summary['출루율']).toFixed(3)}</td>
							<td>{parseFloat(summary['OPS']).toFixed(3)}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}
