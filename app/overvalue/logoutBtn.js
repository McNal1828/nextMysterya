'use client';
import { signOut } from 'next-auth/react';
import styles from './header.module.css';

export default function LogoutBtn() {
	return (
		<div
			onClick={(e) => {
				signOut();
			}}
			className={styles.btn}
		>
			로그아웃
		</div>
	);
}
