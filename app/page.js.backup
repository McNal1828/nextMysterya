// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import styles from './page.module.css';
import { cookies } from 'next/headers';
import Image from 'next/image';
import LoginBtn from './loginBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import TestSession from './testsession';
import { getSession } from 'next-auth/react';

export default async function Page() {
	const ss = await getServerSession(authOptions);
	return (
		<div className={styles.text}>
			<h2>app/page.js</h2>
			<LoginBtn />
			<TestSession />
			<p></p>
		</div>
	);
}
