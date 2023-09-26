export function calc(data, recent) {
	const data_recent = data.filter((obj) => obj.recent == recent);
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
export function Table({ data, recent }) {
	if (data.filter((obj) => obj.recent == recent).length == 0) return <></>;
	const [PA, AB, H, LH, BB, K, score] = calc(data, recent);
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
