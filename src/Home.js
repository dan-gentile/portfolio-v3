import React from "react";
import { Canvas } from "react-three-fiber";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CoffeeApp from "./Projects/CoffeeApp";
import Portfolio from "./Projects/Portfolio";
import BookSearch from "./Projects/BookSearch";
import TheKillers from "./Projects/TheKillers";
import "./App.scss";
import Lumineers from "./Projects/Lumineers";

const Home = () => {
  return (
    <>
      <Header />

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
        <Lumineers />
        <BookSearch />
        <CoffeeApp />
        <Portfolio />
        <TheKillers />
      </Canvas>

      <Footer />
    </>
  );
};

export default Home;
