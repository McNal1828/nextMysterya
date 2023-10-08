function calc(data) {
	const AB6 = ['HBP', 'BB', 'SF', 'SAC', 'I', 'Ob'];
	const H4 = ['H', '2B', '3B', 'HR'];
	const H3 = ['2B', '3B', 'HR'];
	const BB2_ = ['BB', 'HBP'];
	const AB = data.filter((obj) => !AB6.includes(obj.result)).length;
	const H = data.filter((obj) => H4.includes(obj.hit_result)).length;
	const _2B = data.filter((obj) => obj.result == '2B').length;
	const _3B = data.filter((obj) => obj.result == '3B').length;
	const _4B = data.filter((obj) => obj.result == 'HR').length;
	const LH = data.filter((obj) => H3.includes(obj.hit_result)).length;
	const BB2 = data.filter((obj) => BB2_.includes(obj.result)).length;
	const BB = data.filter((obj) => obj.result == 'BB').length;
	const HBP = data.filter((obj) => obj.result == 'HBP').length;
	const K = data.filter((obj) => obj.result == 'K').length;
	const score = data.filter((obj) => obj)[0].game_score;

	return [AB, H, _2B, _3B, _4B, LH, BB2, BB, HBP, K, score];
}

export function League({ data, count }) {
	const league_index = [...new Set(count.map((obj) => obj.league_index))];
	return (
		<>
			{league_index.map((lindex, index) => {
				const indexdata = data.filter((obj) => obj.league_index == lindex);
				const PA = indexdata.length;
				if (PA == 0) {
					return <></>;
				}
				const [AB, H, _2B, _3B, _4B, LH, BB2, BB, HBP, K, score] = calc(indexdata);
				const league = indexdata[0].name + indexdata[0].division + '(' + indexdata[0].year + ')';
				return (
					<tr key={index}>
						<td>{league}</td>
						<td>{count.filter((obj) => obj.league_index == lindex).length}</td>
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
			})}
		</>
	);
}
export function Year({ data, year }) {
	const year_index = [...new Set(year.map((obj) => obj.year))];
	return (
		<>
			{year_index.map((yindex, index) => {
				const indexdata = data.filter((obj) => obj.year == yindex);
				const PA = indexdata.length;
				if (PA == 0) {
					return <></>;
				}
				const [AB, H, _2B, _3B, _4B, LH, BB2, BB, HBP, K, score] = calc(indexdata);
				return (
					<tr key={index}>
						<td>{yindex}년</td>
						<td>{year.filter((obj) => obj.year == yindex).length}</td>
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
			})}
		</>
	);
}
export function Total({ data, personal_total_count }) {
	const PA = data.length;
	if (PA == 0) {
		return <></>;
	}
	const [AB, H, _2B, _3B, _4B, LH, BB2, BB, HBP, K, score] = calc(data);
	return (
		<tr>
			<td>{personal_total_count}</td>
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
