import { supabase } from '@/util/supabase/start';
import Supa from './supatest';

export default async function Page() {
	const { data, error } = await supabase.auth.getSession();
	return (
		<div>
			<Supa />
		</div>
	);
}
