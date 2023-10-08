import { NextResponse } from 'next/server';
import connect from '../../../connect.js';
export async function GET(request, { params }) {
	const num = params.num;
	let player = await connect(`select * from person where player_number = ? `, [num]);
	let recent = await connect(`SELECT DISTINCT p.recent FROM person p  WHERE player_number = ? LIMIT 5`, [num]);
	let count = await connect(`SELECT DISTINCT p1.league_index, p1.game_index FROM person p1 WHERE p1.player_number = ?`, [num]);
	let year = await connect(`SELECT DISTINCT p1.year,p1.league_index, p1.game_index   FROM person p1 WHERE p1.player_number = ?`, [num]);
	return NextResponse.json({ player, recent, count, year });
}
