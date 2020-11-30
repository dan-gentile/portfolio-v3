import React, { useRef, useState } from "react";
import { useSpring, a } from "react-spring/three";
import { Html } from "drei";
import { motion, AnimatePresence } from "framer-motion";

const BoxMesh = ({ id, position, color, args, handleClick, logo }) => {
  const mesh = useRef();
  const domContent = useRef();
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
        {hover ? (
          <Html portal={domContent} zIndexRange={[100, 0]} center>
            <AnimatePresence>
              <motion.div
                className="MeshText"
                onMouseOver={() => setHover(true)}
              >
                <motion.img
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      delay: 0.8,
                    },
                  }}
                  style={{ width: "200px", height: "200px" }}
                  src={logo}
                  alt="logo"
                />
              </motion.div>
            </AnimatePresence>
          </Html>
        ) : null}
      </a.mesh>
    </>
  );
};

export default BoxMesh;
