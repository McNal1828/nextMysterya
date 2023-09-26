import { NextResponse } from 'next/server';
import connect from '../../../connect.js';
export async function GET(request, { params }) {
	const num = params.num;
	let player = await connect(`select * from person where player_number = ? `, [num]);

	return NextResponse.json(player);
}
