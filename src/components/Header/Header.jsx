import React, { useState } from "react";
import './Header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="header">
            <nav className={`header__navbar ${isOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <a href="#">Présentation</a>
                    </li>
                    <li>
                        <a href="#">Compétences</a>
                    </li>
                    <li>
                        <a href="#Portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">A propos</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div onClick={handleClick} className={`header__mobile-icone ${isOpen ? "open" : ""}`}><FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="icone-menu" /></div>
            </nav>
        </header>
    )
}

export default Header