import React from 'react';

import { Canvas } from '@react-three/fiber';
import { Aguita } from './Aguita';
import { Suelo } from './Suelo';
import { Camera } from './Camera';
import { Snake } from './Snake';

const Scene = () => (
  <Canvas>
    <Camera />
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <Aguita position={[0, -1, 0]} />
    <Suelo position={[0, -0.5, 0]} />
    <Snake />
  </Canvas>
);

export { Scene };
