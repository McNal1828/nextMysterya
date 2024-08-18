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
            <p>AWS, Kubernetes, Nodejs, React, Python</p>
            <div className={styles.links}>
              <a className={`${styles.button} ${styles.buttonGithub}`} href='https://github.com/McNal1828' target='_blank' rel='noopener' role='button'>
                <img className={styles.icon} aria-hidden='true' src='image/icons/github.svg' alt='GitHub Logo' />
                GitHub
              </a>
              <a
                className={`${styles.button} ${styles.buttonNotion}`}
                href='https://mcnal1828.notion.site/O-T-O-IO-6c9fe1ad08d34c5b98f7b4163a7b43cd?pvs=4'
                target='_blank'
                rel='noopener'
                role='button'
              >
                <img className={styles.icon} aria-hidden='true' src='image/icons/notion.svg' alt='Notion Logo' />
                Notion
              </a>
              <h2>SeSAC AWS 부트캠프</h2>
              <a
                className={`${styles.button} ${styles.buttonDefault}`}
                href='https://mcnal1828.notion.site/f61ab31eea814143be92b0c7c9d87837'
                target='_blank'
                rel='noopener'
                role='button'
                style={{ wordWrap: 'break-word' }}
              >
                <img className={styles.icon} aria-hidden='true' src='image/icons/aws.svg' alt='Notion Logo' />
                서버리스 모니터링 시스템 구축
              </a>
              <a
                className={`${styles.button} ${styles.buttonDefault}`}
                href='https://mcnal1828.notion.site/ff43e209382147a8bed1af1a434af957'
                target='_blank'
                rel='noopener'
                role='button'
                style={{ wordWrap: 'break-word' }}
              >
                <img className={styles.icon} aria-hidden='true' src='image/icons/aws.svg' alt='Notion Logo' />
                CI/CD pipeline 구축, AWS location service
              </a>
              <a
                className={`${styles.button} ${styles.buttonDefault}`}
                href='https://mcnal1828.notion.site/495bc276564344d098dc567d83522cc2'
                target='_blank'
                rel='noopener'
                role='button'
                style={{ wordWrap: 'break-word' }}
              >
                <img className={styles.icon} aria-hidden='true' src='image/icons/aws.svg' alt='Notion Logo' />
                AWS IVS를 활용한 실시간 스트리밍 서비스
              </a>
              <h2>개인프로젝트</h2>
              <a className={`${styles.button} ${styles.buttonDefault}`} href='https://mcnal.net/Mysterya' target='_blank' rel='noopener' role='button'>
                <img className={styles.icon} aria-hidden='true' src='image/icons/nextjs.svg' alt='Notion Logo' />
                사회인야구팀 미스테리야
              </a>
            </div>
            <p>
              <span>Contact</span> | eastbrush28@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
