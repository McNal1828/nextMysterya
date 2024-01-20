'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './header.module.css';
export default function HeaderLogo() {
	useEffect(() => {
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);
	const logodiv = useRef(null);
	/**
	 *
	 * @param {Event} e
	 */
	const onScroll = (e) => {
		const { scrollY } = window;
		if (scrollY == 0) {
			logodiv.current.classList.remove(styles.active);
			logodiv.current.parentElement.classList.remove(styles.headeractive);
		}
		if (scrollY != 0) {
			logodiv.current.classList.add(styles.active);
			logodiv.current.parentElement.classList.add(styles.headeractive);
		}
	};
	return (
		<div className={styles.inactive} ref={logodiv}>
			<Link href={'/overvalue'}>
				<Image src={'/image/overvalue/ovimg.png'} alt='오버밸류 이미지' fill />
			</Link>
		</div>
	);
}
