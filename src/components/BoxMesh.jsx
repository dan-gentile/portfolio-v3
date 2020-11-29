import React, { useRef, useState } from "react";
import { useSpring, a } from "react-spring/three";

export default function BoxMesh({ position, color, args }) {
  const mesh = useRef();
  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.5, 1.5, 1] : [1, 1, 1],
  });

  return (
    <a.mesh
      position={position}
      ref={mesh}
      onMouseOver={() => setExpand(!expand)}
      scale={props.scale}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </a.mesh>
  );
}
