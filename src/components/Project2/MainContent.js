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
                            Année
                        </span>
                        <span className="text">
                            2021                        
                        </span>
                    </div>

                    <div className="tech">
                        <span className="title">
                            Technologie utilisé
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
                        Détail du projet
                    </h2>
                    <p className="text">
                        Sekural est une plateforme pour aider les entreprises à trouver des agents de sécurité pour une mission ou événement courte ou longue durée. <br />
                        Plateforme type linkedin <br />
                        Création de compte (entreprise ou agent) <br />
                        Authentification, déconnexion, espace personnel, vérification de documents, réinitialisation de mot de passe <br />
                        Crée une mission, postulez à une mission. <br />
                        Noter des agents, signaler l'agent ou l'entreprise <br />
                        Site entièrement responsive <br />
                        Mode de paiement via Stripe. <br />
                        abonnement mensuel.  <br />
                    </p>
                </div>
            </div>

            <div className="carousel-container">
                <div className="container-text">
                    <h2 className="title">
                        Le résultat
                    </h2>
                    <p className="text">
                        Une plateforme intuitif fluide pour tous les agents de sécurité cherchant du travail
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