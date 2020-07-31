import React from "react";
import VideoLink from "../../../public/assets/images/RepresentMe.mp4";
import "./style.css";

function Video() {
    return (
        <div>
            <video src={VideoLink} controls playsinline hidden uk-video="autoplay: inview"></video>
        </div>
    );
}

export default Video;