import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  Suspense,
} from "react";
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
import Resume from "../../assets/files/DanGentile_Resume_1204.pdf";
import ProfilePic from "../../assets/images/profilepicture.jpg";
import SocialLink from "../../components/SocialLink/SocialLink";
import "./Header.scss";
import { ShowModeContext } from "../../ShowMode";

const Header = () => {
  const Modal = React.lazy(() => import("../../components/Modal/Modal"));
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

              <motion.h1
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
              </motion.h1>
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
                  {showMode ? "Boring Mode" : "Show Mode"}
                  <Switch onChange={() => setShowMode(!showMode)} />
                </label>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
      <Suspense fallback={<div></div>}>
        <Modal ref={aboutMeRef} color="#a5a5a5" showMode={showMode}>
          <article className="AboutMe">
            <img
              className="image"
              src={ProfilePic}
              width="200px"
              height="200px"
              alt="profile"
            />
            <h4>Code | Design | Operate</h4>
            <h4>Email: dan@foxandrabbit.us</h4>
            <p>
              As a web developer and concert roadie I find myself at the
              intersection of design ideals and technical reality. <br />
              The needs of concert designers is no different then web designers
              and I find myself right at home making their <br />
              dreams a reality. When I am not working on your web app you can
              find me making coffee and going for a run.
            </p>
            <ul>
              <SocialLink
                title="GitHub"
                label="Link to GitHub Profile"
                socialLink="https://github.com/dan-gentile"
                fontAwesomeIcon={
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    size="2x"
                    aria-label="GitHub Logo"
                  />
                }
              />
              <SocialLink
                title="Twitter"
                label="Link to Twitter Profile"
                socialLink="https://twitter.com/dangentile"
                fontAwesomeIcon={
                  <FontAwesomeIcon
                    icon={faTwitterSquare}
                    size="2x"
                    aria-label="Twitter Logo"
                  />
                }
              />
              <SocialLink
                title="LinkedIn"
                label="Link to LinkedIn Profile"
                socialLink="https://www.linkedin.com/in/dangentile/"
                fontAwesomeIcon={
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    aria-label="LinkedIn Logo"
                  />
                }
              />
              <SocialLink
                title="Email"
                label="Link to send email"
                socialLink="mailto:dan@foxandrabbit.us"
                fontAwesomeIcon={
                  <FontAwesomeIcon
                    icon={faEnvelopeSquare}
                    size="2x"
                    aria-label="Email Icon"
                  />
                }
              />
              <SocialLink
                title="Resume"
                label="Link to download resume"
                socialLink={Resume}
                fontAwesomeIcon={
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    size="2x"
                    aria-label="PDF Icon"
                  />
                }
              />
            </ul>
          </article>
        </Modal>
      </Suspense>
    </>
  );
};

export default Header;
