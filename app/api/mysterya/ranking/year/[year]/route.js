import { NextResponse } from 'next/server';
import connect from '../../../connect.js';
export async function GET(request, { params }) {
	const year = params.year;
	let data = await connect(`select * from ranking where YEAR(date) = ?`, [year]);
	let friend = await connect(`select * from friend where YEAR(date) = ?`, [year]);
	return NextResponse.json({ data, friend });
}
