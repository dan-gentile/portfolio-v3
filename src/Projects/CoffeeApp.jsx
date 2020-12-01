import { Html } from "drei";
import React, { useRef } from "react";
import BoxMesh from "../components/BoxMesh/BoxMesh";
import Modal from "../components/Modal/Modal";
import Coffee from "../assets/images/coffee-app.png";

const CoffeeApp = () => {
  const coffeeRef = useRef();

  const handleClick = (e) => {
    coffeeRef.current.open();
  };

  return (
    <>
      <BoxMesh
        id={1}
        position={[0, 0, 0]}
        args={[1, 1.75, 0.5]}
        color="#959595"
        handleClick={handleClick}
        logo={Coffee}
      />
      <Html>
        <Modal ref={coffeeRef} color="#959595">
          <p>CoffeeApp</p>
        </Modal>
      </Html>
    </>
  );
};

export default CoffeeApp;
