import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDom from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.scss";

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
            <motion.div initial={{}} className="modal-content">
              {props.children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.getElementById("modal")
  );
});

export default Modal;
