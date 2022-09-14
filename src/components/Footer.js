import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div className="insta-block">
            <div className="highlight">
                <a href="https://www.instagram.com/heavyweights_n_proteinshakes/?utm_source=ig_embed&ig_rid=e85327fc-7b1a-408c-aeb0-f5cb39f37ae7" target="_blank" rel="noreferrer">
                    <img src="src/images/insta.jpg" className="footer-img" />    
                </a>
                <div className="inst-text">Check out all the fun we are up to on instagram.
                    <a href="https://www.instagram.com/heavyweights_n_proteinshakes/?utm_source=ig_embed&ig_rid=e85327fc-7b1a-408c-aeb0-f5cb39f37ae7" target="_blank" rel="noreferrer">...Instagram</a>
                </div>
            </div>
            </div>
            <div className="contact">
                {/* <h1>Lets connect!</h1> */}
                <a href="mailto:rebekahrasmussen@hotmail.com">interested in becoming a sponsor or want to collab?  Contact me! rebekahrasmussen@hotmail.com</a>
                    {/* <img src="src/images/venmo.png" className="button" /> */}
                                    <p>(801)-787-5834</p>

            </div>


        </div>
    )
}
export default Footer;