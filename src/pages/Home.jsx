import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../components/Wrapper';
import { Template } from '@/components/scenes';

const Home = () => {
  const scenes = [
    {
      name: 'Template',
      slug: 'template',
      component: <Template />,
    },
  ];
  return (
    <main>
      <section className='bg-dark py-6'>
        <div className='flex flex-col items-center min-h-screen text-white layout'>
          <h1 className='py-12'>SilentKey</h1>
          <div className='grid xs:grid-cols-1 lg:grid-cols-2  gap-6'>
            {scenes.map(({ name, slug, component }, index) => (
              <Link to={slug} key={`${index}`}>
                <h3 className='text-center pb-2 font-normal'>{name}</h3>
                <Wrapper>{component}</Wrapper>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
