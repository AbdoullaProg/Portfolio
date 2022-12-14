// == Import npm
import React, { useEffect } from 'react';

// == Import
import './style.scss';

import next from '../../assets/images/next.svg';
import next2 from '../../assets/images/next2.svg';

import Sekural1 from '../../assets/images/secure1.jpeg';
import Sekural2 from '../../assets/images/secure2.jpeg';
import Sekural3 from '../../assets/images/secure3.jpeg';


// == Composant
const MainContent = () => {
    useEffect(() => {
        const btnPlus = document.querySelector('.btn-plus');
        const btnMoins = document.querySelector('.btn-moins');
    
        const carouselImg = document.querySelector('.image-carousel');
        const tabImage = [Sekural1, Sekural2, Sekural3]
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
                    Sekural
                </h1>
                <div className="tech-container">
                    <div className="tech">
                        <span className="title">
                            Client
                        </span>
                        <span className="text">
                            Sekural
                        </span>
                    </div>

                    <div className="tech">
                        <span className="title">
                            Ann??e
                        </span>
                        <span className="text">
                            2021                        
                        </span>
                    </div>

                    <div className="tech">
                        <span className="title">
                            Technologie utilis??
                        </span>
                        <span className="text">
                            React, Firebase, material UI
                        </span>
                    </div>
                </div>
                <div className="img-header">Sekural</div>
            </header>
            <div className="main-project">
                <div className="description-container">
                    <h2 className="title">
                        D??tail du projet
                    </h2>
                    <p className="text">
                        Sekural est une plateforme pour aider les entreprises ?? trouver des agents de s??curit?? pour une mission ou ??v??nement courte ou longue dur??e. <br />
                        Plateforme type linkedin <br />
                        Cr??ation de compte (entreprise ou agent) <br />
                        Authentification, d??connexion, espace personnel, v??rification de documents, r??initialisation de mot de passe <br />
                        Cr??e une mission, postulez ?? une mission. <br />
                        Noter des agents, signaler l'agent ou l'entreprise <br />
                        Site enti??rement responsive <br />
                        Mode de paiement via Stripe. <br />
                        abonnement mensuel.  <br />
                    </p>
                </div>
            </div>

            <div className="carousel-container">
                <div className="container-text">
                    <h2 className="title">
                        Le r??sultat
                    </h2>
                    <p className="text">
                        Une plateforme intuitif fluide pour tous les agents de s??curit?? cherchant du travail
                    </p>
                </div>
                <div className="carousel-imgs">
                    <img src={Sekural1} alt="image" className="image-carousel" />
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