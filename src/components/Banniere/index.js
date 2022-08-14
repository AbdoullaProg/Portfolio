// == Import npm
import React, { useEffect } from 'react';
import { saveAs } from "file-saver";
// == Import

import './style.scss';

// == Composant
const Banniere = () => {
    const handleClickWorks = () => {
        const component = document.querySelector('.works');
        window.scrollTo({
            top: component.offsetTop-70,
            behavior: 'smooth',
        });
    }
    const saveFile = () => {
        saveAs(
            "",
            "AyoubCV.pdf"
        );
    };
    return(
        <div className="banniere">
            <div className="text-container" data-aos="fade-right">
                <h2 className="title">Midalichov Ayoub, Front-end Developer</h2>
                {/* <p className="text">Specialized in creating sleek and premium user interfaces with the help of React</p> */}
                <p className="text">Spécialisé dans la création de site web fluide et moderne, à l'aide de React</p>
                <div className="btn-container">
                <button className="btn btn-work" onClick={handleClickWorks}>
                    <span className="text">Projets</span>
                </button>
                <a href="./AyoubMidalichovCV.png" download className="btn btn-cv" >
                    Télécharger CV
                </a>
                </div>
            </div>
            {/* <img src={banniereImage} alt="" className="img-svg" data-aos="fade-left" /> */}
        </div>
    )
};

// == Export
export default Banniere;