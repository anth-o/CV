import React from "react";
import "./Competences.scss";
import HTMLLogo from "../../img/HTMLLogo.png";
import CSSLogo from "../../img/CSSLogo.png";
import JSLogo from "../../img/JSLogo.png";
import ReactLogo from "../../img/ReactLogo.png";
import NodejsLogo from "../../img/NodejsLogo.png";
import MongoDBLogo from "../../img/MongodbLogo.png";
import SassLogo from "../../img/SassLogo.png";

function Competences() {
    return (
        <section className="section-competences" id="competences">
            <h3 className="competences-title">Mes compétences</h3>
            <div className="container">
                <div className="skill-box">
                    <span className="title"><img src={HTMLLogo} alt="HTML Logo" className="logo"/>HTML5</span>
                    <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">80%</span>
                    </span>
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title"><img src={CSSLogo} alt="HTML Logo" className="logo"/>CSS3</span>
                    <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">70%</span>
                    </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title"><img src={JSLogo} alt="HTML Logo" className="logo"/>JavaScript</span>
                    <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">50%</span>
                    </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title"><img src={ReactLogo} alt="HTML Logo" className="logo"/>React</span>
                    <div className="skill-bar">
                    <span className="skill-per react">
                        <span className="tooltip">50%</span>
                    </span>
                    </div>
                </div>
            </div>
            <div className="competences-container-carre">
                <div className="competence-carre">
                    <img src={NodejsLogo} alt="Node.js logo" />
                    <p>Node.js</p>
                </div>
                <div className="competence-carre">
                    <img src={MongoDBLogo} alt="MongoDB logo" />
                    <p>MongoDB</p>
                </div>
                <div className="competence-carre">
                    <img src={SassLogo} alt="Sass logo" />
                    <p>Sass</p>
                </div>
            </div>
        </section>
    )
}

export default Competences