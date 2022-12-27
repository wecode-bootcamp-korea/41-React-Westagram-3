import './MainArticle-Bottom.scss';
import React, { useState } from 'react';
import Comment from './Comment';

function MainArticleBottom() {
  const [content, setContent] = useState('');
  // ㄴ댓글이벤트 구현 중 input입력 값을 content에 담는 useState에 구현
  const onChange = (e) => {
    setContent(e.target.value);
  }; // ㄴevent가 발생 할 때 마다 input의 밸류를 setContet에 업데이트

  const [contentArr, setContentArr] = useState([]);
  //  ㄴcontentArr에 담는 useState 구현
  const comment = () => {
    // ㄴcontentArr에 업데이트 하는 comment를 만듬
    setContentArr([...contentArr, content]);
    // ㄴ[...contentArr]은 contentArr의 배열을 원본 그대로 넣고 , content 로 content도 업데이트해 준다.
    setContent('');
    // ㄴcomment함수 마지막엔 setContent('')로 업데이트해 content를 비운다.
  };
  const enter = (event) => {
    //   // ㄴevent가 발생 했을 때 해당 event의 key값이 "enter"일 경우 comment()를 실행하도록 만든 함수
    if (event.key === 'Enter' && content.length > 0) {
      comment();
    }
  };
  const commentBtn = content.length >= 1 ? false : true;
  // ㄴcontent 즉 input 값의 길이가 1보다 크거나 같게 설정해두면 default는 false로 적용이 됨\

  return (
    <div className="articleComentBox">
      <nav className="articleComentboxLikes">
        <ul>
          <li>
            <button>
              <img src="images/bgm/heart.png" alt="#" />
            </button>
          </li>
          <li>
            <button>
              <img src="images/bgm/chat.png" alt="#" />
            </button>
          </li>
          <li>
            <button>
              <img src="images/bgm/send.png" alt="#" />
            </button>
          </li>
          <li>
            <button>
              <img src="images/bgm/save-instagram.png" alt="#" />
            </button>
          </li>
        </ul>
      </nav>
      <div className="articleFooter">
        <div className="articleLikesPeople">
          <img src="images/bgm/userimg.png" alt="#" />
          <strong>adfa님</strong> 외<strong>10명</strong>이 좋아합니다.
        </div>
        <div className="articleContents">
          <strong>dfasdfas</strong> 위워크에서 진행한 베이킹 클래스,,,
        </div>
        <div className="commentBox">
          {contentArr.map((i, key) => (
            <Comment i={i} key={key} contentArr={contentArr} />
          ))}
          {/* // ㄴcontentArr에 content를 넣고 맵핑하여 i를 props 한다. // ㄴComment
          컴포넌트에 i를 i로 props해주고 key값을 key로 propps 해준다. */}
        </div>
        <div className="articleFeedTime">몇분전</div>
      </div>
      <div className="articleAddComents">
        <input
          className="comentInput"
          placeholder="댓글 달기..."
          value={content}
          // ㄴinput의 밸류속성을 content로 지정해둬야 위에 만들어둔 comment함수가 발생했을 때 마지막에 input의 값이 초기화 되어 비게 된다.
          onChange={onChange}
          // ㄴonChange 이벤트가 발생하면 위에 만들어둔 onChange함수 실행하여 content에 값을 업데이트해줌
          onKeyUp={enter}
          // ㄴkeyup 이벤트가 발생할 때 enter키라면 enter함수가 실행되도록 함
        />

        <button className="comentBtn" onClick={comment} disabled={commentBtn}>
          {/* click이벤트가 발생하면 위에 만들어둔 comment함수가 발동하도록 함 */}
          게시
        </button>
      </div>
    </div>
  );
}

export default MainArticleBottom;
