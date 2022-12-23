import React from 'react';
import './Main.scss';
import { Link } from 'react-router-dom';
import Feed from './components/Feed';
import Nav from './components/Nav';
import Aside from './components/Aside';

function JcyMain() {
  return (
    <>
      <Nav />
      <main className="mainContainer">
        <Feed />
        <Aside />
      </main>
    </>
  );
}
export default JcyMain;
