import React from 'react';

import { Wrapper } from '../components/Wrapper';

import { Template as Scene } from '@/components/scenes';

const Test = () => {
  return (
    <main>
      <section className='bg-dark py-6'>
        <div className='flex flex-col items-center min-h-screen text-white layout'>
          <h1 className='pt-12'>Test</h1>
          <h2 className='pt-4 pb-12'>By SilentKey</h2>
          <Wrapper>
            <Scene />
          </Wrapper>
        </div>
      </section>
    </main>
  );
};

export default Test;
