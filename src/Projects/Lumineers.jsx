import { Html } from "drei";
import React, { useRef } from "react";
import BoxMesh from "../components/BoxMesh/BoxMesh";
import Modal from "../components/Modal/Modal";
import TheLumineers from "../assets/images/the-lumineers.png";

const Lumineers = () => {
  const theLumineersRef = useRef();

  const handleClick = (e) => {
    theLumineersRef.current.open();
  };

  return (
    <>
      <BoxMesh
        id={4}
        position={[-2, 0, 0]}
        args={[1, 1.75, 0.5]}
        color="#676767"
        handleClick={handleClick}
        logo={TheLumineers}
      />
      <Html>
        <Modal ref={theLumineersRef} color="#959595">
          <p>The Lumineers</p>
        </Modal>
      </Html>
    </>
  );
};

export default Lumineers;
