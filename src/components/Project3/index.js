// == Import npm
import React, { useEffect } from 'react';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import MainContent from './MainContent';

import './style.scss';

import { motion } from 'framer-motion';


// == Composant
const Project3 = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: 'smooth',
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
            <div className='Project'>
                {/* <HeaderAlternative></HeaderAlternative> */}
                <Header></Header>
                <MainContent></MainContent>
                <Footer></Footer>
            </div>
        </motion.div>
    )
};

// == Export
export default Project3;