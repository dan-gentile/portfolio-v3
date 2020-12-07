import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import SocialLink from "../SocialLink/SocialLink";
import Resume from "../../assets/files/DanGentile_Resume_1204.pdf";
import { motion, AnimatePresence } from "framer-motion";
import "./Footer.scss";

const Footer = () => {
  const footerRef = useRef();
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    setShowFooter(true);
  }, []);
  return (
    <footer ref={footerRef}>
      <AnimatePresence>
        {showFooter && (
          <motion.ul
            initial={{
              y: 25,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
              },
            }}
            className="social"
          >
            <SocialLink
              title="GitHub"
              label="Link to GitHub Profile"
              socialLink="https://github.com/dan-gentile"
              fontAwesomeIcon={
                <FontAwesomeIcon icon={faGithubSquare} size="2x" />
              }
            />
            <SocialLink
              title="Twitter"
              label="Link to Twitter Profile"
              socialLink="https://twitter.com/dangentile"
              fontAwesomeIcon={
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
              }
            />
            <SocialLink
              title="LinkedIn"
              label="Link to LinkedIn Profile"
              socialLink="https://www.linkedin.com/in/dangentile/"
              fontAwesomeIcon={<FontAwesomeIcon icon={faLinkedin} size="2x" />}
            />
            <SocialLink
              title="Email"
              label="Link to send email"
              socialLink="mailto:dan@foxandrabbit.us"
              fontAwesomeIcon={
                <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
              }
            />
            <SocialLink
              title="Resume"
              label="Link to download resume"
              socialLink={Resume}
              fontAwesomeIcon={<FontAwesomeIcon icon={faFilePdf} size="2x" />}
            />
          </motion.ul>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
