import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const cookieStore = cookies();
const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
const requestURL = new URL(req.url);
/**
 * signInWithPassword(,,{emailRedirectTo:~~}) 로 올때 GET으로 옴
 * @param {NextRequest} req
 */
export async function GET(req, { params }) {
	const code = requestURL.searchParams.get('code');
	if (code) {
		await supabase.auth.exchangeCodeForSession(code);
	}
	return NextResponse.redirect(new URL('/', req.url), { status: 302 });
}
/**
 * 필요한지는 잘 모르겠다. 그냥 signOut()바로하면되는데
 * @param {NextRequest} req
 */
export async function POST(req, { params }) {
	const {
		data: { session },
	} = await supabase.auth.getSession();
	if (session) {
		await supabase.auth.signOut();
	}
	return NextResponse.redirect(new URL('/', req.url), { status: 302 });
}
// export async function PATCH(req, { params }) {
// 	const cookieStore = cookies();
// 	const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
// 	const {
// 		data: { session },
// 	} = await supabase.auth.getSession();
// 	if (session) {
// 		await supabase.auth.signOut();
// 		return NextResponse.json({ content: `${form.get('email')} 로그아웃 성공` }, { status: 200 });
// 	}
// 	return NextResponse.json({ content: `로그인 상태가 아님` }, { status: 400 });
// }
