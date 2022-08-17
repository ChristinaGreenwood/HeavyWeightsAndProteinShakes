import React from "react";

function BottomLinks() {
    return (
        <div className="highlight-wrapper">
                <div className="highlight">
                    <a href="http://rebekah2021.com" target="_blank" rel="noreferrer">
                        <img src="src/images/event.jpg"
                        className="link" />    
                    </a>
                    <div className="link-text">Rebekah Rasmussen returned to Natural Olympia with a goal in mind and left with a gold medal. 
                        <a href="http://rebekah2021.com" target="_blank" rel="noreferrer">...Read the article</a>
                    </div>
                </div>

                <div className="highlight">
                    <a href="https://www.instagram.com/heavyweights_n_proteinshakes/?utm_source=ig_embed&ig_rid=e85327fc-7b1a-408c-aeb0-f5cb39f37ae7" target="_blank" rel="noreferrer">
                        <img src="src/images/insta.jpg"
                        className="link" />    
                    </a>
                    <div className="link-text">Check out all the fun we are up to on instagram.
                        <a href="https://www.instagram.com/heavyweights_n_proteinshakes/?utm_source=ig_embed&ig_rid=e85327fc-7b1a-408c-aeb0-f5cb39f37ae7" target="_blank" rel="noreferrer">...Instagram</a>
                    </div>
                </div>

                <div className="highlight">
                    <a href="http://rebekah2021.com" target="_blank" rel="noreferrer">
                        <img src="src/images/tips.jpg"
                        className="link" />    
                    </a>
                    <div className="link-text">pdf, tips, and more
                        <a href="http://rebekah2021.com" target="_blank" rel="noreferrer">...Read Me</a>
                    </div>
                </div>
                
            </div>
    )
}
export default BottomLinks;