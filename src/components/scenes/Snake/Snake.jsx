import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const baseSpeed = 0.3;

document.addEventListener('keydown', (event) => controlSnake(event), false);

let vX = baseSpeed;
let vZ = 0;

const isDead = (position) => {
  return (
    position.x >= 24 ||
    position.x <= -24 ||
    position.z >= 24 ||
    position.z <= -24
  );
};

const controlSnake = (event) => {
  switch (event.key) {
    case 'ArrowUp':
      vX = 0;
      vZ = -baseSpeed;
      break;
    case 'ArrowDown':
      vX = 0;
      vZ = baseSpeed;
      break;
    case 'ArrowLeft':
      vX = -baseSpeed;
      vZ = 0;
      break;
    case 'ArrowRight':
      vX = baseSpeed;
      vZ = 0;
      break;
  }
};

const SnakeHead = ({ position, ref }) => {
  return (
    <mesh position={position} scale={1} ref={ref}>
      <sphereGeometry attach='geometry' args={[1, 16, 200]} />
      <meshStandardMaterial color={'red'} />
    </mesh>
  );
};

const Snake = () => {
  const ref = useRef();

  useFrame(() => {
    (ref.current.position.x += vX), (ref.current.position.z += vZ);
  });

  setInterval(() => {
    const { position } = ref.current;
    if (isDead(position)) {
      ref.current.position.x = 0;
      ref.current.position.z = 0;
    }
  }, 100);

  return (
    <mesh position={[0, 1, 0]} ref={ref} scale={1}>
      <sphereGeometry attach='geometry' args={[1, 16, 200]} />
      <meshStandardMaterial color={'red'} />
    </mesh>
  );
};

export { Snake };
