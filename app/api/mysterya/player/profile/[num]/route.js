import { NextResponse } from 'next/server';
import connect from '../../../connect.js';
export async function GET(request, { params }) {
	const num = params.num;
	let data = await connect(`select * from player where player_number = ${num}`);
	return NextResponse.json({ data });
}
