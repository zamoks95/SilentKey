import React from 'react';
const Wrapper = (props) => {
  return (
    <div className='block background bg-darker shadow-lg rounded-md'>
      {props.children}
    </div>
  );
};
export { Wrapper };
