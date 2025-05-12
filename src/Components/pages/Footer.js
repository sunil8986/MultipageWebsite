import React from "react";
import { Container, Button } from "react-bootstrap";
import { NavLink } from "react-router";
import { FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <div  id="footer">
        <Container>
            <section className="contact-short">
                <div className="grid grid-two-column">
                    <div>
                        <p>Ready to get started?</p>
                        <p>Talk to us today</p>
                    </div>

                    <div className="contact-short-btn">
                        <NavLink to="/">
                            <Button>Contact Us</Button>
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* footer section  */}

            <footer>
                <div className="container grid grid-four-column">
                    <div className="footer-about">
                        <h3>Company Info</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="footer-subscribe">
                        <h3>Subscribe to get important updates</h3>
                        <form action="#">
                            <input
                                type="email"
                                required
                                autoComplete="off"
                                placeholder="Email"
                                className="form-control"
                            />
                            <input type="submit" value="Subscribe" className="btn" />
                        </form>
                    </div>

                    <div className="footer-social">
                        <h3>Follows Us</h3>
                        <div className="footer-social--icons">
                            <div>
                                <FaDiscord className="icons" />
                            </div>
                            <div>
                                <FaInstagram className="icons" />
                            </div>
                            <div>
                                <FaYoutube className="icons" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h3>Call Us</h3>
                        <p>+91 96******36</p>
                    </div>
                </div>

                {/* bottom section  */}
                <div className="footer-bottom--section">
                    
                    <div className="container grid grid-two-column">
                        <p>@{new Date().getFullYear()} S S. All Rights Reserved</p>
                        <div>
                            <p>Privacy Policy | Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Container>
        </div>
    );
};

export default Footer;
