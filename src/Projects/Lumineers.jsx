import { Html } from "drei";
import React, { useContext, useRef } from "react";
import BoxMesh from "../components/BoxMesh/BoxMesh";
import Modal from "../components/Modal/Modal";
import TheLumineers from "../assets/images/the-lumineers.png";
import TheLumineersShow from "../assets/images/theLumineersShow.jpg";
import { ShowModeContext } from "../ShowMode";

const Lumineers = () => {
  const { showMode } = useContext(ShowModeContext);
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
        color={showMode ? "#f9fd00" : "#676767"}
        handleClick={handleClick}
        logo={TheLumineers}
      />
      <Html>
        <Modal ref={theLumineersRef} color="#a5a5a5">
          <div className="touring">
            <h3>The Lumineers</h3>
            <img
              src={TheLumineersShow}
              alt="The Killers Live"
              style={{ width: "300px", borderRadius: "20px" }}
            />
            <h4>Disguise d3 programmer and operator</h4>
            <h5>2016-2017 | 2019-2020</h5>
            <p>
              Responsibilities included setting up the server daily, updating
              pixel mapping, projection mapping and cueing as necessary.
              Traveled with the show for the entire record cycle including
              headlining and festival shows across the globe. In addition to
              content playback the server handled various live inputs. Sometimes
              these feeds were clean straight to the screens. Other times the
              feeds were fed through various Notch realtime fxs before heading
              to the screens. During the show the server control was split
              between the lighting console using SockPuppet and MIDI control.
            </p>
            <h5>Links</h5>
            <ul>
              <li>
                <a
                  className="light"
                  href="https://plsn.com/articles/production-profile/the-lumineers-iii-tour/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PLSN Magazine Article
                </a>
              </li>
            </ul>
          </div>
        </Modal>
      </Html>
    </>
  );
};

export default Lumineers;
