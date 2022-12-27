import './MainSideBar-Story.scss';

function MAinSideBarStory() {
  return (
    <div id="story">
      <div className="storyHead">
        <div>스토리</div>
        <div>모두보기</div>
      </div>
      <div>
        {USER_LIST.map((userList, key) => {
          return (
            <div className="storyPeople" key={key}>
              <img src={userList.img} alt="userImg" />
              <ul>
                <li>{userList.name}</li>
                <li>{Math.floor(Math.random() * 61)}분전</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MAinSideBarStory;

const USER_LIST = [
  { id: 1, name: 'd.j_han', img: '/images/bgm/hdj.jpeg' },
  { id: 2, name: 'jang._.miii', img: '/images/bgm/kjm.jpeg' },
  { id: 3, name: 'yu._.rimi', img: '/images/bgm/kyr.jpeg' },
  { id: 4, name: 'e_u_u_h', img: '/images/bgm/keh.jpeg' },
  { id: 5, name: 'c_11.17', img: '/images/bgm/cwj.jpeg' },
  { id: 6, name: 'lee_97yj', img: '/images/bgm/lyj.jpeg' },
  { id: 7, name: '97_bhh', img: '/images/bgm/userImg.png' },
];
