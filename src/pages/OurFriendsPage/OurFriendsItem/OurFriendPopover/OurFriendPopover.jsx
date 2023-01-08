import * as React from 'react';
import { styled } from '@mui/material/styles';
import { ContentOfPopover } from '../ContentOfPopover/ContentOfPopover';
import { Button, Popover } from '@mui/material';

// import styles from './OurFriendPopover.module.scss';

const CustomizedBtn = styled(Button)`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	display: flex;
	align-items: center;
	background-color: transparent;
	outline: none;
	box-shadow: none;
	margin: 0;
	padding: 0;
	text-transform: capitalize;
	text-align: start;
	min-width: 0;
	color: #000000;
	:hover {
		color: #f59256;
		background-color: transparent;
		outline: none;
		box-shadow: none;
		margin: 0;
		padding: 0;
	}
`;

export const OurFriendsPopover = ({ workDays }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	// console.log('workDays :>> ', workDays);
	return (
		<div>
			<CustomizedBtn
				aria-describedby={id}
				variant="contained"
				onClick={handleClick}
			>
				Time:
			</CustomizedBtn>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				<ContentOfPopover workDays={workDays} />
			</Popover>
		</div>
	);
};
