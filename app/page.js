import Image from 'next/image';
import styles from './page.module.css';
export default async function Page() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.column}>
						<Image src='/image/myimg.jpg' className={styles.avatar} alt='내 이미지' width={128} height={128} />
						<h1 role='heading'>DongHan, Shin</h1>
						<p>환경에 맞는 최적의 아키텍처를 설계하고 운영하는 SA가 되겠습니다</p>
						<div className={styles.links}>
							<a
								className={`${styles.button} ${styles.buttonGithub}`}
								href='https://github.com/McNal1828'
								target='_blank'
								rel='noopener'
								role='button'
							>
								<img className={styles.icon} aria-hidden='true' src='image/icons/github.svg' alt='GitHub Logo' />
								GitHub
							</a>
							<a
								className={`${styles.button} ${styles.buttonNotion}`}
								href='https://mcnal1828.notion.site/O-T-O-IO-c249673f8d674d4ab1579fb3c2e6ec09?pvs=4'
								target='_blank'
								rel='noopener'
								role='button'
							>
								<img className={styles.icon} aria-hidden='true' src='image/icons/notion.svg' alt='Notion Logo' />
								Notion
							</a>
							<h2>청년취업사관학교</h2>
							<a
								className={`${styles.button} ${styles.buttonDefault}`}
								href='https://sesac2.mcnal.net/'
								target='_blank'
								rel='noopener'
								role='button'
							>
								<img className={styles.icon} aria-hidden='true' src='image/icons/aws.svg' alt='Notion Logo' />
								상권분석
							</a>
							<a className={`${styles.button} ${styles.buttonDefault}`} href='#' target='_blank' rel='noopener' role='button'>
								<img className={styles.icon} aria-hidden='true' src='image/icons/aws.svg' alt='Notion Logo' />
								슈슈슉
							</a>
							<h2>개인프로젝트</h2>
							<a
								className={`${styles.button} ${styles.buttonDefault}`}
								href='https://mcnal.net/Mysterya'
								target='_blank'
								rel='noopener'
								role='button'
							>
								<img className={styles.icon} aria-hidden='true' src='image/icons/nextjs.svg' alt='Notion Logo' />
								사회인야구팀 미스테리야
							</a>
						</div>
						<p>
							<span>Contact</span> | lpmkonji977@gmail.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
