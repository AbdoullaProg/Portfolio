// == Import npm
import React, { useEffect } from 'react';

// == Import
import './style.scss';

import next from '../../assets/images/next.svg';
import next2 from '../../assets/images/next2.svg';

import RunGame1 from '../../assets/images/RunGame.png';
import RunGame2 from '../../assets/images/RunGame3.png';
import RunGame3 from '../../assets/images/RunGame2.jpeg';


// == Composant
const MainContent = () => {
    useEffect(() => {
        const btnPlus = document.querySelector('.btn-plus');
        const btnMoins = document.querySelector('.btn-moins');
    
        const carouselImg = document.querySelector('.image-carousel');
        const tabImage = [RunGame1, RunGame2, RunGame3]
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
                    FREKT
                </h1>
                <div className="tech-container">
                    <div className="tech">
                        <span className="title">
                            Client
                        </span>
                        <span className="text">
                            Frekt 
                        </span>
                    </div>

                    <div className="tech">
                        <span className="title">
                            Année
                        </span>
                        <span className="text">
                            2022
                        </span>
                    </div>

                    <div className="tech">
                        <span className="title">
                            Technologie utilisé
                        </span>
                        <span className="text">
                            React, Redux, Firebase, Nest-js, Material UI, tailwind-css
                        </span>
                    </div>
                </div>
                <div className="img-header">Frekt</div>
            </header>
            <div className="main-project">
                <div className="description-container">
                    <h2 className="title">
                        Détail du projet
                    </h2>
                    <p className="text">
                        Frekt est un Saas pour mettre en relation le client et le livreur et pouvoir voir, à temps, réel l'emplacement du livreur.
                    </p>
                </div>
            </div>

            <div className="carousel-container">
                <div className="container-text">
                    <h2 className="title">
                        Le résultat
                    </h2>
                    <p className="text">
                        Un SaaS avec un design moderne, fonctionnel sans beug.
                    </p>
                </div>
                <div className="carousel-imgs">
                    <img src={RunGame1} alt="image" className="image-carousel" />
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