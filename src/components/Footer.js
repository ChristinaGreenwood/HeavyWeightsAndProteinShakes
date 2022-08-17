import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div className="insta-block">
               <div>Instagram</div>
               <img src="src/images/insta-pic-demo.png" className="insta-pic-demo" />
            </div>
            <div className="contact">
                <h2>Lets connect!</h2>
                <a>testemail.domain.com</a>
                <a>(555)-555-5555</a>
                <a>PDF'S</a>
                <a>Join the team 1</a>
            </div>


        </div>
    )
}
export default Footer;