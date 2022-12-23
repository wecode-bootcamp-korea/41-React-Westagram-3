import React from 'react';
import './MainRight.scss';
import MainSideBarInfo from './MainSideBar-Info';
import MainSideBarStory from './MainSideBar-Story';
import MainSideBarMore from './MainSideBar-More';

function MainRight() {
  return (
    <div id="mainRight">
      <MainSideBarInfo />
      <MainSideBarStory />
      <MainSideBarMore />
    </div>
  );
}

export default MainRight;
