import styles from './layout.module.css';
import Header from './header';
import Footer from './footer';

export const metadata = {
	title: '미스테리야 야구팀',
	description: '사회인야구팀 미스테리야 홈페이지입니다',
};

export default function Layout({ children }) {
	return (
		<html lang='ko'>
			<body>
				<Header />
				<main className={styles.main}>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
