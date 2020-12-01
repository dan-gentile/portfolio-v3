import { Html } from "drei";
import React, { useRef } from "react";
import BoxMesh from "../components/BoxMesh/BoxMesh";
import Modal from "../components/Modal/Modal";
import Killers from "../assets/images/the-killers.png";

const TheKillers = () => {
  const theKillersRef = useRef();

  const handleClick = (e) => {
    theKillersRef.current.open();
  };

  return (
    <>
      <BoxMesh
        id={5}
        position={[2, 0, 0]}
        args={[1, 1.75, 0.5]}
        color="#bebebe"
        handleClick={handleClick}
        logo={Killers}
      />
      <Html>
        <Modal ref={theKillersRef} color="#959595">
          <p>The Killers</p>
        </Modal>
      </Html>
    </>
  );
};

export default TheKillers;
