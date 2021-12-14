import React from 'react';
import "./Footer.scss";
import { FaGithubSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { BsMedium } from 'react-icons/bs';

const Footer = () => {
    return (
        <div id="footer__container">
            <h3 className="goodbye">thanks for stopping by!</h3>
            <h4 className="tagline">have a great day, and we'll see you soon!</h4>
            <footer className="footer-links">
                <a href="https://github.com/mdhowey" target={"blank"}><FaGithubSquare /></a>
                <a href="https://www.linkedin.com/in/dev-howey/" target={"blank"}><BsLinkedin /></a>
                <a href="https://medium.com/@dev.howey" target={"blank"}><BsMedium /></a>
            </footer>
        </div>
    )
}

export default Footer
