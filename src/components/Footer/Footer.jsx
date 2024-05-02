import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer__contact__container">
                <h3 className="footer__title">Contact</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faLocationDot} className="footer__contact__icone iconeFirst"/>  Nice, France</li>
                    <li><FontAwesomeIcon icon={faEnvelope} className="footer__contact__icone"/><a href="mailto:contact.dumaine@gmail.com" title="Mon adresse mail">contact.dumaine@gmail.com</a></li>
                    <li><FontAwesomeIcon icon={faPhone} className="footer__contact__icone"/> <a href="tel:[+33]0782632647" title="Mon numéro de téléphone">+33 7 82 63 26 47</a></li>
                </ul>
            </div>
            <div className="footer__text">
                <p>Anthony Dumaine | © 2024 Tous droits réservés.</p>
            </div>
        </footer>
    )
}

export default Footer