import { NextResponse } from 'next/server';
import connect from '../../../connect.js';
export async function GET(request, { params }) {
	let data = {};
	data = await connect(`select * from player where player_number like '%${params.num}%'`);
	return NextResponse.json({ data });
}
