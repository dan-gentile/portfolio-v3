import React, { useContext, useRef } from "react";
import { OrbitControls } from "drei";
import { useThree, useFrame } from "react-three-fiber";
import { ShowModeContext } from "../../ShowMode";

const Controls = () => {
  const { showMode } = useContext(ShowModeContext);

  const orbitRef = useRef();
  const { camera, gl } = useThree();

  if (showMode) {
    camera.position.set(1, 2, 4);
  } else {
    camera.position.set(0, 0, 5);
  }

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <OrbitControls
      enableZoom={false}
      args={[camera, gl.domElement]}
      ref={orbitRef}
      target={[0, 0, 0]}
    />
  );
};

export default Controls;
