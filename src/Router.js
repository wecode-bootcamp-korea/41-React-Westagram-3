import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BgmLogin from './pages/Bgm/Login/Login';
import BgmMain from './pages/Bgm/Main/Main';
import OhjLogin from './pages/Ohj/Login/Login';
import OhjMain from './pages/Ohj/Main/Main';
import JcyLogin from './pages/Jcy/Login/Login';
import JcyMain from './pages/Jcy/Main/Main';
import PysLogin from './pages/Pys/Login/Login';
import PysMain from './pages/Pys/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/BgmLogin" element={<BgmLogin />} />
        <Route path="/BgmMain" element={<BgmMain />} />
        <Route path="/OhjLogin" element={<OhjLogin />} />
        <Route path="/OhjMain" element={<OhjMain />} />
        <Route path="/JcyLogin" element={<JcyLogin />} />
        <Route path="/JcyMain" element={<JcyMain />} />
        <Route path="/PysLogin" element={<PysLogin />} />
        <Route path="/PysMain" element={<PysMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
