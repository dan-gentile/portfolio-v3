import React from "react";
import "./SocialLink.scss";

const SocialLink = (props) => {
  return (
    <li className="social-item">
      <a
        className={"social-link light"}
        href={props.socialLink}
        target="_blank"
        rel="noreferrer"
      >
        {props.fontAwesomeIcon}
      </a>
    </li>
  );
};

export default SocialLink;
