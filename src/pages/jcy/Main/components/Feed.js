import { BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Login from '../../Login/JcyLogin';
import Comment from './Comment';

const Feed = ({ feed }) => {
  const [comment, setcomment] = useState(''); //1 ,3
  const [commentArray, setcommentArray] = useState([]);

  const onChange = (e) => {
    //2
    setcomment(e.target.value);
  };

  const onSubmit = (e) => {
    //4
    e.preventDefault(); //5
    // const copy = [...commentArray]
    // copy.push(comment);
    // setcommentArray(copy);
    setcommentArray([...commentArray, comment]); //6
    setcomment(''); //7
  };
  let Color;
  let block;
  comment !== ''
    ? (Color = { backgroundColor: '#67bdf5', color: '#ffffff' })
    : (Color = { backgroundColor: '#ffffff' });

  comment !== '' ? (block = false) : (block = true);

  return (
    <>
      <div className="main">
        <section className="feeds">
          <article className="article">
            <div className="user_info">
              <div className="top_left">
                <img className="user_img" src={feed.user_img} />
                <span className="user_name">
                  {feed.user_name} <br />
                  <span className="user_place">{feed.user_place}</span>
                </span>
              </div>

              <img className="more_Info" src="/images/Jcy/more.png" />
            </div>
            <div className="content">
              <img className="content_IMG" src={feed.content_IMG} />
            </div>
            <div className="rection">
              <div className="top">
                <div className="left">
                  <div className="rection_Btn">
                    <img src="/images/Jcy/redheart.png" />
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
                    <b>{feed.ps_id}</b>
                  </div>
                  <div className="ps_ct">{feed.ps_ct}</div>
                </div>
                <div className="friendComment">
                  <div className="friend_id">
                    <b>{feed.friend_id}</b>
                  </div>
                  <div className="friend_ct">{feed.friend_ct}</div>
                </div>
                <div className="time">
                  <b>5분&nbsp;전</b>
                </div>

                {commentArray.map((value, i) => (
                  <Comment key={i} comments={value} />
                ))}
              </div>

              <form className="form">
                <input
                  className="comment_maker"
                  type="text"
                  placeholder="댓글 달기..."
                  value={comment}
                  onChange={onChange} //2
                />
                <button
                  className="commentBtn"
                  onClick={onSubmit}
                  style={Color}
                  disabled={block}
                >
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
