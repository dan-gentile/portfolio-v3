import React, { useRef, useState, useMemo } from "react";
import { Canvas } from "react-three-fiber";
import { Html } from "drei";
import BoxMesh from "./components/BoxMesh/BoxMesh";
import Modal from "./components/Modal/Modal";
import "./App.scss";
import Skull from "./assets/images/skull.png";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { HoverProvider } from "./HoverContext";

const App = () => {
  const modalRef = useRef();
  const modalRef2 = useRef();

  const handleClick = (e) => {
    modalRef.current.open();
  };

  const openAboutModal = (e) => {
    modalRef2.current.open();
  };

  return (
    <>
      <Header handleClick={openAboutModal} />
      <Modal ref={modalRef2}>
        <p>this probs wont work</p>
      </Modal>
      <HoverProvider>
        <Canvas shadowMap colorManagement>
          <ambientLight intensity={1} />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <group>
            <mesh
              receiveShadow
              rotation={[-(Math.PI / 2), 0, 0]}
              position={[0, -2, 0]}
            >
              <planeBufferGeometry attach="geometry" args={[100, 100]} />
              <shadowMaterial attach="material" opacity={0.3} />
            </mesh>
          </group>

          <BoxMesh
            id={1}
            position={[0, 0, 0]}
            args={[1, 1.75, 0.5]}
            color="#959595"
            handleClick={handleClick}
            logo={Skull}
          />
          <Html>
            <Modal ref={modalRef} color="#959595">
              <p>Goodbye</p>
            </Modal>
          </Html>

          <BoxMesh
            id={2}
            position={[1, 0, 0]}
            args={[1, 1.75, 0.5]}
            color="#a9a9a9"
            handleClick={handleClick}
            logo={Skull}
          />
          <Html>
            <Modal ref={modalRef} color="#a9a9a9">
              <p>ugh</p>
            </Modal>
          </Html>
          <BoxMesh
            id={3}
            position={[-1, 0, 0]}
            args={[1, 1.75, 0.5]}
            color="#838383"
            handleClick={handleClick}
            logo={Skull}
          />
          <Html>
            <Modal ref={modalRef} color="#838383">
              <p>and another</p>
            </Modal>
          </Html>
          <BoxMesh
            id={4}
            position={[-2, 0, 0]}
            args={[1, 1.75, 0.5]}
            color="#676767"
            handleClick={handleClick}
            logo={Skull}
          />
          <Html>
            <Modal ref={modalRef} color="#676767">
              <p>and another</p>
            </Modal>
          </Html>
          <BoxMesh
            id={5}
            position={[2, 0, 0]}
            args={[1, 1.75, 0.5]}
            color="#bebebe"
            handleClick={handleClick}
            logo={Skull}
          />
          <Html>
            <Modal ref={modalRef} color="#bebebe">
              <p>and another</p>
            </Modal>
          </Html>
        </Canvas>
      </HoverProvider>
      <Footer />
    </>
  );
};

export default App;
