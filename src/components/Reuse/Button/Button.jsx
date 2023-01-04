import React from 'react';

import style from './Button.module.scss';

export const Button = ({
	text,
	colorType,
	type = 'button',
	onClickFunc = () => {
		console.log('Your func!');
	},
}) => {
	switch (colorType) {
		case 'orange':
			return (
				<button
					type={type}
					onClick={() => onClickFunc()}
					className={style.orange}
				>
					{text}
				</button>
			);
		case 'white':
			return (
				<button
					type={type}
					onClick={() => onClickFunc()}
					className={style.white}
				>
					{text}
				</button>
			);
		case 'transparent':
			return (
				<button
					type={type}
					onClick={() => onClickFunc()}
					className={style.transparent}
				>
					{text}
				</button>
			);
		case 'disabled':
			return (
				<button type={type} disabled={true} className={style.disabled}>
					{text}
				</button>
			);
		default:
			return;
	}
};

// !=============EXEMPLES==============

//  <Button type={"type"} text={'TEST'} colorType={'white'} onClickFunc={yourFunction} />
//  <Button type={"type"} text={'TEST1'} colorType={'orange'} onClickFunc={yourFunction} />
//  <Button type={"type"} text={'TEST2'} colorType={'transparent'} onClickFunc={yourFunction} />
//  <Button type={"type"} text={'TEST3'} colorType={'disabled'} onClickFunc={yourFunction} />
