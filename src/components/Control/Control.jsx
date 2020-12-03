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

  //   camera.rotation.y = (90 * Math.PI) / 180;
  camera.updateMatrix();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <OrbitControls
      args={[camera, gl.domElement]}
      ref={orbitRef}
      target={[0, 0, 0]}
    />
  );
};

export default Controls;
