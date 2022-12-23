import './MainSideBar-Info.scss';

function MainSideBarInfo() {
  return (
    <div id="myInfo">
      <img className="myInfo-img" src="images/bgm/userimg.png" alt="#" />
      <span>97bhh</span>
      <div className="myInfo-navwrap">
        <div className="myInfo-nonebox" />
        <div className="profile-nav">
          <ul className="profile-ul">
            {/* <li>
                <img className="profile-img" src="img/userimg.png" alt="#" />
                프로필
              </li>
              <li>
                <img
                  className="profile-img"
                  src="./js/img/save-instagram.png"
                  alt="#"
                />
                저장됨
              </li>
              <li>
                <img className="profile-img" src="img/userimg.png" alt="#" />
                설정
              </li>
              <li>로그아웃</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainSideBarInfo;
