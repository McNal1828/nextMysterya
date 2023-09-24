import Image from 'next/image';
import styles from './page.module.css';
export default function Page() {
	return (
		<div className={styles.main}>
			<Image className={styles.logo} alt='테스트용이미지' src='/image/mysterya/MysteryaLogo.png' width={520} height={390} />
			<form className={styles.form} action={'http://localhost:3000/api/mysterya'} method='post'>
				<input type='text' placeholder='등번호를 입력해 주세요' name='mnum'></input>
				<input type='submit' value='등록'></input>
			</form>
		</div>
	);
}
