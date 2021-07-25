import React from 'react';
import "./Email.css";

function Email() {
    return (
        <div className="email">
            <div className="sub_email">
                <p>Get our latest news & offers</p>
                <form action="/" autoComplete="off" method="post">
                    <input type="email" name="email" placeholder="EMAIL"/>
                    <button className="content_action">subscribe</button>
                </form>                                
            </div>
        </div>
    )
}

export default Email;
