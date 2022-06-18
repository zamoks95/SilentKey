import React from 'react';

import { Wrapper } from '../components/Wrapper';

import { Template as Scene } from '@/components/scenes';

const Template = () => {
  return (
    <main>
      <section className='bg-dark py-6'>
        <div className='flex flex-col items-center min-h-screen text-white layout'>
          <Wrapper>
            <Scene />
          </Wrapper>
        </div>
      </section>
    </main>
  );
};

export default Template;
