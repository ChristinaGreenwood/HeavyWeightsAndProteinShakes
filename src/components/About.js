import React from "react";
import {FaStar} from 'react-icons/fa'
import TitlesCard from "./TitlesCard";
import titleCardData from "./titleCardData"; 


function About() {
    const cardElement = titleCardData.map((card) => {
        return <TitlesCard 
            key={card.id}
            card={card}
        />
    })

    return(
        <div className="about-section">
            <div className="award"> Awards and Titles </div>
            <div className="about-wrapper">
                {cardElement}
            </div>
        </div>
    )
}

export default About