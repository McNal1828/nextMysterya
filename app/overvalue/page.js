import Link from 'next/link';
import styles from './page.module.css';
import { Song_Myung } from 'next/font/google';
import Ovcup from './ovcup';

const song_myung = Song_Myung({ subsets: ['latin'], weight: ['400'] });
export default function Page() {
	const data1 = [
		{ year: 2023, map: 'Antarctic_Peninsula.jpg', team1: '1팀', team2: '2팀', score: '승 vs 패' },
		{ year: 2023, map: 'Ayutthaya.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Black-forest.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Blizzard-world.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Busan.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Busan_Stadium.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Castillo.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Chateau-guillard.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Dorado.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Ecopoint-antarctica.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Eichenwalde.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Esperanca.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Estádio_das_Rãs.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
	];
	const data2 = [
		{ year: 2023, map: 'Antarctic_Peninsula.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Ayutthaya.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Black-forest.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Blizzard-world.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Busan.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Busan_Stadium.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Castillo.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Chateau-guillard.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Dorado.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Ecopoint-antarctica.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Eichenwalde.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Esperanca.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
		{ year: 2023, map: 'Estádio_das_Rãs.jpg', team1: '1팀', team2: '2팀', score: '1 vs 3' },
	];
	return (
		<div className={styles.main}>
			<div className={styles.hello}>
				<div className={styles.hellotext}>
					<p className={song_myung.className}>오버워치 클랜 OVERVALUE에 오신것을 환영합니다</p>
					<div>
						<Link href={'https://open.kakao.com/o/gsLDva9c'}>
							<svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 256 256'>
								<path
									fill='#FFE812'
									d='M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z'
								/>
								<path d='M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z' />
								<path
									fill='#FFE812'
									d='M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z'
								/>
							</svg>
						</Link>
						<Link href={'https://open.kakao.com/o/gsLDva9c'}>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 127.14 96.36' width='35' height='35'>
								<g id='图层_2' data-name='图层 2'>
									<g id='Discord_Logos' data-name='Discord Logos'>
										<g id='Discord_Logo_-_Large_-_White' data-name='Discord Logo - Large - White'>
											<path
												fill='#5865f2'
												d='M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z'
											/>
										</g>
									</g>
								</g>
							</svg>
						</Link>
					</div>
				</div>
				<div className={styles.hellologo}></div>
				<video className={styles.hellobackground} autoPlay loop playsInline muted>
					<source type='video/webm'></source>
					<source src='/image/overvalue/testmain.mp4' type='video/mp4'></source>
				</video>
			</div>
			<Ovcup name='오밸컵' data={data1} background='bg_blue' />
			<Ovcup name='내전' data={data2} background='bg_green' />
		</div>
	);
}
