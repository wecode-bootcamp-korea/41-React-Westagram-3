import './MainSideBar-Info.scss';

function MainSideBarInfo() {
  return (
    <div id="myInfo">
      <img className="myInfoImg" src="images/bgm/userimg.png" alt="#" />
      <span>97bhh</span>
      <div className="myInfoNavwrap">
        <div className="myInfoNonebox" />
        <div className="profileNav">
          <ul className="profileUl">
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
            {/* ㄴ 프로필 사진 클릭시 나타나는 창 */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainSideBarInfo;
