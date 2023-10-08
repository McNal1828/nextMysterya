import styles from './page.module.css';
import Stat_mine from './stat_mine';
import Stat_Team from './stat_team';
import Profile from './profile';
import { cookies } from 'next/headers';
import Title from './title';

export default function Page() {
	const cookie = cookies().get('mnum');
	const mnum = cookie ? cookie.value : 0;

	return (
		<>
			<div className={styles.wrapper}>
				<Title />
				<div className={styles.stat}>
					<div className={styles.mine}>
						<div>
							<Stat_mine mnum={mnum} />
						</div>
						<Profile mnum={mnum} />
					</div>
					<div className={styles.team}>
						<Stat_Team />
					</div>
				</div>
			</div>
		</>
	);
}
