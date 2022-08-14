// == Import npm
import React, { useEffect } from 'react';

// == Import
import './style.scss';

import next from '../../assets/images/next.svg';
import next2 from '../../assets/images/next2.svg';

import IsaMiel1 from '../../assets/images/isa-miel-1.png';
import IsaMiel2 from '../../assets/images/isa-miel-2.png';
import IsaMiel3 from '../../assets/images/isa-miel-3.png';


// == Composant
const MainContent = () => {
    useEffect(() => {
        const btnPlus = document.querySelector('.btn-plus');
        const btnMoins = document.querySelector('.btn-moins');
    
        const carouselImg = document.querySelector('.image-carousel');
        const tabImage = [IsaMiel1, IsaMiel2, IsaMiel3]
        let x = 0
        btnPlus.addEventListener('click', ()=>{
            x++;
            if(x <= 2) carouselImg.src = tabImage[x];
            else{
                x = 0;
                carouselImg.src = tabImage[x];
            }
        })
    
        btnMoins.addEventListener('click', ()=>{
            x--;
            if(x !== -1) carouselImg.src = tabImage[x];
            else{
                x = 2;
                carouselImg.src = tabImage[x];
            }
        })
    }, [])
    
    return(
        <main className="container-project">
            <header className="header-project">
                <div className="infos-container">
                    <span className="info">Research</span>
                    <span className="info">Developpement</span>
                    <span className="info">Optimization</span>
                </div>
                <h1 className="title">
                    Isa-Miel
                </h1>
                <div className="tech-container">
                    <div className="tech">
                        <span className="title">
                            Client
                        </span>
                        <span className="text">
                            Isa
                        </span>
                    </div>

                    <div className="tech">
                        <span className="title">
                            Année
                        </span>
                        <span className="text">
                            2020
                        </span>
                    </div>

                    <div className="tech">
                        <span className="title">
                            Technologie utilisé
                        </span>
                        <span className="text">
                            HTML, CSS, JAVASCRIPT
                        </span>
                    </div>
                </div>
                <div className="img-header">Isa-Miel</div>
            </header>
            <div className="main-project">
                <div className="description-container">
                    <h2 className="title">
                        Détail du projet
                    </h2>
                    <p className="text">
                        Le client voulait un site vitrine, présentant ses produits (miels) avec des précisions sur le lieu de production, comment il a été produit, etc.
                    </p>
                </div>
                <div className="description-container">
                    <h2 className="title">
                        Le challenge
                    </h2>
                    <p className="text">
                        Le défi était d'avoir quelque chose de résponsive et avec un design moderne.
                    </p>
                </div>
                <div className="description-container">
                    <h2 className="title">
                        La solution
                    </h2>
                    <p className="text">
                        J'ai utilisé les langages basic HTML, CSS et JavaScript
                    </p>
                </div>
            </div>

            <div className="carousel-container">
                <div className="container-text">
                    <h2 className="title">
                        Le résultat
                    </h2>
                    <p className="text">
                        Un site moderne et une représentation exacte du client
                    </p>
                </div>
                <div className="carousel-imgs">
                    <img src={IsaMiel1} alt="image" className="image-carousel" />
                </div>
                <div className="btn-container">
                    <button className="btn btn-plus">
                        <img src={next} alt="arrow" />
                    </button>
                    <button className="btn btn-moins">
                        <img src={next2} alt="arrow" />
                    </button>

                </div>
            </div>
        </main>
    )
};

// == Export
export default MainContent;