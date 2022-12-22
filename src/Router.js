import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../src/components/Nav/Nav';
import BgmLogin from './pages/bgm/Login/BgmLogin';
import BgmMain from './pages/bgm/Main/BgmMain';
import OhjLogin from './pages/ohj/Login/OhjLogin';
import OhjMain from './pages/ohj/Main/OhjMain';
import JcyLogin from './pages/jcy/Login/JcyLogin';
import JcyMain from './pages/jcy/Main/JcyMain';
import PysLogin from './pages/pys/Login/PysLogin';
import PysMain from './pages/pys/Main/PysMain';

function Router() {
  const [state, setState] = useState('');

  function saveUserId(e) {
    setState(e.target.value);
    console.log(e.target.value);
  }

  function saveUserPw(e) {
    setState(e.target.value);
    console.log(e.target.value);
  }

  return (
    <BrowserRouter>
      <OhjLogin onState={state} onSaveId={saveUserId} onSavePw={saveUserPw} />
      <Routes>
        <Route path="/" element={<BgmLogin />} />
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
