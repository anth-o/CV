import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__link">
                <a href="mailto:a.dumaine@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="https://github.com/anth-o"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <div className="footer__text">
                <p>© 2024 Anthony Dumaine</p>
                <p>Tous droits réservés.</p>
            </div>
        </footer>
    )
}

export default Footer