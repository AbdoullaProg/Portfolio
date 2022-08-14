// == Import npm
import React from 'react';

// == Import
import correct from 'src/assets/images/correct.png';

import './style.scss';

// == Composant
const Skills = () => {
    return(
        <div className="skills" id="skills">
            <div className="img img-react" data-aos="fade-up-right"></div>
            <div className="img img-redux" data-aos="fade-left"></div>
            <div className="img img-firebase" data-aos="fade-down"></div>
            <div className="img img-nodejs" data-aos="fade-up-left"></div>
            <div className="img img-js" data-aos="fade-down"></div>
            <div className="img img-html" data-aos="fade-up"></div>
            <div className="img img-css" data-aos="fade-down-left"></div>
            <div className="img img-sass" data-aos="fade-right"></div>

            <div className="img-circle circle-2"></div>
            <div className="img-circle circle-3"></div>
            <div className="img-circle circle-4"></div>
            <div className="img-circle circle-5"></div>
            <div className="container-skill" data-aos="zoom-in">
                <h2 className="title">La puissance de React</h2>
                <p className="text">
                    Je développe ou je reconçois des sites web et des applications pour des entreprises ou des particuliers qui sont évolutifs.
                    Ce qui me permet d'avoir un excellent visuel et atteindre l'objectif du client à coup sûr.
                </p>

                <div className="skill">
                <div className="container">
                    <img className="img" src={correct} alt="" />
                    <span className="text">Utilise les technologies de pointe</span>
                </div>
                <div className="container">
                    <img className="img" src={correct} alt="" />
                    <span className="text">Utilise les dernières librairies UI</span>
                </div>
                <div className="container">
                    <img className="img" src={correct} alt="" />
                    <span className="text">Créez votre application ou votre site web avec une apparence fraîche et moderne </span>
                </div>
                <div className="container">
                    <img className="img" src={correct} alt="" />
                    <span className="text">Compréhension approfondie de l'architecture logicielle et des technologies de serveur</span>
                </div>
                </div>
            </div>

            <div className="container-logo-skill">
                <div className="img img-react"></div>
                <div className="img img-redux"></div>
                <div className="img img-html"></div>
                <div className="img img-css"></div>
                <div className="img img-js"></div>
                <div className="img img-nodejs"></div>
                <div className="img img-sass"></div>
                <div className="img img-firebase"></div>
            </div>
        </div>
    )
};

// == Export
export default Skills;