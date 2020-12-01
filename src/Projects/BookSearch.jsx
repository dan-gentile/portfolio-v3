import { Html } from "drei";
import React, { useRef } from "react";
import BoxMesh from "../components/BoxMesh/BoxMesh";
import Modal from "../components/Modal/Modal";
import Book from "../assets/images/book-search.png";

const BookSearch = () => {
  const bookSearchRef = useRef();

  const handleClick = (e) => {
    bookSearchRef.current.open();
  };

  return (
    <>
      <BoxMesh
        id={3}
        position={[-1, 0, 0]}
        args={[1, 1.75, 0.5]}
        color="#838383"
        handleClick={handleClick}
        logo={Book}
      />
      <Html>
        <Modal ref={bookSearchRef} color="#959595">
          <p>BookSearch</p>
        </Modal>
      </Html>
    </>
  );
};

export default BookSearch;
