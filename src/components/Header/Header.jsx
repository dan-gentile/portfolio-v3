import React, { useEffect, useRef, useState } from "react";
import { Switch } from "@material-ui/core";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.scss";

const Header = ({ handleClick }) => {
  const headerRef = useRef();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setShowHeader(true);
  }, []);

  return (
    <header ref={headerRef}>
      <AnimatePresence>
        {showHeader && (
          <>
            <motion.h4
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
            >
              Dan Gentile
            </motion.h4>
            <motion.button
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
              className="btn light"
              onClick={handleClick}
            >
              About
            </motion.button>
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
              <label>
                {" "}
                Show Mode
                <Switch />
              </label>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
