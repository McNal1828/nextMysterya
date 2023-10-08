'use client';
import styles from './layout.module.css';

export default function Button() {
	return (
		<button
			className={` ${styles.togglebtn}`}
			onClick={(e) => {
				document.getElementById('nav').classList.toggle(styles.w800);
			}}
		></button>
	);
}
