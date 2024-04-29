import React, { useState } from "react";
import './Header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="header">
            <nav className={`header__navbar ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><Link to="presentation" smooth={true} duration={1000} offset={-50}>Présentation</Link></li>
                    <li><Link to="portfolio" smooth={true} duration={1000} offset={-50}>Portfolio</Link></li>
                    <li><Link to="competences" smooth={true} duration={1000} offset={-50}>Compétences</Link></li>
                    <li><Link to="contact" smooth={true} duration={1000} offset={-50}>Contact</Link></li>
                </ul>
                <div onClick={handleClick} className={`header__mobile-icone ${isOpen ? "open" : ""}`}><FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="icone-menu" /></div>
            </nav>
        </header>
    )
}

export default Header