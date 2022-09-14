import React from "react";
import PressReleaseCard from "./PressReleaseCard";
import PressReleaseData from "./PressReleaseData";

function PressRelease() {
    const pressReleaseElement = PressReleaseData.map((el) => {
        return <PressReleaseCard 
        key={el.id}
        el= {el}
        />
    })


    return (
        <div className="bottomLinks">
        <h1 className="title">PRESS RELEASE</h1>
        <div className="highlight-wrapper">
            {pressReleaseElement}
            </div>
        </div>
    )
}
export default PressRelease;