import React from "react";
import SponsorCard from "./SponsorCard";
import sponsorsData from "./sponsorsData";


function Sponsors() {
    const sponserElement = sponsorsData.map((sponsor) => {
        return <SponsorCard
        key={sponsor.id}
        sponsor={sponsor}
        />
    })
    return (
        <div className="sponsors-wrapper">
            <h1 className="title-spon">Rebekah would like to thank her following Sponsors</h1>
            <div className="sponsors-grid"> 
                {sponserElement}

            </div>
            
        </div>
    )
}

export default Sponsors;