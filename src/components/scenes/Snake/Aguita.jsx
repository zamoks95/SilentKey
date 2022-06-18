import React, { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';

import { Water } from 'three/examples/jsm/objects/Water.js';

extend({ Water });

const Aguita = ({ position }) => {
  const ref = useRef();

  return (
    <mesh position={position} ref={ref} scale={1}>
      <boxGeometry args={[100, 1, 100]} />
      <meshStandardMaterial color={'#4b7bec'} />
    </mesh>
  );
};

export { Aguita };
