import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { PrismaClient } from '@prisma/client';
import LoginBtn from './loginBtn';
import LogoutBtn from './logoutBtn';
import HeaderLogo from './headerLogo';

export default async function Header() {
	const prisma = new PrismaClient();
	const session = await getServerSession(authOptions);
	const finduseremail = await prisma.overvalueData.findFirst({
		where: {
			email: session?.user.email,
		},
	});
	return (
		<header className={styles.header}>
			<HeaderLogo />
			<nav className={styles.navbar}>
				<div className={styles.navbtn}>nav btn</div>
				<ul>
					<li>
						<Link href={'/overvalue'}>home</Link>
					</li>
					<li>
						<Link href={'/overvalue/ovcup'}>오밸컵</Link>
					</li>
					<li>
						<Link href={'/overvalue/civil'}>내전</Link>
					</li>
					<li>
						<Link href={'/overvalue/memory'}>우리의 순간</Link>
					</li>

					{!session ? (
						<li>
							<LoginBtn />
						</li>
					) : (
						<>
							<li>
								<Link href={'/overvalue/profile'}>프로필</Link>
							</li>
							<li>
								<LogoutBtn />
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
}
