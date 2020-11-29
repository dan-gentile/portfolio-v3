import React from "react";
import { Canvas } from "react-three-fiber";
import "./App.scss";

function App() {
  return (
    <>
      <Canvas colorManagement>
        <ambientLight intensity={0.3} />
        <mesh>
          <boxBufferGeometry attach="geometry" args={[1, 2.5, 1]} />
          <meshStandardMaterial attach="material" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
