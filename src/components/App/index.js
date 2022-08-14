// == Import npm
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
// == Import
import MainPage from 'src/components/MainPage';
import Project from 'src/components/Project';
import Project2 from 'src/components/Project2';
import Project3 from 'src/components/Project3';
import Project4 from 'src/components/Project4';

import './styles.scss';

import AOS from 'aos';
import "aos/dist/aos.css";

// == Composant
const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return(
    <div className="app">
      <AnimatePresence >
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/project-1' element={<Project />} />
          <Route path='/project-2' element={<Project2 />} />
          <Route path='/project-3' element={<Project3 />} />
          <Route path='/project-4' element={<Project4 />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
};

// == Export
export default App;
