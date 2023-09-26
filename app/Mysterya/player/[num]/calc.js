function calc(data) {
	const AB6 = ['HBP', 'BB', 'SF', 'SAC', 'I', 'Ob'];
	const H4 = ['H', '2B', '3B', 'HR'];
	const H3 = ['2B', '3B', 'HR'];
	const BB2_ = ['BB', 'HBP'];
	const AB = data.filter((obj) => !AB6.includes(obj.result)).length;
	const H = data.filter((obj) => H4.includes(obj.hit_result)).length;
	const _2B = data.filter((obj) => obj.result == '2B').length;
	const _3B = data.filter((obj) => obj.result == '3B').length;
	const _4B = data.filter((obj) => obj.result == '4B').length;
	const LH = data.filter((obj) => H3.includes(obj.hit_result)).length;
	const BB2 = data.filter((obj) => BB2_.includes(obj.result)).length;
	const BB = data.filter((obj) => obj.result == 'BB').length;
	const HBP = data.filter((obj) => obj.result == 'HBP').length;
	const K = data.filter((obj) => obj.result == 'K').length;
	const score = data.filter((obj) => obj)[0].game_score;
	return [AB, H, _2B, _3B, _4B, LH, BB2, BB, HBP, K, score];
}

export function Total({ data }) {
	const PA = data.length;
	if (PA == 0) {
		return <></>;
	}
	// 	<tr>
	// 	<th>경기수</th>
	// 	<th>타석</th>
	// 	<th>타수</th>
	// 	<th>타율</th>
	// 	<th>장타율</th>
	// 	<th>출루율</th>
	// 	<th>안타</th>
	// 	<th>2루타</th>
	// 	<th>3루타</th>
	// 	<th>홈런</th>
	// 	<th>삼진</th>
	// 	<th>4구</th>
	// 	<th>사구</th>
	// 	<th>OPS</th>
	// </tr>
	const [AB, H, _2B, _3B, _4B, LH, BB2, BB, HBP, K, score] = calc(data);
	return (
		<tr>
			<td>나중에 max값</td>
			<td>{PA}</td>
			<td>{AB}</td>
			<td>{(H / (AB ? AB : 1)).toFixed(3)}</td>
			<td>{((H + _2B * 2 + _3B * 3 + _4B * 4) / (AB ? AB : 1)).toFixed(3)}</td>
			<td>{((H + BB2) / (PA ? PA : 1)).toFixed(3)}</td>
			<td>{H}</td>
			<td>{_2B}</td>
			<td>{_3B}</td>
			<td>{_4B}</td>
			<td>{K}</td>
			<td>{BB}</td>
			<td>{HBP}</td>
			<td>{((H + _2B * 2 + _3B * 3 + _4B * 4) / (AB ? AB : 1) + (H + BB2) / (PA ? PA : 1)).toFixed(3)}</td>
		</tr>
	);
}

export function Recent_5({ data, recent }) {
	const data_recent = data.filter((obj) => obj.recent == recent);
	const PA = data_recent.length;
	if (PA == 0) {
		return <></>;
	}
	const [AB, H, _2B, _3B, _4B, LH, BB2, BB, HBP, K, score] = calc(data_recent);
	return (
		<tr>
			<td>{score}</td>
			<td>{PA}</td>
			<td>{AB}</td>
			<td>{(H / (AB ? AB : 1)).toFixed(3)}</td>
			<td>{((H + BB2) / (PA ? PA : 1)).toFixed(3)}</td>
			<td>{H}</td>
			<td>{LH}</td>
			<td>{K}</td>
			<td>{BB}</td>
			<td>{HBP}</td>
		</tr>
	);
}
