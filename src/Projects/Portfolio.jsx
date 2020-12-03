import { Html } from "drei";
import React, { useContext, useRef } from "react";
import BoxMesh from "../components/BoxMesh/BoxMesh";
import Modal from "../components/Modal/Modal";
import PortfolioPic from "../assets/images/portfolio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { ShowModeContext } from "../ShowMode";

const Portfolio = () => {
  const { showMode } = useContext(ShowModeContext);
  const portfolioRef = useRef();

  const handleClick = (e) => {
    portfolioRef.current.open();
  };

  return (
    <>
      <BoxMesh
        id={2}
        position={[1, 0, 0]}
        position2={[1, 0, 1]}
        args={[1, 1.75, 0.5]}
        color={showMode ? "#e630f5" : "#a9a9a9"}
        handleClick={handleClick}
        logo={PortfolioPic}
      />
      <Html>
        <Modal
          ref={portfolioRef}
          color={showMode ? "#9ad75c" : "#959595"}
          showMode={showMode}
        >
          <div className="projects">
            <h3>Hey! You're Here!</h3>
            <h4>
              <FontAwesomeIcon
                icon={faCode}
                size="1x"
                style={{ marginRight: "4px" }}
              />
              React | SCSS | Three.js | React-Spring | Framer-Motion
            </h4>
            <ul>
              <li>
                <a
                  className={showMode ? "dark" : "light"}
                  href="https://github.com/dan-gentile/portfolio-v3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithubAlt}
                    size="1x"
                    style={{ marginRight: "4px" }}
                  />
                  GitHub |
                </a>
              </li>
              <li>
                <a
                  className={showMode ? "dark" : "light"}
                  href="https://github.com/dan-gentile/portfolio-v3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faDesktop}
                    size="1x"
                    style={{ marginRight: "4px", marginLeft: "4px" }}
                  />
                  Website
                </a>
              </li>
            </ul>
            <p>
              A portfolio page should best reflect the creator. For me the last
              10 years of my life have revolved around live events. <br />
              Throughout that time responsibilities have grown and evolved. The
              last few years it has been mostly focused on video whether that be
              creation, programming systems or playback. <br />
              Recent projects have involved projection mapping or pixel mapping
              to complex and simple shapes. During the process 3D models are
              crucial so I thought it would be fun to include some <br />
              here in the site.
            </p>
            <p>
              Whether its the past, present or future. Bringing ideas to reality
              are the creative challenges I strive for, and this sure was a
              challenge.
            </p>
          </div>
        </Modal>
      </Html>
    </>
  );
};

export default Portfolio;
