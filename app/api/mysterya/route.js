import { getServerSession } from 'next-auth';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { PrismaClient } from '@prisma/client';

export async function POST(req, { params }) {
	const form = await req.formData();
	// const referer = headers().get('referer');
	const url = process.env.BASE_URL + encodeURI(`/api/mysterya/player/profile/${form.get('mnum')}`);
	const resapi = await fetch(url);
	const data = await resapi.json();
	if (data.data.length != 0) {
		console.log(data.data.length);
		const response = NextResponse.json({ message: '완료' }, { status: 201 });
		response.cookies.set('mnum', form.get('mnum'));
		return response;
	} else {
		const response = NextResponse.json({ message: '없는번호' }, { status: 202 });
		return response;
	}
}
export async function GET(req, { params }) {
	const prisma = new PrismaClient();
	const session = await getServerSession(authOptions);

	console.log(session);
	// const finduseremail = await prisma.mysteryaData.findFirst({
	// 	where: {
	// 		email: session.user.email,
	// 	},
	// });
	// if (!finduseremail)
	// 	try {
	// 		await prisma.mysteryaData.create({
	// 			data: {
	// 				email: user.email,
	// 				backnumber: null,
	// 			},
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	const response = NextResponse.json({ message: 'test' }, { status: 200 });
	return response;
}
