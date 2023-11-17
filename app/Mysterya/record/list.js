'use client';
import Link from 'next/link';
import useSWR from 'swr';
import styles from './list.module.css';
export default function List() {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/mysterya/record`, fetcher);
	if (isLoading) {
		return <div>로딩중...</div>;
	}
	const data1 = data.data;
	const filtered_ = {};
	data1.forEach((obj) => {
		if (!filtered_[obj.league_index]) {
			filtered_[obj.league_index] = { name: obj.name + '(' + obj.division + ')' + ' / ' + obj.year, game: [] };
		}
		filtered_[obj.league_index].game.push(obj);
	});
	return (
		<>
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
		</>
	);
}
