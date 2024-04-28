import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import JsonProjets from "../../datas/projets.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {

    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        setPortfolio(JsonProjets)
    }, []);

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="portfolio" id="Portfolio">
            <h2 className="portfolio-title">Mes projets</h2>
            <div className="portfolio-container">
                {portfolio.map(project => (
                    <div key={project.id} className="card">
                        <img className="card__img" src={project.cover} alt={project.title} />
                        <div className="card__gradient"></div>
                        <h2 className="card__title">{project.title}</h2>
                        <div className="card__overlay"></div>
                        <button onClick={() => openModal(project)} className="card__btn">Click</button>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <div className="modal">
                    <div className="modal__content">
                        <div className="modal__btn-close"><FontAwesomeIcon icon={faXmark} onClick={closeModal}/></div>
                        <h2 className="modal__title">{selectedProject.title}</h2>
                        <div className="modal__tags">
                            {selectedProject.techno.map((tech, index) =>
                                <p key={index} className="modal__tag">{tech}</p>)}
                        </div>
                        <div className="modal__contexte">
                            <h3>Contexte</h3>
                            <p>{selectedProject.contexte}</p>
                        </div>
                        <hr></hr>
                        <div className="modal__description">
                            <h3>Description</h3>
                            <p>{selectedProject.contexte}</p>
                        </div>
                        
                    </div>
                </div>
            )}
        </section>
    )
}

export default Portfolio