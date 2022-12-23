import { BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';

const Feed = () => {
  const [comment, setcomment] = useState(''); //1 ,3
  const [commentArray, setcommentArray] = useState([]);

  const onChange = (e) => {
    //2
    setcomment(e.target.value);
  };
  console.log(comment);

  const onSubmit = (e) => {
    //4
    e.preventDefault(); //5
    setcommentArray([...commentArray, comment]); //6
    setcomment(''); //7
  };

  return (
    <>
      <div className="main">
        <section className="feeds">
          <article className="article">
            <div className="user_info">
              <div className="top_left">
                <img className="user_img" src="/images/Jcy/profile_1.jpg" />
                <span className="user_name">
                  JangChan__0 <br />
                  <span className="user_place">snow town</span>
                </span>
              </div>

              <img className="more_Info" src="/images/Jcy/more.png" />
            </div>
            <div className="content">
              <img className="content_IMG" src="/images/Jcy/content_IMG.jpg" />
            </div>
            <div className="rection">
              <div className="top">
                <div className="left">
                  <div className="rection_Btn">
                    <img src="/images/Jcy/heart (1).png" />
                    <img src="/images/Jcy/speech-bubble.png" />
                    <img src="/images/Jcy/share.png" />
                  </div>
                </div>
                <div className="right">
                  <img src="/images/Jcy/bookmark.png" />
                </div>
              </div>

              <div className="middle">
                <div className="rection_middle">
                  <img src="/images/Jcy/profile_2.jpg" />
                  <b>Wecode</b>님&nbsp;
                  <b>외 10명</b>이 좋아합니다
                </div>
                <div className="m_b">
                  <div className="ps_id">
                    <b>JangChan__0</b>
                  </div>
                  <div className="ps_ct">펑펑&nbsp;눈</div>
                </div>
                <div className="friendComment">
                  <div className="friend_id">
                    <b>Chanwoo</b>
                  </div>
                  <div className="friend_ct">와 예쁘다~~~~</div>
                </div>
                <div className="time">
                  <b>5분&nbsp;전</b>
                  {commentArray.map(function (a, i) {
                    //8
                    return <p>장찬영 {commentArray[i]}</p>; //9
                  })}
                </div>
              </div>
              <div className="newComment"></div>
              <form className="form">
                <input
                  className="comment_maker"
                  type="text"
                  placeholder="댓글 달기..."
                  value={comment}
                  onChange={onChange} //2
                />
                <button className="commentBtn" onClick={onSubmit}>
                  게시
                </button>
              </form>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Feed;
