'use client';
import { useSession } from 'next-auth/react';
export default function TestSession() {
	const { data: session, status } = useSession();
	console.log(session);
	console.log(status);
	return <div>dd</div>;
}
