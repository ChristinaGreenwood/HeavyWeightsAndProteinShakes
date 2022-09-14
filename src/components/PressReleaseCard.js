import React from "react";

function PressReleaseCard(props) {
    return (
        <div>
            <div className="highlight">
                <a href={props.el.alink} target="_blank" rel="noreferrer">
                    <img src={`src/images/${props.el.img}`} className="link" />    
                </a>
                <div className="link-text">{props.el.text}
                    <a href={props.el.link} target="_blank" rel="noreferrer">...{props.el.more}</a>
                </div>
            </div>
        </div>
    )
}

export default PressReleaseCard;