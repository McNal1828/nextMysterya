'use client';
import { signIn, signOut } from 'next-auth/react';

export default function LoginBtn() {
	return (
		<div>
			<button
				onClick={(e) => {
					signIn('discord', { callbackUrl: 'http://localhost:3000/api/mysterya' });
				}}
			>
				로그인
			</button>
			<button
				onClick={(e) => {
					signOut();
				}}
			>
				로그아웃
			</button>
		</div>
	);
}
