import { NextResponse } from 'next/server';
import connect from '../../../../connect.js';
export async function GET(request, { params }) {
	const num = params.num;
	let out = await connect(`select * from pout where player_number = ?`, [num]);
	return NextResponse.json({ out });
}
