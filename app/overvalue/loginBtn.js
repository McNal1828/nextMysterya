'use client';
import { signIn } from 'next-auth/react';
import styles from './header.module.css';

export default function LoginBtn() {
	return (
		<div
			onClick={(e) => {
				signIn('discord', { callbackUrl: 'http://localhost:3000/api/overvalue' });
			}}
			className={styles.btn}
		>
			로그인
		</div>
	);
}
