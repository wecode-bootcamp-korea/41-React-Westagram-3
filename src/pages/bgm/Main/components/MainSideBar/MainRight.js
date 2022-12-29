import React from 'react';
import './MainRight.scss';
import MainSideBarInfo from './MainSideBar-Info';
import MainSideBarStory from './MainSideBar-Story';
import MainSideBarMore from './MainSideBar-More';
import MainSideBarFooter from './MainSideBarFooter';

function MainRight() {
  return (
    <div id="mainRight">
      <MainSideBarInfo />
      <MainSideBarStory />
      <MainSideBarMore />
      <MainSideBarFooter />
    </div>
  );
}

export default MainRight;
