'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './search.module.css';

export default function Search() {
	const [result, setresult] = useState([]);
	return (
		<>
			<div className={styles.searchBox}>
				<input
					className={styles.searchText}
					type='text'
					onChange={(e) => {
						searchmeili(e, setresult);
					}}
				></input>
				<div className={styles.searchList}>
					{result.map((obj, index) => (
						<div key={obj.id}>
							<p>{obj.title}</p>
							<Image
								src={obj.poster}
								width={100}
								height={100}
								alt='포스터'
								loading='lazy'
								placeholder='blur'
								blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII='
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

/**
 *
 * @param {InputEvent} e
 * @param {Function} setresult
 */
function searchmeili(e, setresult) {
	if (e.target.value.length != 0) {
		fetch('/api/meilisearch/search', {
			method: 'POST',
			body: JSON.stringify({
				q: e.target.value,
				index: 'movies',
			}),
		})
			.then((res) => res.json())
			.then((data) => setresult(data));
	} else {
		setresult([]);
	}
}
