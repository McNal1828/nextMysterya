'use client';
import Image from 'next/image';
import styles from './position.module.css';
export default function Position({ data }) {
	const position_top = ['67%', '85%', '67%', '48%', '67%', '48%', '25%', '10%', '25%', '85%', '85%'];
	const position_left = ['50%', '50%', '66%', '60%', '34%', '40%', '20%', '50%', '80%', '20%', '80%'];
	const position = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'L', 'R'];
	const base_top = ['67%', '48%', '67%', '86%'];
	const base_left = ['66%', '50%', '34%', '50%'];

	return (
		<div className={`${styles.ground} ${styles.w500n}`}>
			<Image src={'/image/mysterya/field.png'} alt='야구장' fill={true} quality={100} />
			{/* {lineup.map((ele, index) => {
				if (position_[index] != 0) {
					return (
						<div key={index} className={styles.positionPic} style={{ left: left[position_[index] - 1], top: top[position_[index] - 1] }}>
							<Image src={`/image/mysterya/profile/${ele}.jpg`} fill={true} quality={100} alt='선수이미지' />
						</div>
					);
				}
			})} */}
		</div>
	);
}
