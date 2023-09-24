import { use } from 'react';
import LeagueSummary from './league_summary';
import Analystic from './analystic';
import styles from './page.module.css';
import Player from './player';
import Summary from './summary';
import YearSummary from './year_summary';
export default function Page({ params, searchParams }) {
	// console.log(params);
	const data = use(fetching(params.num));
	if (!data.player[0]) {
		return (
			<>
				<div className={styles.main}>
					<div className={styles.title}>
						<p>메인페이지에서 등번호를 등록해주세요</p>
					</div>
				</div>
			</>
		);
	}
	return (
		<div className={styles.main}>
			<Player player={data.player} />
			<Summary data={data.summary} />
			<LeagueSummary data={data.league_summary} />
			<YearSummary data={data.year_summary} />
			<Analystic
				pa_turn={data.pa_turn}
				pa_balltotal={data.pa_balltotal}
				pa_out={data.pa_out}
				pa_tobase={data.pa_tobase}
				pa_etc={data.pa_etc}
				pa_ballcount={data.pa_ballcount}
				pa_howbase2o3={data.pa_howbase2o3}
				pa_howbase0o1={data.pa_howbase0o1}
				pa_howbase={data.pa_howbase}
				pa_direction={data.pa_direction}
			/>
		</div>
	);
}

async function fetching(params) {
	let url = `http://localhost:3000/api/mysterya/player/status/${params}`;
	url = encodeURI(url);
	const res = await fetch(url);
	const data = await res.json();
	return data;
}
