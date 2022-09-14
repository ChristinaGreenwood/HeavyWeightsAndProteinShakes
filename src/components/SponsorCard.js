import React from "react";

function SponsorCard(props) {
    return (
        <div className="sponsors">
        <div className="sponsors-img">
            <img src={`src/images/${props.sponsor.img}`} className="companies" />
        </div>
        <div className="sponsors-text">
            <ul>
                <li>{props.sponsor.comp} <p>{props.sponsor.code}</p></li> 
                <a href={props.sponsor.link}>Website</a>
            </ul>
        </div>
    </div>
    )
}

export default SponsorCard;