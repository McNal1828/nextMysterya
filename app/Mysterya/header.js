import Image from 'next/image';
import Link from 'next/link';
import { cookies } from 'next/headers';
import styles from './layout.module.css';
import Button from './button';

export default function Header() {
	const cookie = cookies().get('mnum');

	const mnum = cookie ? cookie.value : 0;

	return (
		<header className={styles.header}>
			<div className={styles.fit}>
				<div className={styles.logo}>
					<Image src='/image/mysterya/MysteryaLogo.png' width={40} height={40} alt='미스테리야 로고' />
					<Link className={styles.text} href='/Mysterya/'>
						Mysterya
					</Link>
				</div>
				<Button />
			</div>
			<div className={`${styles.nav} ${styles.w800}`} id='nav'>
				<nav className={styles.navbar}>
					<Link className={styles.text} href='/Mysterya/'>
						Home
					</Link>
					<Link className={styles.text} href='/Mysterya/player'>
						선수단
					</Link>
					<Link className={styles.text} href={`/Mysterya/player/${mnum}`}>
						내정보
					</Link>
					{/* <Link className={styles.text} href='/Mysterya/record'>
						경기기록
					</Link> */}
					<Link className={styles.text} href='/Mysterya/ranking'>
						랭킹
					</Link>
					{/* <Link className={`${styles.text} ${styles.w800}`} href='/Mysterya/lineup'>
						라인업
					</Link> */}
				</nav>
				<div className={`${styles.search} ${styles.w800}`}>
					<form action='/Mysterya/player'>
						<select name='cat'>
							<option value='number'>등번호</option>
							<option value='name'>이름</option>
						</select>
						<input type='text' name='val'></input>
						<button type='submit'>
							<svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'>
								<path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' />
							</svg>
						</button>
					</form>
				</div>
			</div>
		</header>
	);
}
