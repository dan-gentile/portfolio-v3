import { Html } from "drei";
import React, { useContext, useRef, Suspense } from "react";
import BoxMesh from "../components/BoxMesh/BoxMesh";
import Coffee from "../assets/images/coffee-app.png";
import CoffeeGif from "../assets/images/coffeeapp.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { ShowModeContext } from "../ShowMode";

const CoffeeApp = () => {
  const Modal = React.lazy(() => import("../components/Modal/Modal"));
  const { showMode } = useContext(ShowModeContext);
  const coffeeRef = useRef();

  const handleClick = (e) => {
    coffeeRef.current.open();
  };

  return (
    <>
      <BoxMesh
        id={1}
        position={[0, 0, 0]}
        position2={[0, 0, 1]}
        args={[1, 1.75, 0.5]}
        color={showMode ? "#42fb00" : "#959595"}
        handleClick={handleClick}
        logo={Coffee}
      />
      <Html>
        <Suspense fallback={<div></div>}>
          <Modal
            ref={coffeeRef}
            color={showMode ? "#9ad75c" : "#959595"}
            showMode={showMode}
          >
            <article className="projects">
              <h3>Coffee App</h3>
              <img
                src={CoffeeGif}
                alt="website gif"
                style={{ width: "300px", borderRadius: "20px" }}
              />
              <h4>
                <FontAwesomeIcon
                  icon={faCode}
                  size="1x"
                  style={{ marginRight: "4px" }}
                />
                React | SCSS | Express | MongoDB | Oauth | Google Maps + Places
                API
              </h4>
              <ul>
                <li>
                  <a
                    className={showMode ? "dark" : "light"}
                    href="https://github.com/dan-gentile/coffee-app-client"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Link to GitHub Repo"
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
                    href="https://cfe-client.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Link to Deployed WebApp"
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
              <h5>Role: Project Manager | UI Design | Front End Developer</h5>
              <p>
                Spend Less time finding good coffee and more time enjoying it.
                The Coffee App is a React browser app that allows the user to
                search for good coffee through a curated map search. Check in to
                the places you like when you sign up for your own profile using
                Google Oauth.
              </p>
              <p>
                This was a fun project working with a small agile team. It was a
                great collaborative process and something we all found passion
                for.
              </p>
              <h5>Additional Links</h5>
              <ul>
                <li>
                  <a
                    className={showMode ? "dark" : "light"}
                    href="https://github.com/dan-gentile/coffee-app-dashboard"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginRight: "15px" }}
                    aria-label="Link to GitHub Repo"
                  >
                    Dashboard GitHub
                  </a>
                </li>
                <li>
                  <a
                    className={showMode ? "dark" : "light"}
                    href="https://github.com/dan-gentile/coffee-app-backend"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: "15px" }}
                    aria-label="Link to GitHub Repo"
                  >
                    Server GitHub
                  </a>
                </li>
              </ul>
            </article>
          </Modal>
        </Suspense>
      </Html>
    </>
  );
};

export default CoffeeApp;
