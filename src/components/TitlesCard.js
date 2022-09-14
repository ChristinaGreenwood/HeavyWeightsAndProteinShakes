import React from "react";

function TitlesCard({card}) {
    const titles = () => {
        return card.titles.map((title) => {
            return (
                <div className="about-text">{title}</div>
            )
        })
    }
    return (
            <div className="about-title">
                <div className="item-one item-image">
                  {card.img && <img src={card.img} className="title-images"></img>}
                </div> 
                <div className="item-one">
                    {titles()}
                </div>
            </div>
    )
}

export default TitlesCard;