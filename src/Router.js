import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import AboutGSP from './components/AboutGSP';
import Hours from './components/Hours';
import Programming from './components/Programming';
import Danyell from './components/easteregg/Danny';
import Merch from './components/Merch';

export default function Router() {
  return (

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="topsecret/epic/danny" element={<Danyell />} />
        <Route path="about" element={<AboutGSP />} />
        <Route path="hours" element={<Hours />} />
        <Route path="programming" element={<Programming />} />
        <Route path="merch" element={<Merch />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
    
  );
}
