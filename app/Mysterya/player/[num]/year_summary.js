import styles from './content.module.css';
export default function YearSummary({ data }) {
	return (
		<>
			<div className={styles.content}>
				<div className={styles.title}>
					<p>년도별 기록</p>
					<hr />
				</div>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>년도</th>
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
						{data.map((val, index) => (
							<tr key={index}>
								<td>{val['년도']}</td>

								<td>{val['경기수']}</td>
								<td>{val['타석']}</td>
								<td>{val['타수']}</td>
								<td>{parseFloat(val['타율']).toFixed(3)}</td>
								<td>{val['안타']}</td>
								<td>{val['2루타']}</td>
								<td>{val['3루타']}</td>
								<td>{val['홈런']}</td>
								<td>{val['삼진']}</td>
								<td>{val['4구']}</td>
								<td>{val['사구']}</td>
								<td>{parseFloat(val['장타율']).toFixed(3)}</td>
								<td>{parseFloat(val['출루율']).toFixed(3)}</td>
								<td>{parseFloat(val['OPS']).toFixed(3)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}
