'use client';
import { useState } from 'react';

export default function Page() {
	const [test, settest] = useState(0);
	return (
		<>
			<h1>app/state/page.js</h1>
			<h2>{test}</h2>
			<button
				onClick={(e) => {
					settest(test + 1);
				}}
			>
				+1
			</button>
		</>
	);
}
