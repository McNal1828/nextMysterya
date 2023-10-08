import { NextResponse } from 'next/server';
import connect from '../../../../connect.js';
export async function GET(request, { params }) {
	const num = params.num;
	let tobase = await connect(`select * from tobase where player_number = ?`, [num]);
	return NextResponse.json({ tobase });
}
