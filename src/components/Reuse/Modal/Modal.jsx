import { useMediaQuery } from 'react-responsive';
import { ReactComponent as CrossIcon } from 'shared/images/user/uploadCross.svg';
import style from './Modal.module.scss';

export const Modal = ({
	children,
	btnType,
	setIsShowModal,
	handleBackdropClick,
	isShowModal,
}) => {
	const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' });

	switch (btnType) {
		case 'circle':
			return (
				<>
					<button className={style.circle} onClick={() => setIsShowModal(true)}>
						<span>Add pet</span>
					</button>
					{isShowModal && (
						<div onClick={handleBackdropClick} className={style.backdrop}>
							<div className={style.modal}>
								<div
									onClick={handleBackdropClick}
									className={style.close}
								></div>
								{children}
							</div>
						</div>
					)}
				</>
			);
		case 'long':
			return (
				<>
					<button className={style.long} onClick={() => setIsShowModal(true)}>
						Learn more
					</button>
					{isShowModal && (
						<div onClick={handleBackdropClick} className={style.backdrop}>
							<div className={style.modal}>
								<div
									onClick={handleBackdropClick}
									className={style.close}
								></div>
								{children}
							</div>
						</div>
					)}
				</>
			);
		case 'circle-info':
			return (
				<>
					<button className={style.info} onClick={() => setIsShowModal(true)}>
						<span>Add pet</span>
					</button>
					{isShowModal && (
						<div onClick={handleBackdropClick} className={style.backdrop}>
							<div className={style.modal}>
								<div
									onClick={handleBackdropClick}
									className={style.close}
								></div>
								{children}
							</div>
						</div>
					)}
				</>
			);
		case 'empty':
			return (
				<>
					<p className={style.empty__text}>Add pet {isBigScreen && ':'}</p>
					<button className={style.empty} onClick={() => setIsShowModal(true)}>
						<CrossIcon stroke="#ffffff" width={44} height={44} />
					</button>
					{isShowModal && (
						<div onClick={handleBackdropClick} className={style.backdrop}>
							<div className={style.modal}>
								<div
									onClick={handleBackdropClick}
									className={style.close}
								></div>
								{children}
							</div>
						</div>
					)}
				</>
			);
		default:
			<div>Where is props?</div>;
	}
};

// !=============EXEMPLES==============

/*   

 <Modal 
 btnType={'circle'} 
 isShowModal={isShowModal}
 setIsShowModal={setIsShowModal}
 handleBackdropClick={handleBackdropClick}
 >
    <h2>Heloooooo</h2>
  </Modal>
  
<Modal 
 btnType={'long'}
 isShowModal={isShowModal}
 setIsShowModal={setIsShowModal}
 handleBackdropClick={handleBackdropClick}
>
    <h2>WOW</h2>
    <ul>
      <li>Cool</li>
      <li>Nice</li>
      <li>Kill me</li>
    </ul>
</Modal> 

  <Modal 
  btnType={'circle-info'}
   isShowModal={isShowModal}
  setIsShowModal={setIsShowModal}
  handleBackdropClick={handleBackdropClick}
  >
    <h2>Info for Paul</h2>
  </Modal> 
  
  <Modal 
  btnType={'empty'}
   isShowModal={isShowModal}
 setIsShowModal={setIsShowModal}
 handleBackdropClick={handleBackdropClick}
 >
    <h2>Empty BTN</h2>
  </Modal>
  */

//   !===============CHANGES-----------------

// ? Add this in your component code!!!!!!!!!!!!!!!!!

// import React, { useEffect ,useState} from 'react';

// const [isShowModal, setIsShowModal] = useState(false);

// const onClose = () => {
// 	setIsShowModal(false);
// };

// useEffect(() => {
// 	const handeleClickDown = e => {
// 		if (e.code === 'Escape') {
// 			onClose();
// 		}
// 	};
// 	window.addEventListener('keydown', handeleClickDown);
// 	return () => {
// 		window.removeEventListener('keydown', handeleClickDown);
// 	};
// 	// eslint-disable-next-line
// }, []);

// const handleBackdropClick = e => {
// 	if (e.currentTarget === e.target) {
// 		onClose();
// 	}
// };
