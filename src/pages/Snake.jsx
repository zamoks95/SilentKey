import React from 'react';

import { Scene } from '@/components/scenes/Snake/Scene';

const Template = () => {
  return (
    <main>
      <section className='bg-dark py-6 h-screen'>
        <div className='bg-red w-[1280px] h-[720px] m-auto outline outline-white'>
          <Scene />
        </div>
      </section>
    </main>
  );
};

export default Template;
