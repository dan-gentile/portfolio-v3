import React, { useContext, useEffect, useRef, useState } from "react";
import { Switch } from "@material-ui/core";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../../assets/files/dan-gentile-resume.pdf";
import ProfilePic from "../../assets/images/profilepicture.jpg";
import SocialLink from "../../components/SocialLink/SocialLink";
import Modal from "../../components/Modal/Modal";
import "./Header.scss";
import { ShowModeContext } from "../../ShowMode";

const Header = () => {
  const { showMode, setShowMode } = useContext(ShowModeContext);
  const headerRef = useRef();
  const aboutMeRef = useRef();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setShowHeader(true);
  }, []);

  const openAboutModal = (e) => {
    aboutMeRef.current.open();
  };

  return (
    <>
      <header ref={headerRef}>
        <AnimatePresence>
          {showHeader && (
            <>
              <motion.button
                initial={{
                  x: -25,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.2,
                  },
                }}
                className={showMode ? "btn dark" : "btn light"}
                onClick={openAboutModal}
              >
                About
              </motion.button>

              <motion.h4
                initial={{
                  y: -25,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.2,
                  },
                }}
              >
                <Link to="/" className={showMode ? "dark" : "light"}>
                  Dan Gentile
                </Link>
              </motion.h4>
              <motion.div
                initial={{
                  x: 25,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.2,
                  },
                }}
                className="switchDiv"
              >
                <label className={showMode ? "label-dark" : null}>
                  Show Mode
                  <Switch onChange={() => setShowMode(!showMode)} />
                </label>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
      <Modal ref={aboutMeRef} color="#a5a5a5">
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
            intersection of design ideals and technical reality. <br />
            The needs of concert designers is no different then web designers
            and I find myself right at home making their <br />
            dreams a reality. When I am not working on your web app you can find
            me making coffee and going for a run.
          </p>
          <ul>
            <SocialLink
              title="GitHub"
              socialLink="https://github.com/dan-gentile"
              fontAwesomeIcon={
                <FontAwesomeIcon icon={faGithubSquare} size="2x" />
              }
            />
            <SocialLink
              title="Twitter"
              socialLink="https://twitter.com/dangentile"
              fontAwesomeIcon={
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
              }
            />
            <SocialLink
              title="LinkedIn"
              socialLink="https://www.linkedin.com/in/dangentile/"
              fontAwesomeIcon={<FontAwesomeIcon icon={faLinkedin} size="2x" />}
            />
            <SocialLink
              title="Email"
              socialLink="mailto:dan@foxandrabbit.us"
              fontAwesomeIcon={
                <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
              }
            />
            <SocialLink
              title="Resume"
              socialLink={Resume}
              fontAwesomeIcon={<FontAwesomeIcon icon={faFilePdf} size="2x" />}
            />
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default Header;
