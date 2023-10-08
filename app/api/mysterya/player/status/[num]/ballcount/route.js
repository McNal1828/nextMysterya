import { NextResponse } from 'next/server';
import connect from '../../../../connect.js';
export async function GET(request, { params }) {
	const num = params.num;
	let ballcount = await connect(`select * from ballcount where player_number = ?`, [num]);
	return NextResponse.json({ ballcount });
}
