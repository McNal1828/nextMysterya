import Image from 'next/image';
import styles from './page.module.css';
import Stat_mine from './stat_mine';
import Stat_Team from './stat_team';
import Profile from './profile';
import { cookies } from 'next/headers';

export default function Page() {
	const cookie = cookies().get('mnum');
	const mnum = cookie ? cookie.value : 0;
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.title}>
					<Image className={styles.logo} alt='테스트용이미지' src='/image/mysterya/MysteryaLogo.png' width={432} height={335} />
					<form className={styles.form} action={'http://localhost:3000/api/mysterya'} method='post'>
						<input type='text' placeholder='등번호를 입력해 주세요' name='mnum'></input>
						<input type='submit' value='등록'></input>
					</form>
				</div>
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
