import React, { useRef } from 'react';
import { useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Camera = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      enableRotate={false}
      enableDamping={false}
      autoRotate={true}
      minDistance={30}
      maxPolarAngle={Math.PI / 8} // Math.PI / 4
      autoRotateSpeed={0}
    />
  );
};

export { Camera };
