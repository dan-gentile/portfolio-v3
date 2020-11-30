import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import { Html } from "drei";
import BoxMesh from "./components/BoxMesh/BoxMesh";
import Modal from "./components/Modal/Modal";
import "./App.scss";
import Skull from "./assets/images/skull.png";

function App() {
  const modalRef = useRef();

  const handleClick = (e) => {
    modalRef.current.open();
  };

  return (
    <>
      <Canvas colorManagement>
        <ambientLight intensity={1} />
        <BoxMesh
          id={1}
          position={[0, 0, 0]}
          args={[1, 1.75, 1]}
          color="#959595"
          handleClick={handleClick}
          logo={Skull}
        />
        <Html>
          <Modal ref={modalRef} color="#959595">
            <p>Hello</p>
          </Modal>
        </Html>
      </Canvas>
    </>
  );
}

export default App;
