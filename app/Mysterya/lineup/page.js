import styles from './page.module.css';
import Lineup from './lineup';
import Position from './position';

export default function Page() {
	return (
		<div className={styles.main} id='canvas'>
			<Position />
			<Lineup />
		</div>
	);
}
