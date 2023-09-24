import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';

export default function Footer() {
	return (
		<footer className={`${styles.footer} ${styles.text} `}>
			<div className={`${styles.large_half} ${styles.mid_full} ${styles.box}`}>
				<h5>2023년 미스테리야</h5>
				<ul>
					<li>감독 : 박재현</li>
					<li>주장 : 이창현</li>
					<li>총무 : 홍성운</li>
					<li>사이트 관리자 : 신동한</li>
				</ul>
			</div>
			<div className={`${styles.large_quad} ${styles.mid_half} ${styles.box}`}>
				<h5>카페</h5>
				<ul>
					<li>
						<a href='https://cafe.daum.net/NO1B.CLUBMYSTERY'>다음카페</a>
					</li>
				</ul>
			</div>
			<div className={`${styles.large_quad} ${styles.mid_half} ${styles.box}`}>
				<h5>유튜브</h5>
				<ul>
					<li>
						<a href='https://cafe.daum.net/NO1B.CLUBMYSTERY'>00유튜브</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
