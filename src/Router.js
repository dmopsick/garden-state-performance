import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Danyell from './components/easteregg/Danny';

export default function Router() {
  return (

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="topsecret/epic/danny" element={<Danyell />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
    
  );
}
