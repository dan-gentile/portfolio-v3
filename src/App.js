import React, { useRef } from "react";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Canvas } from "react-three-fiber";
import { Html } from "drei";
import BoxMesh from "./components/BoxMesh/BoxMesh";
import Modal from "./components/Modal/Modal";
import "./App.scss";
import Resume from "./assets/files/dan-gentile-resume.pdf";
import Skull from "./assets/images/skull.png";
import ProfilePic from "./assets/images/profilepicture.jpg";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { HoverProvider } from "./HoverContext";
import SocialLink from "./components/SocialLink/SocialLink";

const App = () => {
  const modalRef = useRef();
  const modalRef2 = useRef();

  const handleClick = (e) => {
    modalRef.current.open();
  };

  const openAboutModal = (e) => {
    modalRef2.current.open();
  };

  return (
    <>
      <Header handleClick={openAboutModal} />
      <Modal ref={modalRef2} color="#959595">
        <div className="AboutMe">
          <img
            className="image"
            src={ProfilePic}
            width="200px"
            height="200px"
            alt="profile"
          />
          <h4>Code | Design | Operate</h4>
          <p>
            As a web developer and concert roadie I find myself at the
            intersection of design ideals and technical reality. The needs of
            concert designers is no different then web designers and I find
            myself right at home making their dreams a reality. When I am not
            working on your web app you can find me making coffee and going for
            a run.
          </p>
          <ul>
            <SocialLink
              socialLink="https://github.com/dan-gentile"
              fontAwesomeIcon={
                <FontAwesomeIcon icon={faGithubSquare} size="2x" />
              }
            />
            <SocialLink
              socialLink="https://twitter.com/dangentile"
              fontAwesomeIcon={
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
              }
            />
            <SocialLink
              socialLink="https://www.linkedin.com/in/dangentile/"
              fontAwesomeIcon={<FontAwesomeIcon icon={faLinkedin} size="2x" />}
            />
            <SocialLink
              socialLink="mailto:dan@foxandrabbit.us"
              fontAwesomeIcon={
                <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
              }
            />
            <SocialLink
              socialLink={Resume}
              fontAwesomeIcon={<FontAwesomeIcon icon={faFilePdf} size="2x" />}
            />
          </ul>
        </div>
      </Modal>
      <HoverProvider>
        <Canvas shadowMap colorManagement>
          <ambientLight intensity={1} />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1}
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

          <BoxMesh
            id={1}
            position={[0, 0, 0]}
            args={[1, 1.75, 0.5]}
            color="#959595"
            handleClick={handleClick}
            logo={Skull}
          />
          <Html>
            <Modal ref={modalRef} color="#959595">
              <p>Goodbye</p>
            </Modal>
          </Html>

          <BoxMesh
            id={2}
            position={[1, 0, 0]}
            args={[1, 1.75, 0.5]}
            color="#a9a9a9"
            handleClick={handleClick}
            logo={Skull}
          />
          <Html>
            <Modal ref={modalRef} color="#a9a9a9">
              <p>ugh</p>
            </Modal>
          </Html>
          <BoxMesh
            id={3}
            position={[-1, 0, 0]}
            args={[1, 1.75, 0.5]}
            color="#838383"
            handleClick={handleClick}
            logo={Skull}
          />
          <Html>
            <Modal ref={modalRef} color="#838383">
              <p>and another</p>
            </Modal>
          </Html>
          <BoxMesh
            id={4}
            position={[-2, 0, 0]}
            args={[1, 1.75, 0.5]}
            color="#676767"
            handleClick={handleClick}
            logo={Skull}
          />
          <Html>
            <Modal ref={modalRef} color="#676767">
              <p>and another</p>
            </Modal>
          </Html>
          <BoxMesh
            id={5}
            position={[2, 0, 0]}
            args={[1, 1.75, 0.5]}
            color="#bebebe"
            handleClick={handleClick}
            logo={Skull}
          />
          <Html>
            <Modal ref={modalRef} color="#bebebe">
              <p>and another</p>
            </Modal>
          </Html>
        </Canvas>
      </HoverProvider>
      <Footer />
    </>
  );
};

export default App;
