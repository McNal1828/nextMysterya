'use client';

import { useSession } from 'next-auth/react';

export default function TestSession() {
	const { data: session, status } = useSession();
	// console.log(status);
	return (
		<div>
			<p>{JSON.stringify(session)}</p>
			<p>{status}</p>
		</div>
	);
}
