import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { HiMailOpen } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

function Footer() {
  return (
    <div className='footer-main'>
      <div className='footer'>
        <div className='footer-contact'>
          <h1>Contact</h1>
          <div className='contact'>
            <a href='mailto:rebekahrasmussen@hotmail.com'>
              Interested in becoming a sponsor or want to collab? Contact me!
              rebekahrasmussen@hotmail.com
            </a>
            <p>(801)-787-5834</p>
          </div>
        </div>
        <div className='foot-spon'>
          <h1>Sponsors</h1>
          <a
            className='foot-spon-link'
            href='https://www.buckedup.com/'
            target='_blank'
            rel='noreferrer'
          >
            Bucked up
          </a>
          <a
            className='foot-spon-link'
            href='https://reviveinfrared.com/'
            target='_blank'
            rel='noreferrer'
          >
            Revive Infrared Sauna
          </a>
          <a
            className='foot-spon-link'
            href='https://rockwelltime.com/pages/mens-v2'
            target='_blank'
            rel='noreferrer'
          >
            Rockwell Watches
          </a>
          <a
            className='foot-spon-link'
            href='https://dexabody.com/'
            target='_blank'
            rel='noreferrer'
          >
            Dexabody
          </a>
          <a
            className='foot-spon-link'
            href='https://frugllfitness.com/'
            target='_blank'
            rel='noreferrer'
          >
            FRUGLL FITNESS
          </a>
        </div>
        <div className='footer-soc-icon-wrapper'>
          <div className='footer-soc-icon'>
            <a
              href='https://www.instagram.com/heavyweights_n_proteinshakes/?utm_source=ig_embed&ig_rid=e85327fc-7b1a-408c-aeb0-f5cb39f37ae7'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillInstagram className='foot-icon' />{" "}
            </a>
            <a
              href='mailto:rebekahrasmussen@hotmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <HiMailOpen className='foot-icon' />{" "}
            </a>
            <a href='tel:(801)-787-5834' target='_blank' rel='noreferrer'>
              <AiFillPhone className='foot-icon' />{" "}
            </a>
            <a href='sms://+18017875834' target='_blank' rel='noreferrer'>
              <MdMessage className='foot-icon' />{" "}
            </a>
          </div>
          <div className='insta-block'>
            <div className='highlight'>
              <a
                href='https://www.instagram.com/heavyweights_n_proteinshakes/?utm_source=ig_embed&ig_rid=e85327fc-7b1a-408c-aeb0-f5cb39f37ae7'
                target='_blank'
                rel='noreferrer'
              >
                <img src='src/images/insta.jpg' className='footer-img' />
              </a>
              <div className='inst-text'>
                Check out all the fun we are up to on instagram.
                <a
                  href='https://www.instagram.com/heavyweights_n_proteinshakes/?utm_source=ig_embed&ig_rid=e85327fc-7b1a-408c-aeb0-f5cb39f37ae7'
                  target='_blank'
                  rel='noreferrer'
                >
                  ...Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
        © 2022 heavyweightsandproteinshakes.com. All Rights Reserved
      </div>
    </div>
  );
}
export default Footer;
