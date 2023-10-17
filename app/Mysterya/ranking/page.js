import LeagueList from './leagueList';
import styles from './page.module.css';
import YearList from './yearList';

export default async function Page({ searchParams }) {
	return (
		<div className={styles.main}>
			<p className={styles.title}>랭킹</p>
			<hr />
			<div className={styles.submain}>
				<p className={styles.subtitle}>리그별</p>
				<hr />
				<LeagueList />
			</div>
			<div className={styles.submain}>
				<p className={styles.subtitle}>연도별</p>
				<hr />
				<YearList />
			</div>
		</div>
	);
}
