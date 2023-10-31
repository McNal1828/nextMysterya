'use client';

import styles from './lineup.module.css';
import { lineupMoveDown, lineupMoveUp, test } from '@/util/mysterya/lineup_reducer';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';

export default function Lineup() {
	const dispatch = useDispatch();
	const lineup = useSelector((state) => state.lineup.lineup);
	const position_ = useSelector((state) => state.lineup.position);
	const fetcher = (...args) => fetch(...args, { cache: 'no-store' }).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`/api/mysterya/player`, fetcher);

	if (isLoading) {
		return <div>로딩중</div>;
	}
	if (error) {
		return <div>로딩실패</div>;
	}
	const data_ = data.data;
	const position = ['투수', '포수', '1루수', '2루수', '3루수', '유격수', '좌익수', '중견수', '우익수'];

	return (
		<div>
			<ul>
				{lineup.map((ele, index) => (
					<li key={index} className={styles.lineuplist}>
						<p className={styles.index}>{index + 1}번</p>
						<Image src={`/image/mysterya/profile/${ele}.jpg`} width={60} height={60} alt='프로필이미지' />

						<select
							className={styles.selectbox}
							onChange={(e) => {
								const value = e.target.value;
								dispatch({ type: 'lineup/lineupSelect', index: index, pnumber: Number(value) });
							}}
						>
							<option value={0} selected hidden>
								==선수선택==
							</option>
							{data_.map((obj, index2) => (
								<>
									<option value={obj.player_number} key={index2} selected={ele == obj.player_number ? 'selected' : ''}>
										No.{obj.player_number} {obj.name}
									</option>
								</>
							))}
						</select>
						<select
							className={styles.selectbox}
							onChange={(e) => {
								const value = e.target.value;
								dispatch({ type: 'lineup/positionSelect', index: index, position: Number(value) + 1 });
							}}
						>
							<option value={0} selected hidden>
								=수비=
							</option>
							{position.map((item, index3) => (
								<>
									<option value={index3} key={index3} selected={position_[index] == index3 + 1 ? 'selected' : ''}>
										{item}
									</option>
								</>
							))}
						</select>
						<button
							onClick={(e) => {
								dispatch(lineupMoveUp(index));
							}}
							className={styles.updownbtn}
						>
							<svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 384 512'>
								<path d='M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z' />
							</svg>
						</button>
						<button
							onClick={(e) => {
								dispatch(lineupMoveDown(index));
							}}
							className={styles.updownbtn}
						>
							<svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 384 512'>
								<path d='M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z' />
							</svg>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
