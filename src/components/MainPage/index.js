// == Import npm
import React, { useEffect } from 'react';

// == Import
import Header from 'src/components/Header';
import Banniere from 'src/components/Banniere';
import Skills from 'src/components/Skills';
import Works from 'src/components/Works';
import Footer from 'src/components/Footer';


import './style.scss';
import { motion } from 'framer-motion';

// == Composant
const MainPage = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
          });
    }, [])
    
    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{
                opacity:1,
            }}
            exit={{opacity:0}}
            transition={{ duration: 0.5 }}

        >
            <div className='mainPage'>
                <Header></Header>
                <Banniere></Banniere>
                <Skills></Skills>
                <Works></Works>
                <Footer></Footer>
            </div>
        </motion.div>
    )
};

// == Export
export default MainPage;