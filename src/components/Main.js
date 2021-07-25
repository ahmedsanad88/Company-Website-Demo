import React, { useEffect } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './Main.css';
import Aos from 'aos';
import 'aos/dist/aos.css'; 



function Main() {

    useEffect(() => {
        // initailize Aos
        Aos.init({
            duration: 2000
        });
        // make sure it's applying only one
        Aos.init({
            once: true,
        });
    }, []);

    return (
        <div className="main"> 
            <div className="main__container">
                <div className="text" data-aos="fade-right">
                    <div className="company">
                        <h2>BUSINESS STARTUP.COM</h2>
                        <small>Strategic Capital Growth</small>
                    </div>
                    <h1>BUILD YOUR GROWTH BUSINESS NOW...</h1>
                    <span>Why Write a Financial or Market Feasibility Study?</span>
                    <p>Writing a professional feasibility study is good business practice, especially for companies that are planning on raising many millions of dollars and want to have the knowledge readily available to make an educated decision about a projects viabilityproject. By creating such a feasibility study, for instance, for a real estate project, you will be able to navigate potential pitfalls during development and save needed capital in the process, as well as possibly discover new opportunities in the market.</p>
                    <button className="start-btn">START NOW</button>
                </div>
                <div className="image" data-aos="fade-left">
                    <img src={window.location.origin + '/images/business_plan.svg'} alt="Business plan" />
                </div>
                <div className="logos">
                    <div>
                        <h3>CUSTOMERS</h3>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pylons_Project_logo_on_transparent_background.png" alt="customers" />
                    <img src="https://abilityonline.org/sites/default/files/media_assets/gradient_horizontal__600x215_alpha.png" alt="customers" />
                    <img src="https://cdn-news.warriortrading.com/wp-content/uploads/2015/07/19183706/Priceline.com-Logo-Transparent-Background.png" alt="customers" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Planet_logo_New.png/1280px-Planet_logo_New.png" alt="customers" />
                </div>
            </div>
            <div className="socialMedia" data-aos="fade-down-left">
                <FacebookIcon id="facebook"/>
                <TwitterIcon id="twitter"/>
                <InstagramIcon id="instagram"/>
                <YouTubeIcon id="youtube"/>
            </div>
        </div>
    )
}

export default Main;
