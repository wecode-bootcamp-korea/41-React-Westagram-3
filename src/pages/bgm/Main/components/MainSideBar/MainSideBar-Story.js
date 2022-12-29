import './MainSideBar-Story.scss';
import { USER_LIST } from '../../../../../data/userData';

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
