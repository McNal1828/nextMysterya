import { NextResponse } from 'next/server';
import connect from '../../../connect.js';
export async function GET(request, { params }) {
	const name = params.name;
	let data = await connect(`select * from player where name like '%${name}%'`);
	return NextResponse.json({ data });
}
