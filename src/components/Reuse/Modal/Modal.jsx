import React, { useEffect } from 'react';
import { useState } from 'react';

import style from './Modal.module.scss';

export const Modal = ({ children, btnType }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const onClose = () => {
    setIsShowModal(false);
  };

  useEffect(() => {
    const handeleClickDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handeleClickDown);
    return () => {
      window.removeEventListener('keydown', handeleClickDown);
    };
    // eslint-disable-next-line
  }, []);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

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
    default:
      <div>Where is props?</div>;
  }
};

// !=============EXEMPLES==============

{
  /* <Modal textBtn={'Add pet'} btnType={'circle'}>
        <h2>Heloooooo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          expedita in ratione dolorestyle. Recusandae, nesciunt fugit ipsum,
          molestiae totam sed nam at blanditiis quidem dolorem obcaecati cum
          nobis, sapiente nostrum.
        </p>
      </Modal>
      <Modal textBtn={'TEST MODAL 2'} btnType={'long'}>
        <h2>WOW</h2>
        <ul>
          <li>Cool</li>
          <li>Nice</li>
          <li>Kill me</li>
        </ul>
      </Modal>  */
}
