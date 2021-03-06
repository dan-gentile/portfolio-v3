import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CoffeeApp from "./Projects/CoffeeApp";
import Portfolio from "./Projects/Portfolio";
import BookSearch from "./Projects/BookSearch";
import TheKillers from "./Projects/TheKillers";
import Lumineers from "./Projects/Lumineers";
import Controls from "./components/Control/Control";
import { ShowModeContext } from "./ShowMode";
import "./App.scss";

const Home = () => {
  const [showMode, setShowMode] = useState(false);

  if (showMode) {
    document.body.classList.add("body-dark");
  } else {
    document.body.classList.remove("body-dark");
  }

  return (
    <>
      <ShowModeContext.Provider value={{ showMode, setShowMode }}>
        <Header />
        <Canvas shadowMap colorManagement>
          <ShowModeContext.Provider value={{ showMode, setShowMode }}>
            <Controls />
            <ambientLight intensity={0.8} />
            <directionalLight
              castShadow
              position={[0, 10, 0]}
              intensity={0.8}
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
          </ShowModeContext.Provider>
          <ShowModeContext.Provider value={{ showMode, setShowMode }}>
            <Lumineers />
            <BookSearch />
            <CoffeeApp />
            <Portfolio />
            <TheKillers />
          </ShowModeContext.Provider>
        </Canvas>

        <Footer />
      </ShowModeContext.Provider>
    </>
  );
};

export default Home;
