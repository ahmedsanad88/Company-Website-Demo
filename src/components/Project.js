import React, { useEffect } from 'react';
import "./Project.css";
import Aos from 'aos';
import 'aos/dist/aos.css'; 

function Project() {

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
        <div className="project">
            <div className="all__projects">
                <div className="project__one">
                    <div className="project__oneImage" data-aos="fade-up-left">
                        <img src={process.env.PUBLIC_URL + "images/team.jpg"} alt="projects" />
                    </div>
                    <div className="project__oneText" data-aos="fade-up-right">
                        <p>
                            Our team of business and feasibility consultants, securities attorneys, investment banking and corporate finance professionals have helped thousands of companies raise capital and grow their business models. Our team of professionals is fluent in every aspect of the business life cycle. We take pride in our proven ability to offer the highest quality services and products, faster and at a lower cost than other firms in our industry.  Hundreds of companies have signed up to our Affiliate Program and outsourced their documentation through us.
                        </p>
                    </div>
                </div>
                <div className="project__two">
                    <div className="project__twoImage" data-aos="fade-up-left">
                        <img src={process.env.PUBLIC_URL + "images/step.jpg"} alt="projects" />
                    </div>
                    <div className="project__twoText" data-aos="fade-up-right">
                        <p>
                            Our team is comprised of seasoned financial industry professionals, including securities attorneys, business consultants and corporate finance experts.  Most of our staff and affiliates have been trained by the world’s most prestigious consulting firms and investment banks and/or have started or been involved in entrepreneurial ventures.  This broad scope of experience and intellectual knowledge gives us unique perspective and insight when working towards successful outcomes with our clients.
                        </p>
                    </div>
                </div>
                <div className="project__three">
                    <div className="project__oneImage" data-aos="fade-up-left">
                        <img src={process.env.PUBLIC_URL + "images/manage.jpg"} alt="projects" />
                    </div>
                    <div className="project__oneText" data-aos="fade-up-right">
                        <p>
                            We are a one-stop company for all your feasibility study, prospectus, business plan or offering document needs. Our team has been involved in literally thousands of projects.  We have set the bar high for feasibility study performance, taking into consideration time constraints and budgets. We pride ourselves on offering superior service – not just on a local or national level but on a global scale – at a fraction of the cost of our competitors and usually twice as fast. We give our clients the tools they need to make an educated decision about the business opportunity at hand by producing a market driven, financially conscience feasibility study. The success of our clients is the number goal of our company.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
