'use client';
import Link from 'next/link';
import useSWR from 'swr';
export default function LeagueList() {
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/mysterya/ranking/league`, fetcher);
	if (isLoading) {
		return (
			<ul>
				<li>로딩중...</li>
			</ul>
		);
	}
	const data1 = data.data;
	return (
		<ul>
			{data1.map((obj, index) => {
				return (
					<li key={index}>
						<Link href={`/Mysterya/ranking/league/${obj.league_index}`}>
							{obj.name} {obj.division}({obj.year})
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
