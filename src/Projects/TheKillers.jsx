import { Html } from "drei";
import React, { useContext, useRef } from "react";
import BoxMesh from "../components/BoxMesh/BoxMesh";
import Modal from "../components/Modal/Modal";
import Killers from "../assets/images/the-killers.png";
import KillersShow from "../assets/images/theKillersShow.jpg";
import { ShowModeContext } from "../ShowMode";

const TheKillers = () => {
  const { showMode } = useContext(ShowModeContext);
  const theKillersRef = useRef();

  const handleClick = (e) => {
    theKillersRef.current.open();
  };

  return (
    <>
      <BoxMesh
        id={5}
        position={[2, 0, 0]}
        position2={[2, 0, 1]}
        args={[1, 1.75, 0.5]}
        color={showMode ? "#e12000" : "#bebebe"}
        handleClick={handleClick}
        logo={Killers}
      />
      <Html>
        <Modal
          ref={theKillersRef}
          color={showMode ? "#9ad75c" : "#959595"}
          showMode={showMode}
        >
          <div className="touring">
            <h3>
              The Killers <br /> Wonderful Wonderful Tour
            </h3>
            <img
              src={KillersShow}
              alt="The Killers Live"
              style={{ width: "300px", borderRadius: "20px" }}
            />
            <h4>Disguise d3 programmer and operator</h4>
            <h5>2017-2018</h5>
            <p>
              Responsibilities included setting up the server daily, updating
              pixel mapping and cueing as necessary. Traveled with the show for
              the entire record cycle including headlining and festival shows
              across the globe. In addition to content playback the server
              handled various live inputs. Sometimes these feeds were clean
              straight to the screens. Other times the feeds were fed through
              various Notch realtime fxs before heading to the screens. During
              the show the server control was split between the lighting console
              using SockPuppet and MIDI control.
            </p>
            <h5>Links</h5>
            <ul>
              <li>
                <a
                  className={showMode ? "dark" : "light"}
                  href="https://www.disguise.one/en/solutions/concert-touring/the-killers-world-tour/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Disguise Press Release
                </a>
              </li>
              <li>
                <a
                  className={showMode ? "dark" : "light"}
                  href="https://capital-sound.co.uk/wp-content/uploads/2018/01/TPi-Feature-TheKillers-2017.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  TPI Magazine Article
                </a>
              </li>
            </ul>
          </div>
        </Modal>
      </Html>
    </>
  );
};

export default TheKillers;
