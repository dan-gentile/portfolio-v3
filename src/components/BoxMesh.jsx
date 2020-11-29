import React, { useRef, useState } from "react";
import { useSpring, a } from "react-spring/three";

export default function BoxMesh({ id, position, color, args, handleClick }) {
  const mesh = useRef();
  const [hover, setHover] = useState(false);
  const props = useSpring({
    scale: hover ? [3.25, 1.85, 1] : args,
  });
  return (
    <>
      <a.mesh
        key={id}
        position={position}
        ref={mesh}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={handleClick}
        scale={props.scale}
      >
        <boxBufferGeometry attach="geometry" args={args} />
        <meshStandardMaterial attach="material" color={color} />
      </a.mesh>
    </>
  );
}
