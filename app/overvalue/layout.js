import Footer from './footer';
import Header from './header';
import styles from './layout.module.css';

export const metadata = {
	title: 'Overvalue',
	description: '오버워치 클랜 OverValue입니다',
};

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
