import React from 'react';
import './Main.scss';
import MainArticle from './components/MainArticle/MainArticle';
import MainHeader from './components/MainHeader/MainHeader';
import MainRight from './components/MainSideBar/MainRight';
import '../../../styles/reset.scss';

function BgmMain() {
  return (
    <div id="container">
      <MainHeader />
      <div className="main">
        <MainArticle />
        <MainRight />
      </div>
    </div>
  );
}

export default BgmMain;
