import { Html } from "drei";
import React, { useRef } from "react";
import BoxMesh from "../components/BoxMesh/BoxMesh";
import Modal from "../components/Modal/Modal";
import PortfolioPic from "../assets/images/portfolio.png";

const Portfolio = () => {
  const portfolioRef = useRef();

  const handleClick = (e) => {
    portfolioRef.current.open();
  };

  return (
    <>
      <BoxMesh
        id={2}
        position={[1, 0, 0]}
        args={[1, 1.75, 0.5]}
        color="#a9a9a9"
        handleClick={handleClick}
        logo={PortfolioPic}
      />
      <Html>
        <Modal ref={portfolioRef} color="#959595">
          <p>Portfolio</p>
        </Modal>
      </Html>
    </>
  );
};

export default Portfolio;
