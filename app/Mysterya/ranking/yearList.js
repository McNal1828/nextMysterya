'use client';
import Link from 'next/link';
import useSWR from 'swr';
export default function YearList() {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/mysterya/ranking/year`, fetcher);
	if (isLoading) {
		return (
			<ul>
				<li>로딩중...</li>
			</ul>
		);
	}

	const data2 = data.data;
	const yearList_ = data2.map((obj) => new Date(obj.date).getFullYear());
	const yearList = [...new Set(yearList_)];
	return (
		<ul>
			{yearList.map((year, index) => {
				return (
					<li key={index}>
						<Link href={`/Mysterya/ranking/year/${year}`}>{year}년</Link>
					</li>
				);
			})}
		</ul>
	);
}
