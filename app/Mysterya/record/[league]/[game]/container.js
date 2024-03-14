'use client';

import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Showdata from './display';
import styles from './container.module.css';

export default function Container({ league, game }) {
	const [pitches, setpitches] = useState(0);
	const filtered_ = {};
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/mysterya/record/${league}/${game}`, fetcher);
	if (error) {
		return <div>에러발생</div>;
	}
	if (isLoading) {
		return <div>로딩중</div>;
	}
	const data_ = data.data;
	const player = data.player;
	data_.forEach((obj) => {
		if (!filtered_[obj.number_of_pitches]) {
			filtered_[obj.number_of_pitches] = { H: {}, M: [], S: [], C: {}, R: [] };
		}
		filtered_[obj.number_of_pitches].C.base1 = obj.base1;
		filtered_[obj.number_of_pitches].C.base2 = obj.base2;
		filtered_[obj.number_of_pitches].C.base3 = obj.base3;
		filtered_[obj.number_of_pitches].C.strike = obj.strike;
		filtered_[obj.number_of_pitches].C.ball = obj.ball;
		filtered_[obj.number_of_pitches].C.out_count = obj.out_count;
		filtered_[obj.number_of_pitches].C.name = obj.name;
		filtered_[obj.number_of_pitches].C.player_number = obj.player_number;
		filtered_[obj.number_of_pitches].C.call = obj.call;

		if (obj.splayer_number) {
			let se = {};
			se.player_number = obj.splayer_number;
			se.steel = obj.steel;
			se.out = obj.sout;
			se.note = obj.snote;
			se.ball = obj.sball;
			filtered_[obj.number_of_pitches].S.push(se);
		}
		if (obj.mplayer_number) {
			let me = {};
			me.player_number = obj.mplayer_number;
			me.move = obj.move;
			me.why = obj.mwhy;
			me.out = obj.mout;
			me.note = obj.mnote;
			filtered_[obj.number_of_pitches].M.push(me);
		}
		if (obj.rplayer_number) {
			if (filtered_[obj.number_of_pitches].R.findIndex((e) => (e = obj.rplayer_number)) == -1) {
				filtered_[obj.number_of_pitches].R.push(obj.rplayer_number);
			}
		}
		if (obj.final) {
			filtered_[obj.number_of_pitches].H.final = obj.final;
			filtered_[obj.number_of_pitches].H.result = obj.result;
			filtered_[obj.number_of_pitches].H.hit_result = obj.hit_result;
			filtered_[obj.number_of_pitches].H.direction = obj.direction;
			filtered_[obj.number_of_pitches].H.swing = obj.swing;
		}
	});
	const dfitches = Object.keys(filtered_);
	// console.log(filtered_);
	// console.log(filtered_[dfitches[pitches]]);
	return (
		<div style={{ position: 'relative' }}>
			<Showdata data={filtered_[dfitches[pitches]]} player={player} />
			<button
				onClick={(e) => {
					if (pitches != 0) setpitches(pitches - 1);
				}}
				style={{ position: 'absolute', top: '10vw', left: '-1vw' }}
			>
				이전
			</button>
			<button
				onClick={(e) => {
					if (pitches != dfitches.length - 1) setpitches(pitches + 1);
				}}
				style={{ position: 'absolute', top: '10vw', right: '-1vw' }}
			>
				다음
			</button>
		</div>
	);
}

// <div>
// 	{Object.values(filtered_).map((obj, index) => {
// 		let H = <div></div>;
// 		let M = <div></div>;
// 		let S = <div></div>;
// 		let C = <div></div>;
// 		if (Object.keys(obj.H).length != 0) {
// 			H = (
// 				<div>
// 					<p>{obj.H.result}</p>
// 					<p>{obj.H.hit_result}</p>
// 					<p>{obj.H.direction}</p>
// 					<p>{obj.H.swing}</p>
// 				</div>
// 			);
// 		}
// 		if (obj.M.length != 0) {
// 			M = obj.M.map((obj1, index) => {
// 				return (
// 					<div key={index}>
// 						<p>{obj1.player_number}</p>
// 						<p>{obj1.move}</p>
// 						<p>{obj1.why}</p>
// 						<p>{obj1.out}</p>
// 						<p>{obj1.note}</p>
// 					</div>
// 				);
// 			});
// 		}
// 		if (obj.S.length != 0) {
// 			S = obj.S.map((obj1, index) => {
// 				return (
// 					<div key={index}>
// 						<p>{obj1.player_number}</p>
// 						<p>{obj1.steel}</p>
// 						<p>{obj1.out}</p>
// 						<p>{obj1.note}</p>
// 						<p>{obj1.ball}</p>
// 					</div>
// 				);
// 			});
// 		}
// 		if (Object.keys(obj.C).length != 0) {
// 			H = (
// 				<div>
// 					<p>{obj.C.base1}</p>
// 					<p>{obj.C.base2}</p>
// 					<p>{obj.C.base3}</p>
// 					<p>{obj.C.strike}</p>
// 					<p>{obj.C.ball}</p>
// 					<p>{obj.C.out_count}</p>
// 					<p>{obj.C.name}</p>
// 					<p>{obj.C.player_number}</p>
// 					<p>{obj.C.call}</p>
// 				</div>
// 			);
// 		}
// 		console.log(H);
// 		return (
// 			<div key={index}>
// 				{H}
// 				<div>====================</div>
// 				{S}
// 				<div>====================</div>
// 				{M}
// 				<div>====================</div>
// 				{C}
// 				<div>====================</div>
// 			</div>
// 		);
// 	})}
// </div>
