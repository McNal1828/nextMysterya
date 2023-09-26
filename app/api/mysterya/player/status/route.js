import { NextResponse } from 'next/server';
import connect from '../../connect.js';
export async function GET(request, { params }) {
	let player = await connect(`select * from person`);

	return NextResponse.json(player);
}
