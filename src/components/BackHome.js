import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import "./BackHome.css";


function BackHome() {

    // When the user scrolls down 50px from the top of the document, show the button
    window.onscroll = function() {
        let intViewportWidth = window.innerWidth;
        let mybutton = document.getElementById("myBtn");
        if (intViewportWidth >= 0 && intViewportWidth <= 800) {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }            
        } else {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
    };

    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div className="backHome" id="myBtn">
            <button className="arrowUp" onClick={backToTop} style={{color:"rgb(62, 65, 221)",fontSize:"xx-large"}} ><ArrowUpwardIcon /></button>
        </div>
    )
}

export default BackHome;
