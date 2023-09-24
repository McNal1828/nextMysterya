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
	res.cookies.set('mnum', form.get('mnum'));
	return res;
}
