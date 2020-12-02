import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HtmlMesh.scss";
const HtmlMesh = ({ handleClick, mouseOver, mouseLeave, logo }) => {
  const HtmlRef = useRef();
  const [show, setShow] = useState(true);

  return (
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
        onMouseLeave={mouseLeave}
        onClick={() => {
          handleClick();
          setShow(false);
        }}
      >
        {show ? (
          <motion.img style={{ height: "200px" }} src={logo} alt="logo" />
        ) : null}
      </motion.div>
    </>
  );
};

export default HtmlMesh;
