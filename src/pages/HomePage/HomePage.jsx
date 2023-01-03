import React from 'react';

import { Input } from 'components/Reuse/Input/Input';

import { Modal } from 'components/Reuse/Modal/Modal';

const HomePage = () => {
  return (
    <div>
      <Modal btnType={'circle'}>
        <h2>Heloooooo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          expedita in ratione dolores. Recusandae, nesciunt fugit ipsum,
          molestiae totam sed nam at blanditiis quidem dolorem obcaecati cum
          nobis, sapiente nostrum.
        </p>
      </Modal>
    </div>
  );
};

export default HomePage;
