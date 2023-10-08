import styles from './page.module.css';
import Player from './player';
import PlayerRecent from './player_recent';
import Window from './window';
export default async function Page({ params, searchParams }) {
	if (params.num == 0) {
		return (
			<>
				<div className={styles.main}>
					<div className={styles.title}>
						<p>메인페이지에서 등번호를 입력해주세요</p>
					</div>
				</div>
			</>
		);
	}

	const profile_url = process.env.BASE_URL + encodeURI(`/api/mysterya/player/profile/${params.num}`);
	const profile_res = await fetch(profile_url, { cache: 'no-store' });
	const profile_data_ = await profile_res.json();
	const profile_data = profile_data_.data;

	if (profile_data.length == 0) {
		return (
			<>
				<div className={styles.main}>
					<div className={styles.title}>
						<p>없는 선수입니다.</p>
					</div>
				</div>
			</>
		);
	}
	return (
		<div className={styles.main}>
			<Player player={profile_data} />
			<PlayerRecent player_number={params.num} />
			<Window player_number={params.num} />
		</div>
	);
}

// async function fetching(params) {
// 	let url = `http://localhost:3000/api/mysterya/player/status/${params}`;
// 	url = encodeURI(url);
// 	const res = await fetch(url);
// 	const data = await res.json();
// 	return data;
// 	//  <Player player={data.player} />
// 	// 		<Summary data={data.summary} />
// 	// 		<LeagueSummary data={data.league_summary} />
// 	// 		<YearSummary data={data.year_summary} />
// 	// 		<Analystic
// 	// 			pa_turn={data.pa_turn}
// 	// 			pa_balltotal={data.pa_balltotal}
// 	// 			pa_out={data.pa_out}
// 	// 			pa_tobase={data.pa_tobase}
// 	// 			pa_etc={data.pa_etc}
// 	// 			pa_ballcount={data.pa_ballcount}
// 	// 			pa_howbase2o3={data.pa_howbase2o3}
// 	// 			pa_howbase0o1={data.pa_howbase0o1}
// 	// 			pa_howbase={data.pa_howbase}
// 	// 			pa_direction={data.pa_direction}
// 	// 		/>
// }
