// == Import npm
import React, { useEffect, useState } from 'react';

import { useLocation, Link } from 'react-router-dom';
// == Import
import './style.scss';

import { AiOutlineCloseCircle } from "react-icons/ai";
// == Composant
const Header = () => {
    const location = useLocation();
    const [myLocation, setMyLocation] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const [myPositionScroll, setMyPositionScroll] = useState('')

    const handleClickHome = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    const handleClickSkills = () => {
        const component = document.querySelector('.skills');
        window.scrollTo({
            top: component.offsetTop-70,
            behavior: 'smooth',
        });
    }
    const handleClickWorks = () => {
        const component = document.querySelector('.works');
        window.scrollTo({
            top: component.offsetTop-70,
            behavior: 'smooth',
        });
    }
    const handleClickContact = () => {
        const component = document.querySelector('.footer');
        window.scrollTo({
            top: component.offsetTop-70-150,
            behavior: 'smooth',
        });
    }

    const handleClickAboutProject = () => {
        const component = document.querySelector('.main-project > .description-container');
        window.scrollTo({
            top: component.offsetTop-100,
            behavior: 'smooth',
        });
    }
    
    const handleClickResultProject = () => {
        const component = document.querySelector('.carousel-container');
        window.scrollTo({
            top: component.offsetTop-70,
            behavior: 'smooth',
        });
    }
    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        setMyLocation(location.pathname);
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY+71;
            const scrollPosFooter = window.scrollY+220;
            if(location.pathname == '/'){
                console.log('location.pathname', location.pathname)
                if(scrollPos<  document.querySelector('.skills').offsetTop ){
                    setMyPositionScroll('home')
                }
                else if(
                        scrollPos >=  document.querySelector('.skills').offsetTop &&
                        scrollPos <=  document.querySelector('.works').offsetTop
                    ) {
                     setMyPositionScroll('skills')
                }
                else if(
                        scrollPos >=  document.querySelector('.works').offsetTop &&
                        scrollPos <=  document.querySelector('.footer').offsetTop -220
                    ) {
                    setMyPositionScroll('works')
                }
                else if((scrollPosFooter) > (document.querySelector('.footer').offsetTop) ){
                    setMyPositionScroll('contact')
                }
            }else{
                if(scrollPos < document.querySelector('.main-project > .description-container').offsetTop - 50){
                    setMyPositionScroll('home-project')
                }
                else if(
                    scrollPos >= document.querySelector('.main-project > .description-container').offsetTop - 50 &&
                    scrollPos <=  document.querySelector('.carousel-container').offsetTop 
                ) {
                    setMyPositionScroll('about-project')
                }
                else if(
                    scrollPos >= document.querySelector('.carousel-container').offsetTop &&
                    scrollPos <=  (document.querySelector('.footer').offsetTop - 220)
                ) {
                    setMyPositionScroll('result-project')
                }
                else if((scrollPosFooter) >= (document.querySelector('.footer').offsetTop) ){
                    setMyPositionScroll('contact')
                }
            }
           
        })
    }, []);
    

    return(
        <>
            <header className="header">
                <div className="logo-container">
                <div className="img"></div> 
                <p className="text">Midalichov Ayoub</p>
                </div>
                <nav className="nav">
                <ul className="list">
                    {
                        myLocation === '/' ? (
                            <li className="element link-home" onClick={handleClickHome}>
                                <span 
                                    className={myPositionScroll === 'home' ? 'link link-home active' : 'link link-home'}
                                    onClick={handleClickHome}>Accueil</span>
                            </li>
                        ) : (
                            <li className="element">
                                <Link to="/" className='link'>Accueil</Link>
                            </li>
                        )
                    }

                    {
                        myLocation === '/' ? (
                            <li className="element link-skills" onClick={handleClickSkills}>
                                <span 
                                    className={myPositionScroll === 'skills' ? 'link link-skills active' : 'link link-skills'}
                                    onClick={handleClickSkills}>Compétences</span>
                            </li>
                        ) : (
                            <li className="element link-about-project" onClick={handleClickAboutProject}>
                                <span 
                                    className={myPositionScroll === 'about-project' ? 'link link-about-project active' : 'link link-about-project'}
                                    onClick={handleClickAboutProject}>A propos</span>
                            </li>
                        )
                    }

                    {
                        myLocation === '/' ? (
                            <li className="element link-works" onClick={handleClickWorks}>
                                <span 
                                    className={myPositionScroll === 'works' ? 'link link-works active' : 'link link-works'}
                                    onClick={handleClickWorks}>Projets</span>
                            </li>
                        ) : (
                            <li className="element link-contact" onClick={handleClickResultProject}>
                                <span 
                                    className={myPositionScroll === 'result-project' ? 'link link-result active' : 'link link-result'}
                                    onClick={handleClickResultProject}>Résultat</span>
                            </li>
                        )
                    }

                    {
                        myLocation === '/' ? (
                            <li className="element link-contact" onClick={handleClickContact}>
                                <span 
                                    className={myPositionScroll === 'contact' ? 'link link-contact active' : 'link link-contact'}
                                    onClick={handleClickContact}>Contact</span>
                            </li>
                        ) : (
                            <li className="element link-contact" onClick={handleClickContact}>
                                <span 
                                    className={myPositionScroll === 'contact' ? 'link link-contact active' : 'link link-contact'}
                                    onClick={handleClickContact}>Contact</span>
                            </li>
                        )
                    }

                </ul>
                </nav>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="logo-menu" onClick={handleToggleMenu}
                    width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none" className="svg-menu-g">
                    <path className="test" d="M125 4393 c-164 -86 -166 -300 -3 -384 36 -19 95 -19 2435 -19 2313
                    0 2399 1 2438 19 164 76 166 298 3 382 -36 19 -95 19 -2440 19 -2169 -1 -2406
                    -2 -2433 -17z"/>
                    <path  d="M149 2766 c-60 -21 -100 -56 -125 -110 -52 -112 -10 -231 100 -282
                    l51 -24 2385 0 2385 0 51 24 c113 52 154 174 96 287 -29 57 -70 92 -131 109
                    -24 6 -848 10 -2406 10 -1911 -1 -2377 -3 -2406 -14z"/>
                    <path d="M125 1121 c-104 -47 -153 -174 -106 -276 19 -43 78 -100 118 -116 33
                    -12 4813 -12 4846 0 40 16 99 73 118 116 47 102 -2 229 -106 276 -38 18 -140
                    19 -2435 19 -2295 0 -2397 -1 -2435 -19z"/>
                    </g>
                </svg>
            </header>
            <div className="filter"></div> 
            <div className={showMenu ? 'menu-deroulant show' : 'menu-deroulant'}>
                <AiOutlineCloseCircle className='btn-close' onClick={handleToggleMenu} />
                <a href="/">Accueil</a>
                <a href="/">Skills</a>
                <a href="/">Works</a>
                <a href="/">Contact</a>
            </div>
        </>
    )
};

// == Export
export default Header;