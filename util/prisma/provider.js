'use client';

import { SessionProvider } from 'next-auth/react';
export function McSessionProviders({ children, session }) {
	return <SessionProvider session={session}>{children}</SessionProvider>;
}
