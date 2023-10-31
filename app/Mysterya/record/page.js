import Link from 'next/link';
import styles from './page.module.css';

export default async function Page() {
	let url = process.env.BASE_URL + encodeURI(`/api/mysterya/record`);
	const res = await fetch(url, { cache: 'no-store' });
	const data_ = await res.json();
	/** @type {[]} */
	const data = data_.data;
	/** @type {{} } */
	const filtered_ = {};
	data.forEach((obj) => {
		if (!filtered_[obj.league_index]) {
			filtered_[obj.league_index] = { name: obj.name + '(' + obj.division + ')' + ' / ' + obj.year, game: [] };
		}
		filtered_[obj.league_index].game.push(obj);
	});
	return (
		<div className={styles.main}>
			<p className={styles.title}>경기목록</p>
			<hr />
			{Object.values(filtered_)
				.reverse()
				.map((obj, index) => (
					<details className={styles.league_details} key={index}>
						<summary className={styles.league_title}>{obj.name}</summary>
						<div>
							<ul className={styles.game_list}>
								{obj.game.map((ele, index) => (
									<li key={index}>
										<Link className={styles.link} href={`/Mysterya/record/${ele.league_index}/${ele.game_index}`}>
											{ele.opponent} 전 ({ele.game_score} {ele.win ? '승' : '패'})
										</Link>
									</li>
								))}
							</ul>
						</div>
					</details>
				))}
		</div>
	);
}
