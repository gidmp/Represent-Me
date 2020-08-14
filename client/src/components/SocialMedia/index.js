import React from "react";
import "./style.css";

function SocialMedia(props) {
  return (
    <a
      uk-icon={`icon:` + props.media.toLowerCase() + ` ; ratio: 1.5`}
      className="contact-icon contact-link-icon"
      alt="social media icons"
      href={
        `https://www.` + props.media.toLowerCase() + `.com/` + props.mediaId
      }
      target="_blank"
    ></a>
  );
}

export default SocialMedia;
