import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
          <div className="container">
            <div className="footir_row">
                <div className="footir_all">
                   
                    <p>
                    Finstreet 118 2561 Fintown
                    </p>
                    <h3>Hello@finsweet.com  020 7993 2905</h3>
                </div>
                <div className="footir_all">
                    <div className="img">
                    <div className="img_all">
                        <FaInstagram />
                        </div>
                        <div className="img_all">
                        <CiFacebook />
                        </div>
                        <div className="img_all">
                        <FaGithub />
                        </div>
                        <div className="img_all">
                        <PiPaperPlaneTilt />    
                        </div>
                    </div>
                </div>
            </div>
          </div>
            </footer>
        </div>
    );
}

export default Footer;
