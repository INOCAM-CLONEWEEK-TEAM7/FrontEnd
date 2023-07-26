import React, { useEffect, useRef } from "react";
import ReactPlayer from 'react-player'

import * as S from "./styles/PostStyle";
import { PostPosition } from "../../modules/post";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Post = ({data}) => {

  const postRef = useRef(null);
  const dispatch = useDispatch();

  const tag = data.tag.split("{^%").slice(0,-1);
  const postContents = data.content.split("{^%")
  
  useEffect(() => {
    //상대위치: 현재 스크롤 맨위에서 얼마나 떨어졌나
    /*  console.log(postRef.current.getBoundingClientRect().top); */
    //스크롤 절대위치 :  스크롤된 값 +  상대위치 = 절대위치
    const postPosition = document.documentElement.scrollTop + postRef.current.getBoundingClientRect().top;
    dispatch(PostPosition(postPosition));
    console.log(postPosition);
  }, []);

  return (
    <S.PostSection>
      <S.PostHeader>
        <S.TagName to={`/tag/${data.category}`}>{data.category}</S.TagName>
        <h2>{data.title}</h2>
        <time>{data.createDate}</time>
      </S.PostHeader>
      <S.PostContainer ref={postRef}>
          {
            data.imageUrl!==null
            ? <S.PostFeatured><S.PostImg src={data.imageUrl} /></S.PostFeatured>
            : data.videoUrl !== null
              ?  <S.PostFeatured><ReactPlayer url={data.videoUrl} /></S.PostFeatured>
              : <></>
          }

        {/* pre태그가 줄바꿈까지 표시 */}
        {postContents.map(item => {
          return <S.Postdetail> {item}</S.Postdetail>;
        })}
        <S.PostHashTag>
          {
            tag.map((item)=>{
              return <Link to={`/tag/${item}`}>#{item}</Link>
            })
          }

        </S.PostHashTag>
        <S.PostFoot>
          <S.PostLikeBtn>
            <span>🧡</span>
            {"좋았슴 "}
            <b>{data.likeCount}</b>
          </S.PostLikeBtn>
          <S.ShareBtnContainer>
            <button>F</button>
            <button>T</button>
          </S.ShareBtnContainer>
        </S.PostFoot>
      </S.PostContainer>
    </S.PostSection>
  );
};

export default Post;
