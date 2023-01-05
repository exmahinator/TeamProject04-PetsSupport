import { Button } from 'components/Reuse/Button/Button';

import style from './Buttons.module.scss';

export const Buttons = ({
	onTogglePage,
	isFirstPage,
	onSubmit,
	onCloseModal,
}) => {
	return (
		<div className={style.wrapper}>
			{isFirstPage && (
				<Button
					text={'cancel'}
					colorType={'white'}
					type={'button'}
					onClickFunc={onCloseModal}
				></Button>
			)}
			<Button
				text={isFirstPage ? 'next' : 'back'}
				colorType="orange"
				type="button"
				onClickFunc={onTogglePage}
			></Button>
			{!isFirstPage && (
				<button type="submit" onSubmit={onSubmit} className={style.submitBtn}>
					Done
				</button>
			)}
		</div>
	);
};
