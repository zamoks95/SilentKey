import React from 'react';
const Wrapper = (props) => {
  return (
    <div className='block w-[512px] max-w-lg background h-[512px] bg-darker shadow-lg rounded-md'>
      {props.children}
    </div>
  );
};
export { Wrapper };
