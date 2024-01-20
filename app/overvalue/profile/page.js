import { OvervalueSession } from '@/util/overvalue/session';
import Image from 'next/image';

export default async function Page() {
	const { session, finduseremail } = await OvervalueSession();
	if (!session) {
		return (
			<div>
				<p>프로필</p>
				<hr />
				로그인해주세요
			</div>
		);
	}
	return (
		<div>
			<p>프로필</p>
			<hr />
			<Image src={session.user.image} alt='디스코드 프로필 이미지' width={200} height={200} />
		</div>
	);
}
