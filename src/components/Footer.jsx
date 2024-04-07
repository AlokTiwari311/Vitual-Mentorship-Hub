import React from "react";


const Footer = () => {
    return (
        <footer className="bg-[#2BB17A]">
            <div className="footer bg-transparent">
                <div className="row
                ">
                    <a href="#fb"><i className="fa fa-facebook"></i></a>
                    <a href="#insta"><i className="fa fa-instagram"></i></a>
                    <a href="#youtube"><i className="fa fa-youtube"></i></a>
                    <a href="#twitter"><i className="fa fa-twitter"></i></a>
                </div>

                <div className="row">
                    <ul>
                        <li><a href="/contact">Contact us</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="#Privacy">Privacy Policy</a></li>
                        <li><a href="#T&C">Terms & Conditions</a></li>
                        <li><a href="#Career">Career</a></li>
                    </ul>
                </div>

                <div className="row">
                    Vitual Mentorship hub Copyright © 2021 Vitual Mentorship hub - All rights reserved
                </div>
            </div>
        </footer >
    );
};

export default Footer;
