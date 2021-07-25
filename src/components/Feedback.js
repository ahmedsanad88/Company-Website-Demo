import React, { useEffect } from 'react';
import "./Feedback.css";
import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';
import Aos from 'aos';
import 'aos/dist/aos.css'; 


function Feedback() {

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
        <div id="scroll" className="feedback">
            <div className="feedback_container">
                <div id="one" className="card" data-aos="zoom-out-up">
                    <div className="upper_card">
                        <div className="upper_cardLeft">
                            <Avatar alt="Logo" src={process.env.PUBLIC_URL + "images/customer1.jpg"} />
                        </div>
                        <div className="upper_cardRight">
                            <div className="card_pin">
                                <Avatar alt="Logo" src={process.env.PUBLIC_URL + "images/pins.svg"} style={{ width: "30px", height: "30px" }} />
                            </div>
                            <h3>Olivia</h3>
                            <div className="rating">
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                            </div>
                        </div>
                    </div>
                    <div className="lower_card">
                        <p>The best service Ever</p>
                    </div>
                </div>
                <div id="two" className="card" data-aos="zoom-out-up">
                    <div className="upper_card">
                        <div className="upper_cardLeft">
                            <Avatar alt="Logo" src={process.env.PUBLIC_URL + "images/customer2.jpg"} />
                        </div>
                        <div className="upper_cardRight">
                            <div className="card_pin">
                                <Avatar alt="Logo" src={process.env.PUBLIC_URL + "images/pins.svg"} style={{ width: "30px", height: "30px" }} />
                            </div>
                            <h3>William</h3>
                            <div className="rating">
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                            </div>
                        </div>
                    </div>
                    <div className="lower_card">
                        <p>You change my life guys, I'm now living my life while making money.</p>
                    </div>
                </div>
                <div id="three" className="card" data-aos="zoom-out-up">
                    <div className="upper_card">
                        <div className="upper_cardLeft">
                            <Avatar alt="Logo" src={process.env.PUBLIC_URL + "images/customer3.jpg"} />
                        </div>
                        <div className="upper_cardRight">
                            <div className="card_pin">
                                <Avatar alt="Logo" src={process.env.PUBLIC_URL + "images/pins.svg"} style={{ width: "30px", height: "30px" }} />
                            </div>
                            <h3>Sophia</h3>
                            <div className="rating">
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                            </div>
                        </div>
                    </div>
                    <div className="lower_card">
                        <p>Did a great job what a plan thanks so much ❤️</p>
                    </div>
                </div>
                <div id="four" className="card" data-aos="zoom-out-up">
                    <div className="upper_card">
                        <div className="upper_cardLeft">
                            <Avatar alt="Logo" src={process.env.PUBLIC_URL + "images/customer4.jpg"} />
                        </div>
                        <div className="upper_cardRight">
                            <div className="card_pin">
                                <Avatar alt="Logo" src={process.env.PUBLIC_URL + "images/pins.svg"} style={{ width: "30px", height: "30px" }} />
                            </div>
                            <h3>Noah</h3>
                            <div className="rating">
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                                <StarIcon style={{ color: '#FDCC0D' }}/>
                            </div>
                        </div>
                    </div>
                    <div className="lower_card">
                        <p>Whole my life and i'm thinking how will start my own business and you simply make it happen.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Feedback;
