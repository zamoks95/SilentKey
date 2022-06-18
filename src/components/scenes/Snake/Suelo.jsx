import React, { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';

import { Water } from 'three/examples/jsm/objects/Water.js';

extend({ Water });

const Suelo = ({ position }) => {
  const ref = useRef();

  return (
    <mesh position={position} ref={ref} scale={1}>
      <boxGeometry args={[50, 1, 50]} />
      <meshStandardMaterial color={'#26de81'} />
    </mesh>
  );
};

export { Suelo };
