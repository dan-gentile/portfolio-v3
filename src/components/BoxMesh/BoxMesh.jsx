import React, { useContext, useRef, useState } from "react";
import { useSpring, a } from "react-spring/three";
import { Html } from "drei";
import HtmlMesh from "../HtmlMesh/HtmlMesh";

const BoxMesh = ({ id, position, color, args, handleClick, logo }) => {
  const mesh = useRef();
  const [hover, setHover] = useState(false);
  const { scale } = useSpring({
    scale: hover ? [3.25, 1.85, 0.5] : args,
  });

  const { opacity } = useSpring({
    from: {
      opacity: 0.1,
    },
    opacity: 1,
    config: {
      mass: 1,
      tension: 40,
      friction: 150,
      velocity: 0.11,
      clamp: true,
    },
  });

  const mouseOver = () => {
    setHover(true);
  };

  const handlePointerOver = () => {
    setHover(true);
  };

  const handlePointerOut = () => {
    setHover(false);
  };

  return (
    <>
      <a.mesh
        castShadow
        renderOrder={hover ? 1 : 0}
        key={id}
        position={position}
        ref={mesh}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
        scale={scale}
      >
        <boxBufferGeometry attach="geometry" args={args} />
        <a.meshStandardMaterial
          attach="material"
          color={color}
          opacity={opacity}
        />
        {hover ? (
          <Html center>
            <HtmlMesh
              logo={logo}
              handleClick={handleClick}
              mouseOver={mouseOver}
            />
          </Html>
        ) : null}
      </a.mesh>
    </>
  );
};

export default BoxMesh;
