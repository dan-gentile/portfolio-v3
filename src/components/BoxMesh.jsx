import React, { useRef, useState } from "react";
import { useSpring, a } from "react-spring/three";

export default function BoxMesh({ position, color, args }) {
  const mesh = useRef();
  const [expand, setExpand] = useState(false);
  const [hover, setHover] = useState(false);
  const props = useSpring({
    scale: hover ? [1.5, 1.5, 1] : args,
  });

  return (
    <a.mesh
      position={position}
      ref={mesh}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={() => setExpand(!expand)}
      scale={props.scale}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={hover ? "pink" : color} />
    </a.mesh>
  );
}
