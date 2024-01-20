'use client';

import { getSession, useSession } from 'next-auth/react';

export default function TestSession() {
	const { data: session, status } = useSession();
	return (
		<div>
			<p>{JSON.stringify(session)}</p>
			<p>{status}</p>
		</div>
	);
}
