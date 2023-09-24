import Image from 'next/image';
import Link from 'next/link';
import { cookies } from 'next/headers';
import styles from './layout.module.css';

export default function Header() {
	const cookie = cookies().get('mnum');

	const mnum = cookie ? cookie.value : 0;

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Image src='/image/mysterya/MysteryaLogo.png' width={50} height={35} alt='미스테리야 로고' />
				<p className={styles.text}>Mysterya</p>
			</div>
			<nav className={styles.navbar}>
				<Link className={`${styles.text}`} href='/Mysterya/'>
					Home
				</Link>
				<Link className={styles.text} href='/Mysterya/player'>
					선수단
				</Link>
				<Link className={styles.text} href={`/Mysterya/player/${mnum}`}>
					내정보
				</Link>
				<Link className={styles.text} href='/Mysterya/ranking'>
					랭킹
				</Link>
				{/* <ul>
			기타
			<li>
				<Link href='/Mysterya/etc'>기타1</Link>
			</li>
			<li>
				<Link href='/Mysterya/etc'>기타2</Link>
			</li>
			<li>
				<Link href='/Mysterya/etc'>기타3</Link>
			</li>
		</ul> */}
			</nav>
			<div className={styles.search}>
				<form>
					<select name='cat'>
						<option value='number'>등번호</option>
						<option value='name'>이름</option>
					</select>
					<input type='text' name='val'></input>
					<input type='submit' value='🔍'></input>
				</form>
			</div>
		</header>
	);
}
function tt(e) {
	alert('번호가없어');
}
