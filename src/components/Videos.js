import React from "react";
import VideoCard from "./VideoCard";
import videoCardData from "./videoCardData";

function Videos() {
    const videoElement = videoCardData.map((el) => {
        return <VideoCard 
            key={el.id}
            el={el}
        />
    })
    return (
        <div className="bottom">
            {videoElement}
        </div>

    )
}

export default Videos;