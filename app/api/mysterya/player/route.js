import { NextResponse } from 'next/server';
import connect from '../connect.js';
export async function GET(request, { params }) {
	let data = await connect(`select * from player`);
	return NextResponse.json({ data });
}
