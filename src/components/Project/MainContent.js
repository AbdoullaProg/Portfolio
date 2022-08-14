// == Import npm
import React, { useEffect } from 'react';

// == Import
import './style.scss';

import next from '../../assets/images/next.svg';
import next2 from '../../assets/images/next2.svg';

import Switch1 from '../../assets/images/switch-1.png';
import Switch2 from '../../assets/images/switch-2.png';
import Switch3 from '../../assets/images/switch-3.png';


// == Composant
const MainContent = () => {
    useEffect(() => {
        const btnPlus = document.querySelector('.btn-plus');
        const btnMoins = document.querySelector('.btn-moins');
    
        const carouselImg = document.querySelector('.image-carousel');
        const tabImage = [Switch1, Switch2, Switch3]
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
                    <span className="info">Recherche</span>
                    <span className="info">Développement</span>
                    <span className="info">Optimisation</span>
                </div>
                <h1 className="title">
                    SwITch
                </h1>
                <div className="tech-container">
                    <div className="tech">
                        <span className="title">
                            Client
                        </span>
                        <span className="text">
                            SwITch
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
                            React, nodeJS, sequelize, Redux, SCSS, Axios, Stripe
                        </span>
                    </div>
                </div>
                <div className="img-header">SwITch</div>
            </header>
            <div className="main-project">
                <div className="description-container">
                    <h2 className="title">
                        Détail du projet
                    </h2>
                    <p className="text">
                        Site web type E-commerce <br />
                        Création de compte (vendeur ou acheteur) <br />
                        Authentification, déconnexion, gestion de panier, espace personnel <br />
                        reinitialisation de mot de passe, mot de passe oublié <br />
                        Suivi des commandes <br />
                        Site entièrement responsive <br />
                        mode de paiement via Stripe <br />
                    </p>
                </div>
                <div className="description-container">
                    <h2 className="title">
                        Lien
                    </h2>
                    <p className="text">
                        https://switch-ecommerce.netlify.app/
                    </p>
                </div>
            </div>

            <div className="carousel-container">
                <div className="container-text">
                    <h2 className="title">
                        Le résultat
                    </h2>
                    <p className="text">
                        Un site type E-commerce, moderne et résponsive  
                    </p>
                </div>
                <div className="carousel-imgs">
                    <img src={Switch1} alt="image" className="image-carousel" />
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