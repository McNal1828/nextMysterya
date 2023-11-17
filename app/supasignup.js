'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Supasignup() {
	const supabase = createClientComponentClient();
	const router = useRouter();
	/**
	 *
	 * @param {Event} e
	 */
	const supasignup = async (e) => {
		e.preventDefault();
		try {
			await supabase.auth.signUp({
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
	// if ((await supabase.auth.getUser()).data.user) {
	// 	setname((await supabase.auth.getUser()).data.user.email);
	// }

	return (
		<div>
			<div>
				<form onSubmit={supasignup}>
					<input type='text' name='email' placeholder='이메일을 입력해주세요'></input>
					<input type='password' name='password' placeholder='비밀번호를 입력해주세요'></input>
					<button type='submit'>회원가입</button>
				</form>
			</div>
		</div>
	);
}
