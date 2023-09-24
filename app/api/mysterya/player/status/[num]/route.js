import { NextResponse } from 'next/server';
import connect from '../../../connect.js';
export async function GET(request, { params }) {
	const num = params.num;
	let player = await connect(`select * from player where number = '${num}'`);
	let summary = await connect(`select * from summary where number = '${num}'`);
	let league_summary = await connect(`select * from league_summary where number = '${num}'`);
	let year_summary = await connect(`select * from year_summary where number = '${num}'`);
	let pa_turn = await connect(`select * from pa_turn where number = '${num}'`);
	let pa_balltotal = await connect(`select * from pa_balltotal where number = '${num}'`);
	let pa_out = await connect(`select * from pa_out where number = '${num}'`);
	let pa_tobase = await connect(`select * from pa_tobase where number = '${num}'`);
	let pa_etc = await connect(`select * from pa_etc where number = '${num}'`);
	let pa_ballcount = await connect(`select * from pa_ballcount where number = '${num}'`);
	let pa_howbase2o3 = await connect(`select * from pa_howbase2o3 where number = '${num}'`);
	let pa_howbase0o1 = await connect(`select * from pa_howbase0o1 where number = '${num}'`);
	let pa_howbase = await connect(`select * from pa_howbase where number = '${num}'`);
	let pa_direction = await connect(`select * from pa_direction where number = '${num}'`);

	return NextResponse.json({
		player,
		summary,
		league_summary,
		year_summary,
		pa_turn,
		pa_balltotal,
		pa_out,
		pa_tobase,
		pa_etc,
		pa_ballcount,
		pa_howbase2o3,
		pa_howbase0o1,
		pa_howbase,
		pa_direction,
	});
}
