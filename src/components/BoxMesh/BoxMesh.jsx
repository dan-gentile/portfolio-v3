import React, { useEffect, useRef, useState } from "react";
import { useSpring, a, useTransition } from "react-spring/three";
import { Html } from "drei";
import HtmlMesh from "../HtmlMesh/HtmlMesh";

// import { Spring } from "react-spring/renderprops";

const BoxMesh = ({ id, position, color, args, handleClick, logo }) => {
  const mesh = useRef();
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);
  const { scale } = useSpring({
    scale: hover ? [3.25, 1.85, 1] : args,
  });

  useEffect(() => {}, []);

  const { opacity } = useSpring({
    from: {
      opacity: 0.1,
    },
    opacity: 1,
    config: {
      mass: 1,
      tension: 40,
      friction: 150,
      velocity: 0.1,
      clamp: true,
    },
  });

  const mouseOver = () => {
    setHover(true);
  };

  return (
    <>
      <a.mesh
        key={id}
        position={position}
        ref={mesh}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
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
