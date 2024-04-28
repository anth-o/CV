import React from "react";
import "./Presentation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faUser, faCar, faCity, faFutbol } from "@fortawesome/free-solid-svg-icons";

function Presentation() {
    return(
        <section className="presentation">
            <h3 className="presentation__title">Présentation</h3>
            <div className="presentation__container">
                <div className="presentation__container__list">
                    <ul>
                        <li><FontAwesomeIcon icon={faUser} className="presentation__container__list__icone"/> <span className="presentation__container__list__span">Nom :</span> Dumaine Anthony</li>
                        <li><FontAwesomeIcon icon={faCalendarDays} className="presentation__container__list__icone"/> <span className="presentation__container__list__span">Age :</span> 19 ans</li>
                        <li><FontAwesomeIcon icon={faCar} className="presentation__container__list__icone"/><span className="presentation__container__list__span">Permis :</span> B - A2</li>
                        <li><FontAwesomeIcon icon={faCity} className="presentation__container__list__icone"/><span className="presentation__container__list__span">Ville :</span> Nice</li>
                        <li><FontAwesomeIcon icon={faFutbol} className="presentation__container__list__icone"/><span className="presentation__container__list__span">Hobbies :</span> Handball, automobile, informatique</li>
                    </ul>
                </div>
                <div className="presentation__container__div-text">
                    <p className="presentation__container__text">Après avoir entamé un BUT en informatique 2022, l'environnement scolaire ne me convenait plus. J'ai donc décidé de poursuivre ma formation dans le même domaine en suivant la formation "Développeur Web" proposée par OpenClassrooms.</p>
                </div>
            </div>
            <div className="presentation__button__container">
                <button className="presentation__button">Me contacter</button>
                <button className="presentation__button">Télécharger mon CV</button>
            </div>
        </section>
    )
}

export default Presentation