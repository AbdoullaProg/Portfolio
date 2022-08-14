// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// == Import
import './style.scss';

// == Composant
const Works = () => {
    return(
        <div className="works">
            <h2 className="title">
                <span>Une partie</span> de mes derniers projets
            </h2>
            <div className="container-work">
                <div className="work" data-aos="fade-up">
                <div className="infos-container">
                    <span className="infos">Recherche</span>
                    <span className="infos">Developpement</span>
                    <span className="infos">Optimisation</span>
                </div>
                <div className="container-advent">
                    <h2 className="title">
                        SwITch
                    </h2>
                    <p className="text">Un site web E-commerce, avec achat et ventes de produits. Connexion et inscription suivie de la commande, paiement via le site. </p>
                </div>
                <div className="btn-container">
                    <Link to={'/project-1'} className="btn">voir plus</Link>
                </div>
                </div>

                <div className="work" data-aos="fade-up">
                <div className="infos-container">
                    <span className="infos">Infrasctructure</span>
                    <span className="infos">Designe</span>
                    <span className="infos">Developement</span>
                </div>
                <div className="container-advent">
                    <h2 className="title">
                        Sekural
                    </h2>
                    <p className="text">Une plateforme pour les agents de sécurité et pour les entreprises de sécurité. Les entreprises postent des missions et les agents peuvent y postuler, abonement mensuel.</p>
                </div>
                <div className="btn-container">
                    <Link to={'/project-2'} className="btn">voir plus</Link>
                </div>
                </div>

                <div className="work nature" data-aos="fade-up">
                    <div className="infos-container">
                        <span className="infos">Designe</span>
                        <span className="infos">Developpement</span>
                        <span className="infos">Optimisation</span>
                    </div>
                    <div className="container-advent">
                        <h2 className="title">
                            Isa-miel
                        </h2>
                        <p className="text">Site vitrine pour un particulier qui vend du miel en provenance de Norvège</p>
                    </div>
                    <div className="btn-container">
                        <Link to={'/project-3'} className="btn">Voir plus</Link>
                    </div>
                    </div>

                <div className="work fun" data-aos="fade-up">
                <div className="infos-container">
                    <span className="infos">Recherche</span>
                    <span className="infos">Developpement</span>
                    <span className="infos">Optimisation</span>
                </div>
                <div className="container-advent">
                    <h2 className="title">
                        Frekt
                    </h2>
                    <p className="text">Frekt est une plateforme SaaS qui met en relation un particulier et son livreur.</p>
                </div>
                <div className="btn-container">
                    <Link to={'/project-4'} className="btn">voir plus</Link>
                </div>
                </div>
            </div>
        </div>
    )
};

// == Export
export default Works;