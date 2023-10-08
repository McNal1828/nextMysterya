import { NextResponse } from 'next/server';
import connect from '../../../../connect.js';
export async function GET(request, { params }) {
	const num = params.num;
	let runner = await connect(`select * from runner where player_number = ?`, [num]);
	return NextResponse.json({ runner });
}
