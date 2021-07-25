import React from 'react';
import "./Footer.css";
import IconButton from '@material-ui/core/IconButton';
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();


    return (
        <div className="footer">
            <div className="sub_footer">
                <div className="footer_content">
                    <div className="contentOne">
                        <p>About us</p>
                        <p>Feedback</p>
                        <p>Community</p>
                    </div>
                    <div className="contentTwo">
                        <p>Trust, Safety & Security</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="contentThree">
                        <p>Help & Support</p>
                        <p>Accessibility</p>
                        <p>Cookie Policy</p>
                    </div>
                </div>
                <div className="footer_social">
                    <small>Follow us</small>
                    <div className="footer_socialIcons">
                        <IconButton>
                            <FacebookIcon className="socialIcons"/>
                        </IconButton>
                        <IconButton>
                            <InstagramIcon className="socialIcons"/>
                        </IconButton>
                        <IconButton>
                            <TwitterIcon className="socialIcons"/>
                        </IconButton>
                        <IconButton>
                            <YouTubeIcon className="socialIcons"/>
                        </IconButton>
                    </div>
                </div>
                <div className="footer_tradeMark">
                    <CopyrightIcon  className="tradeMark"/> <small>{year}</small> - <small>BUSINESS STARTUP.COM</small>
                </div>
            </div>
        </div>
    )
}

export default Footer;
