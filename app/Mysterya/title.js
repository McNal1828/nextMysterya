'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Title() {
	const router = useRouter();

	const onSubmit = async (e) => {
		e.preventDefault();
		const url = encodeURI(`/api/mysterya`);
		const data = new FormData();
		data.append('mnum', e.target.mnum.value);
		const res = await fetch(url, { method: 'POST', body: data });
		console.log(res.status);
		if (res.status == 201) {
		}
		switch (res.status) {
			case 201:
				alert('등번호' + e.target.mnum.value + '를 등록하였습니다');
				router.refresh();
				break;
			case 202:
				alert('등번호' + e.target.mnum.value + '는 없는번호입니다');
				break;
			default:
				break;
		}
	};

	return (
		<div className={styles.title}>
			<div className={styles.logo}>
				<Image
					alt='테스트용이미지'
					src='/image/mysterya/MysteryaLogo.png'
					fill
					sizes='300px'
					style={{
						objectFit: 'contain',
					}}
				/>
			</div>
			<form className={styles.form} onSubmit={onSubmit} method='post'>
				<input type='text' placeholder='등번호를 입력해 주세요' name='mnum'></input>
				<input type='submit' value='등록'></input>
			</form>
		</div>
	);
}
