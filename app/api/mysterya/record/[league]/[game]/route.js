import { NextResponse } from 'next/server';
import connect from '../../../connect.js';
export async function GET(request, { params }) {
	const league = params.league;
	const game = params.game;
	let data = await connect(`select * from game_record_sp where league_index = ? and game_index = ?`, [league, game]);
	return NextResponse.json({ data });
}
