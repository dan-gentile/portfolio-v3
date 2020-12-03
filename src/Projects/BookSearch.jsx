import { Html } from "drei";
import React, { useContext, useRef } from "react";
import BoxMesh from "../components/BoxMesh/BoxMesh";
import Modal from "../components/Modal/Modal";
import Book from "../assets/images/book-search.png";
import BookGif from "../assets/images/googlebooks.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { ShowModeContext } from "../ShowMode";

const BookSearch = () => {
  const { showMode } = useContext(ShowModeContext);
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
        color={showMode ? "#48fdfc" : "#838383"}
        handleClick={handleClick}
        logo={Book}
      />
      <Html>
        <Modal ref={bookSearchRef} color="#a5a5a5">
          <div className="projects">
            <h3>Search w/ Google Books</h3>
            <img
              src={BookGif}
              alt="website gif"
              style={{ width: "300px", borderRadius: "20px" }}
            />
            <h4>
              <FontAwesomeIcon
                icon={faCode}
                size="1x"
                style={{ marginRight: "4px" }}
              />
              React | SCSS | TypeScript | Express.js | MongoDB
            </h4>
            <ul>
              <li>
                <a
                  className="light"
                  href="https://github.com/dan-gentile/google-book-frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithubAlt}
                    size="1x"
                    style={{ marginRight: "4px" }}
                  />
                  GitHub |
                </a>
              </li>
              <li>
                <a
                  className="light"
                  href="https://googlebooksearchfrontend.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faDesktop}
                    size="1x"
                    style={{ marginRight: "4px", marginLeft: "4px" }}
                  />
                  Website
                </a>
              </li>
            </ul>
            <p>
              We're all looking for stuff to read, so lets make it easy! Search
              the Google Books API to find the next book you need in your
              collection! Once you find a book the user can go to the Google
              Books website to get more information, or the user can save it to
              the database to come back to at a later time. They can checkout
              what they have saved and once they're done with the book they can
              go ahead and remove it.
            </p>
            <p>
              The app is a small scale MERN stack application. It also uses
              error handling to prompt the user if something goes wrong.
            </p>
          </div>
        </Modal>
      </Html>
    </>
  );
};

export default BookSearch;
