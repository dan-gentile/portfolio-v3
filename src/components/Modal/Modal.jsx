import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDom from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./Modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Modal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false),
    };
  });
  return ReactDom.createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3,
              },
            }}
            onClick={() => setOpen(false)}
            className="modal-backdrop"
          />
          <motion.div
            style={{ backgroundColor: props.color }}
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              backgroundColor: "#f1f4f8",
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
              backgroundColor: props.color,
              transition: {
                delay: 0.3,
              },
            }}
            className="modal-content-wrapper"
          >
            <FontAwesomeIcon
              className="light close"
              icon={faTimesCircle}
              size="2x"
              style={{ float: "right" }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{
                opacity: 0,
                y: -25,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.2,
                  delay: 0.4,
                },
              }}
              exit={{
                opacity: 0,
                y: -25,
                transition: {
                  delay: 0.3,
                },
              }}
              className="modal-content"
            >
              <div>{props.children}</div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.getElementById("modal")
  );
});

export default Modal;
