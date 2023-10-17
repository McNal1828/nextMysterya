import { NextResponse } from 'next/server';
import connect from '../../../connect.js';
export async function GET(request, { params }) {
	const index = params.index;
	let data = await connect(`select * from ranking where league_index = ?`, [index]);
	let friend = await connect(`select * from friend where league_index = ?`, [index]);
	return NextResponse.json({ data, friend });
}
