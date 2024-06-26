'use client';
import Image from 'next/image';
import styles from './position.module.css';
import { useSelector } from 'react-redux';
export default function Position({ data }) {
	const top = ['67%', '85%', '67%', '48%', '67%', '48%', '25%', '10%', '25%', '85%', '85%'];
	const left = ['50%', '50%', '66%', '60%', '34%', '40%', '20%', '50%', '80%', '20%', '80%'];
	const position = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'L', 'R'];
	const lineup = useSelector((state) => state.lineup.lineup);
	const position_ = useSelector((state) => state.lineup.position);

	return (
		<div className={`${styles.ground} ${styles.w1400}`}>
			<Image src={'/image/mysterya/field.png'} alt='야구장' fill={true} quality={100} />
			{lineup.map((ele, index) => {
				if (position_[index] != 0) {
					return (
						<div key={index} className={styles.positionPic} style={{ left: left[position_[index] - 1], top: top[position_[index] - 1] }}>
							<Image src={`/image/mysterya/profile/${ele}.jpg`} fill={true} quality={100} alt='선수이미지' />
						</div>
					);
				}
			})}
		</div>
	);
}
