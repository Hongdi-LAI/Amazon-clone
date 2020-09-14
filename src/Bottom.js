import React from 'react'
import './Bottom.css'

function Bottom() {

    //Back to Top button functionality
    //const BackToTopBtn = document.getElementById('BackToTopBtn');
    const topFunction = () => {
        document.body.scrollTop = 0; //for Safari
        document.documentElement.scrollTop = 0; //for Chrome, Firefox, IE and Opera
    }

    return (
        <div className = "bottom">
            <button 
            className="bottom__button"
            onClick={topFunction}
            id="BackToTopBtn"    
            >
                Back to Top
            </button>
            <div className = "bottom__info">
                <div className = "bottom__infoDatail">
                    <h2>Get To Know Us</h2>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>About Amazon</p>
                    <p>Amazon Devices</p>
                </div>
                <div className = "bottom__infoDatail">
                    <h2>Earn Money</h2>
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon Accelerator</p>
                    <p>Become a Partner</p>
                    <p>Promote your Product</p>
                    <p>Amazon Pay</p>
                </div>
                <div className = "bottom__infoDatail">
                    <h2>Amazon Payment Product</h2>
                    <p>Payment Cards</p>
                    <p>Payment in Installments</p>
                    <p>Amazon Currency Converter</p>
                    <p>Gift Certificate</p>
                    <p>Online Recharge</p>
                </div>
                <div className = "bottom__infoDatail">
                    <h2>Let Us Help You</h2>
                    <p>Your Orders</p>
                    <p>Shipping Rates & Policies</p>
                    <p>Info about Our Marketplace</p>
                    <p>Customer Service</p>
                </div>
            </div>
            <div className = "bottom__copyright">
                <span> © 1996-2020, Amazon.com, Inc. or its affiliates. </span>
            </div>
        </div>

        
    )
}

export default Bottom
