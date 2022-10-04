import React from "react";

function VideoCard(props) {
  return (
    <div className='video-wrapper'>
      <h1 className='title'>{props.el.title}</h1>
      <div className='sum'>
        <iframe
          src={props.el.vid}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
        <div className='video-about'>
          <a href={props.el.link}>{props.el.linktext}</a> {props.el.text}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
