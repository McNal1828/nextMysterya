// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import styles from './page.module.css';
import SupaLogin from './supalogin';
import { cookies } from 'next/headers';
import SupaInput from './supainput';
import Image from 'next/image';
import LoginBtn from './loginBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import TestSession from './testsession';

// const supabase = createServerComponentClient({ cookies });
export default async function Page() {
	// const {
	// 	data: { user },
	// } = await supabase.auth.getUser();
	// let { data: test, error } = await supabase.from('test').select('*');
	// const testdata = test;
	// const session = await getServerSession(authOptions);
	// console.log(session);
	return (
		<div className={styles.text}>
			<h2>app/page.js</h2>
			{/* <SupaLogin /> */}
			{/* <SupaInput /> */}
			{/* <div>{user ? testdata.map((obj, index) => <p key={index}>{obj.content}</p>) : '로그인하세요'}</div> */}
			{/* <div>{user?.id}</div> */}
			{/* <Imagetest /> */}
			<LoginBtn />
			<TestSession />
			<p></p>
		</div>
	);
}

async function Imagetest() {
	// const { data, error } = await supabase.storage.from('mysterya').download('fuck.jpg');
	// const publicUrl = supabase.storage.from('bucket').getPublicUrl('filePath.jpg')
	const { data, error } = await supabase.storage.from('mysterya').createSignedUrl('fuck.jpg', 10, { download: true, transform: { quality: 100 } });

	// if (data) {
	// 	console.log(data.signedUrl);
	// }

	// const { data, error } = await supabase.storage.from('mysterya').list();

	// const { data, error } = await supabase.storage.listBuckets();
	// console.log(data);
	// console.log(error);
	return <Image src={data?.signedUrl} alt='테스팅' width={1000} height={1000} />;
	// return <div>tt</div>;
}
