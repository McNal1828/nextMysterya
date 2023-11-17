import { supabase } from '@/util/supabase/start';

export default async function Supa() {
	let { data: test, error } = await supabase.from('test').select('*');
	console.log(test);
	return <div>보기용</div>;
}
