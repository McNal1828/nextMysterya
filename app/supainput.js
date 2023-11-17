'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import { useRouter } from 'next/navigation';

export default function SupaInput() {
	const supabase = createClientComponentClient();
	const router = useRouter();
	/**
	 *
	 * @param {Event} e
	 */
	const supainput = async (e) => {
		e.preventDefault();
		const content = e.target.content.value;
		try {
			await supabase.from('test').insert({ content: content });
			router.refresh();
			e.target.content.value = null;
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<form onSubmit={supainput}>
				<input type='text' name='content' placeholder='입력값을 입력하세요'></input>
				<button type='submit'>입력하기</button>
			</form>
		</div>
	);
}
