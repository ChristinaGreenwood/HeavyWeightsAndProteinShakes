import React from "react";
import {FaInstagram} from 'react-icons/fa'

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <div className="bar">
                   <img src="src/images/logo9:12:22.001.png" className="logo-img" />
                    {/* <a  href="https://www.instagram.com/heavyweights_n_proteinshakes/?utm_source=ig_embed&ig_rid=e85327fc-7b1a-408c-aeb0-f5cb39f37ae7" target="_blank" rel="noreferrer">@heavyweights_n_proteinshakes</a> */}
                </div>
                <div className="inst-icon"> 
                    <a href="https://www.instagram.com/heavyweights_n_proteinshakes/?utm_source=ig_embed&ig_rid=e85327fc-7b1a-408c-aeb0-f5cb39f37ae7" target="_blank" rel="noreferrer"><FaInstagram  className="icon"/> </a>
                </div> 
            </div>
        </nav>
    )
}

export default NavBar;