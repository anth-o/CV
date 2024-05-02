import React from "react";
import "./Presentation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faUser, faCar, faCity, faFutbol, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import CVpdf from "../../img/CVDumaineAnthony.pdf";
import OPCLogo from "../../img/Logo_OpenClassrooms.png";

function Presentation() {  
    return(
        <section className="presentation">
            <h3 className="presentation__title">Présentation</h3>
            <div className="presentation__container">
                <div className="presentation__container__list">
                    <ul>
                        <li><FontAwesomeIcon icon={faUser} className="presentation__container__list__icone"/>Dumaine Anthony</li>
                        <li><FontAwesomeIcon icon={faCalendarDays} className="presentation__container__list__icone"/>19 ans</li>
                        <li><FontAwesomeIcon icon={faCar} className="presentation__container__list__icone"/>Permis B - A2</li>
                        <li><FontAwesomeIcon icon={faCity} className="presentation__container__list__icone"/>Nice</li>
                        <li><FontAwesomeIcon icon={faFutbol} className="presentation__container__list__icone"/>Handball, automobile, informatique</li>
                    </ul>
                </div>
                <div className="presentation__container__div-text">
                    <h4 className="presentation__container__text">Après avoir entamé un BUT en informatique 2022, l'environnement scolaire ne me convenait plus. Cependant, ayant toujours un intérêt pour le domaine de l'informatique, j'ai décidé de me former.</h4>
                </div>
                <div className="presentation__container__div-opc">
                    <div className="presentation__container__div-opc__title"><img className="OPC-Logo" src={OPCLogo} alt="Logo OpenClassrooms" /><FontAwesomeIcon icon={faCertificate} className="icone-certificate"/><h4>Formation "Développeur Web"</h4></div>
                    <h5 className="presentation__container__div-opc__sous-title">Différents cours suivies :</h5>
                    <ul>
                        <li><a href="https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete">Création d'app <strong>React</strong> complète</a></li>
                        <li><a href="https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb">Passage full stack avec <strong>Node.js, Express et MongoDB</strong></a></li>
                        <li><a href="https://openclassrooms.com/fr/courses/5561431-augmentez-votre-trafic-grace-au-referencement-naturel-seo"><strong>SEO</strong>, référencement naturel</a></li>
                        <li>Et bien d'autres</li>
                    </ul>
                </div>
            </div>
            <div className="presentation__button__container">
                <Link to="contact" smooth={true} duration={1000} offset={-50}><button className="presentation__button">Me contacter</button></Link>
                <a href={CVpdf} target="_blank" rel="noopener noreferrer"><button className="presentation__button">Télécharger mon CV</button></a>
            </div>
        </section>
    )
}

export default Presentation