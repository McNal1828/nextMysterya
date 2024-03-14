import styles from './layout.module.css';
import Header from './header';
import Footer from './footer';

export const metadata = {
	title: 'Vtuber 찾아보기',
	description: 'Vtuber 및 클립퍼들을 찾아볼 수 있습니다.',
};

export default function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
