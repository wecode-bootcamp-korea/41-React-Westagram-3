import React from 'react';
import './Main.scss';
import { Link } from 'react-router-dom';
import Feed from './components/Feed';
import Nav from './components/Nav';
import Aside from './components/Aside';
import { useEffect, useState } from 'react';

function JcyMain() {
  const [userInfo, setuserInfo] = useState([]);

  useEffect(() => {
    fetch('data/Feed.json')
      .then((result) => result.json())
      .then((data) => setuserInfo(data));
  }, []);

  return (
    <>
      <Nav />
      <main className="mainContainer">
        <div>
          {userInfo.map((data, i) => {
            return <Feed key={i} feed={data} />;
          })}
        </div>
        <Aside />
      </main>
    </>
  );
}
export default JcyMain;
