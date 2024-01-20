'use client';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
	useEffect(() => {
		alert('유저가아닙니다');
		signOut({ callbackUrl: 'http://localhost:3000/overvalue' });
	}, []);
	return <div>에러페이지</div>;
}
