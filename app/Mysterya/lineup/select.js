'use client';
import { use } from 'react';

export default function Select() {
	const data = use(fetching()).data;
	return (
		<select
			onChange={(e) => {
				alert('dd');
			}}
		>
			{data.map((val, index) => (
				<option key={index} value={val.number}>
					{val.name}
				</option>
			))}
		</select>
	);
}
async function fetching(searchParams) {
	let url = 'http://localhost:3000/api/mysterya/player';
	url = encodeURI(url);
	const res = await fetch(url);
	const data = await res.json();
	return data;
}
