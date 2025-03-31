import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

const Footer = () => {
  return (
    <>
    
        <div className="bg-primary d-flex justify-content-center align-items-baseline gap-2 text-light fs-1 p-2">
          <TiSocialFacebook />
          <TiSocialInstagram />
          <TiSocialLinkedin />
          <TiSocialTwitter />
          <TiSocialYoutube />
        </div>
    </>
  );
};

export default Footer;
