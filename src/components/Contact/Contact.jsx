import React from "react";
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return(
        <section className="contact">
            <div className="contact__container">
                <h2>Contact</h2>
                <ul>
                    <li><FontAwesomeIcon icon={faLocationDot} className="contact__icone iconeFirst"/>  Nice, France</li>
                    <li><FontAwesomeIcon icon={faEnvelope} className="contact__icone"/><a href="mailto:contact.dumaine@gmail.com" title="Mon adresse mail">contact.dumaine@gmail.com</a></li>
                    <li><FontAwesomeIcon icon={faPhone} className="contact__icone"/> <a href="tel:[+33]0782632647" title="Mon numéro de téléphone">+33 7 82 63 26 47</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Contact