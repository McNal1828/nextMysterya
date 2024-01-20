import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';

export async function OvervalueSession() {
	const prisma = new PrismaClient();
	const session = await getServerSession(authOptions);
	const finduseremail = await prisma.overvalueData.findFirst({
		where: {
			email: session?.user.email,
		},
		select: {
			id: false,
			email: true,
			battletag: true,
			expose: true,
		},
	});
	return { session, finduseremail };
}
