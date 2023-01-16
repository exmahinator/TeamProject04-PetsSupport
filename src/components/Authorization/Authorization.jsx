import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { Subtitle } from 'components/Reuse/Title/Subtitle';
import { getAuthFormContent } from 'shared/functions/getAuthFormContent';

import style from './Authorization.module.scss';

export const Authorization = ({ type }) => {
	const isPortrait = useMediaQuery({ orientation: 'portrait' });
	const mobileLandscape = useMediaQuery({ maxHeight: 550 });
	const isTablet = useMediaQuery({ maxWidth: 550 });

	const isMobileLandscape = !isPortrait && mobileLandscape && !isTablet;

	const content = getAuthFormContent(type);

	return (
		<section className={isMobileLandscape ? style.landscape : style.section}>
			<div className={style.container}>
				<div className={style.outer}>
					<div className={style.wrapper}>
						<Subtitle text={content.title} />
						{type === 'login' ? <LoginForm /> : <RegisterForm />}
						<span className={style.linkText}>{content.navigateMessage}</span>
						<Link className={style.link} to={content.navigatePath}>
							{content.linkText}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
