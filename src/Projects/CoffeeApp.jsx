import { Html } from "drei";
import React, { useRef } from "react";
import BoxMesh from "../components/BoxMesh/BoxMesh";
import Modal from "../components/Modal/Modal";
import Coffee from "../assets/images/coffee-app.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

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
        <Modal ref={coffeeRef} color="#a5a5a5">
          <div className="projects">
            <h3>Search/Save/Remove Books</h3>
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
                  className="light"
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
                  className="light"
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

export default CoffeeApp;
