import React, { useContext } from "react";
import { ShowModeContext } from "../../ShowMode";

const SocialLink = (props) => {
  const { showMode } = useContext(ShowModeContext);
  return (
    <li className="social-item">
      <a
        className={showMode ? "dark" : "light"}
        name="social-link"
        href={props.socialLink}
        target="_blank"
        rel="noreferrer"
        title={props.title}
        aria-label={props.label}
      >
        {props.fontAwesomeIcon}
      </a>
    </li>
  );
};

export default SocialLink;
