'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SupaLogin() {
	const supabase = createClientComponentClient();
	const router = useRouter();
	/**
	 *
	 * @param {Event} e
	 */
	const supalogin = async (e) => {
		e.preventDefault();
		try {
			await supabase.auth.signInWithPassword({
				email: e.target.email.value,
				password: e.target.password.value,
				options: {
					emailRedirectTo: `${location.origin}/api/supabase/auth`,
				},
			});
			router.refresh();
		} catch (error) {
			console.log(error);
		}
	};
	const supalogout = async () => {
		let { error } = await supabase.auth.signOut();
		console.log(error);
		router.refresh();
	};
	// if ((await supabase.auth.getUser()).data.user) {
	// 	setname((await supabase.auth.getUser()).data.user.email);
	// }

	return (
		<div>
			<div>
				<form onSubmit={supalogin}>
					<input type='text' name='email' placeholder='이메일을 입력해주세요'></input>
					<input type='password' name='password' placeholder='비밀번호를 입력해주세요'></input>
					<button type='submit'>로그인</button>
				</form>
				<button onClick={supalogout}>로그아웃</button>
			</div>
		</div>
	);
}
