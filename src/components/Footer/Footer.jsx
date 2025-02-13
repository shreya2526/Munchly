import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { PiRedditLogoFill } from "react-icons/pi";
import { FaPinterest, FaYoutube } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src="/logo.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            temporibus laborum itaque nostrum inventore. A dignissimos provident
            odio labore, omnis eum, error reprehenderit suscipit officia natus
            ullam recusandae molestiae velit!
          </p>
          <div className="footer-social-icons">
            <FaFacebookF size={25} />
            <FaXTwitter size={25} />
            <AiFillInstagram size={25} />
            <FaLinkedinIn size={25} />
            <BiLogoTelegram size={25} />
            <PiRedditLogoFill size={25} />
            <FaPinterest size={25} />
            <FaYoutube size={25} />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <MdCall color="#ff4800" />
              +1-212-456-7890
            </li>
            <li>
              <BiLogoGmail color="#ff4800" />
              contact@munchly.com
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        <FaRegCopyright size={17} /> Copyright 2025 Munchly.com - All Right
        Reserved.
      </p>
    </div>
  );
};

export default Footer;
