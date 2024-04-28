import React from "react";
import "./Portfolio.scss";
import KasaImg from "../../img/Kasa.png";
import BookiImg from "../../img/Booki.png";
import SophieBluelImg from "../../img/SophieBluel.png";
import MenuMakerImg from "../../img/MenuMaker.png";
import NinaCarducciImg from "../../img/NinaCarducci.png";
import MonVieuxGrimoireImg from "../../img/MonVieuxGrimoire.png";

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio-title">Mes projets</h2>
            <div className="portfolio-container">
                <div className="card">
                    <img className="card__img" src={KasaImg} alt="Site Kasa" />
                    <div className="card__gradient"></div>
                    <h2 className="card__title">Kasa</h2>
                    <div className="card__overlay"></div>
                    <button className="card__btn">Click</button>
                </div>
                <div className="card">
                    <img className="card__img" src={BookiImg} alt="Site Booki" />
                    <div className="card__gradient"></div>
                    <h2 className="card__title">Booki</h2>
                    <div className="card__overlay"></div>
                    <button className="card__btn">Click</button>
                </div>
                <div className="card">
                    <img className="card__img" src={SophieBluelImg} alt="Site Sophie Bluel" />
                    <div className="card__gradient"></div>
                    <h2 className="card__title">Sophie Bluel</h2>
                    <div className="card__overlay"></div>
                    <button className="card__btn">Click</button>
                </div>
                <div className="card">
                    <img className="card__img" src={MenuMakerImg} alt="Projet Menu Maker" />
                    <div className="card__gradient"></div>
                    <h2 className="card__title">Menu Maker</h2>
                    <div className="card__overlay"></div>
                    <button className="card__btn">Click</button>
                </div>
                <div className="card">
                    <img className="card__img" src={NinaCarducciImg} alt="Site Nina Carducci" />
                    <div className="card__gradient"></div>
                    <h2 className="card__title">Nina Carducci</h2>
                    <div className="card__overlay"></div>
                    <button className="card__btn">Click</button>
                </div>
                <div className="card">
                    <img className="card__img" src={MonVieuxGrimoireImg} alt="Site Mon Vieux Grimoire" />
                    <div className="card__gradient"></div>
                    <h2 className="card__title">Mon Vieux Grimoire</h2>
                    <div className="card__overlay"></div>
                    <button className="card__btn">Click</button>
                </div>
            </div>
        </section>
    )
}

export default Portfolio