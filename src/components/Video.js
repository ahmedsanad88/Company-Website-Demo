import React from 'react';
import "./Video.css";

function Video() {

    return (
        <div className="video">
            {/* <div className="video__text">
                <h2>We Make the start up much easier</h2>
            </div>
            <div className="video__source"> */}
                <video id="vid" autoPlay muted loop controlsList="nodownload" style={{ opacity: "0.7"}}>
                    <source src={process.env.PUBLIC_URL + "videos/video.mp4"} type="video/mp4" />
                    <source src={process.env.PUBLIC_URL + "/video.ogg"} type="video/ogg" />
                    Your browser does not support HTML video.
                </video>
            {/* </div> */}
        </div>
    )
}

export default Video;
