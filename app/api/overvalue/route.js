import { getServerSession } from 'next-auth';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { PrismaClient } from '@prisma/client';

/**
 *
 * @param {NextRequest} req
 * @param {URLSearchParams} param1
 * @returns
 */
export async function GET(req, { params }) {
	const prisma = new PrismaClient();
	const session = await getServerSession(authOptions);

	console.log(session);
	let isClan = '';
	await fetch(`https://discord.com/api/v10/guilds/805090802882576415/members/search?limit=1000&query=${session.user.name}`, {
		headers: {
			Authorization: 'Bot MTA3MzU3NDcxMTAyMTI3MzA5OA.GCk2ak.8DssZVPtHNNoq39E7ElZWqcM1rRzgtCt3AJUKA',
		},
		cache: 'no-store',
		method: 'GET',
	})
		.then((res) => res.json())
		.then((json) => (isClan = json));
	const url = new URL(req.url);
	console.log(isClan.length);
	if (isClan.length == 0) {
		const response = NextResponse.redirect(new URL('/overvalue/loginerror', url));
		return response;
	}
	const finduseremail = await prisma.overvalueData.findFirst({
		where: {
			email: session.user.email,
		},
	});
	if (!finduseremail)
		try {
			await prisma.overvalueData.create({
				data: {
					email: session.user.email,
					battletag: null,
				},
			});
		} catch (error) {
			console.log(error);
		}
	const response = NextResponse.redirect(new URL('/overvalue', url));
	return response;
}
