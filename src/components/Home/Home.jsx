import React, { useEffect, useState } from "react";
import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    
    return (
        <section>
            <div className={`home ${isVisible ? 'visible' : ''}`}>
                <h1 className="home__name">Anthony Dumaine</h1>
                <h2 className="home__dev"><FontAwesomeIcon icon={faCode} className="icone__dev"/><span>Développeur web</span></h2>
            </div>
            <div className="div-chevron">
                <Link to="presentation" smooth={true} duration={1000} offset={-50}><FontAwesomeIcon icon={faChevronDown} className="home__chevron"/></Link>
            </div>
        </section>
    );
}

export default Home;