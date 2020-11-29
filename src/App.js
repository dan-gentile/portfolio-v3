import React from "react";
import { Canvas } from "react-three-fiber";
import BoxMesh from "./components/BoxMesh";
import "./App.scss";

function App() {
  return (
    <>
      <Canvas colorManagement>
        <ambientLight intensity={1} />
        <BoxMesh position={[0, 0, 0]} args={[1, 1, 1]} color="blue" />
      </Canvas>
    </>
  );
}

export default App;
