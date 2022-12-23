import './MainSideBar-More.scss';

function MainSideBarMore() {
  return (
    <div id="morePeople">
      <div className="morePhead">
        <div>회원님을 위한 추천</div>
        <div>모두보기</div>
      </div>
      <div className="mPeopleList">
        <img src="images/bgm/userimg.png" alt="#" />
        <div>id123</div>
        <button>팔로우</button>
      </div>
      <div className="mPeopleList">
        <img src="images/bgm/userimg.png" alt="#" />
        <div>id123</div>
        <button>팔로우</button>
      </div>
      <div className="mPeopleList">
        <img src="images/bgm/userimg.png" alt="#" />
        <div>id123</div>
        <button>팔로우</button>
      </div>
    </div>
  );
}

export default MainSideBarMore;
