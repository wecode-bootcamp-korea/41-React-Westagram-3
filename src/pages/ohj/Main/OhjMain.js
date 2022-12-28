import React, { useState, useEffect } from 'react';
import './OhjMain.scss';
import '../../../styles/reset.scss';
import { useNavigate } from 'react-router-dom';
import Nav from './components/Nav';
import Article from './components/Article';
import MainRight from './components/MainRight';

function OhjMain() {
  const navigate = useNavigate();

  return (
    <div id="wrap">
      <header>
        <Nav />
      </header>

      <main>
        <Article />
        <MainRight />
      </main>
    </div>
  );
}

export default OhjMain;
