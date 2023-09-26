import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
/**
 *
 * @param {NextRequest} req
 */
export async function POST(req, { params }) {
	const form = await req.formData();
	const referer = headers().get('referer');
	const res = NextResponse.redirect(referer);
	const url = encodeURI(`http://localhost:3000/api/mysterya/player/profile/${form.get('mnum')}`);
	const resapi = await fetch(url);
	const data = await resapi.json();
	if (data.data.length != 0) res.cookies.set('mnum', form.get('mnum'));
	return res;
}
