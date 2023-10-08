import { NextResponse } from 'next/server';
import connect from '../../../../connect.js';
export async function GET(request, { params }) {
	const num = params.num;
	let batting = await connect(`select * from direction where player_number = ?`, [num]);
	return NextResponse.json({ batting });
}
