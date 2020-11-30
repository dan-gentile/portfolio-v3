import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const HtmlMesh = ({ handleClick, mouseOver, logo }) => {
  const HtmlRef = useRef();
  const [show, setShow] = useState(true);

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.2,
              },
            }}
            className="MeshText"
            ref={HtmlRef}
            onMouseOver={mouseOver}
            onClick={handleClick}
          >
            <motion.img
              style={{ width: "200px", height: "200px" }}
              src={logo}
              alt="logo"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HtmlMesh;
