import React, { useEffect } from 'react';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import "./Contact.css";
import Aos from 'aos';
import 'aos/dist/aos.css'; 

function Contact() {

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
        <div className="contact">
            <div className="sub_contact" data-aos="fade-up">
                <div className="left_side">
                    <div className="content">
                        <h3>start your dream</h3>
                        <div className="address">
                            <MyLocationIcon />
                            <p>Egypt, Cairo, 5th Square, near to AUC, building 88</p>
                        </div>
                        <div className="call">
                            <PhoneIphoneIcon />
                            <p>02xxxxxxx OR 02xxxxxxx</p>
                        </div>
                    </div>
                </div>            
                <div className="right_side">
                    <form action="/" autoComplete="off" method="post">
                        <input id="firstInput" type="text" name="name" placeholder="FULL NAME"/>
                        <input type="email" name="email" placeholder="EMAIL"/>
                        <input type="text" name="number" placeholder="MOBILE NUMBER"/>
                        <textarea name="textArea" rows="4" cols="50" placeholder="COMMENT"></textarea>
                        <button className="content_action">Let's Talk</button>
                    </form>                                
                </div>

            </div>
        </div>
    )
}

export default Contact;
