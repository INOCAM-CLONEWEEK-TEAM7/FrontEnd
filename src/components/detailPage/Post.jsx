import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { PostPosition } from '../../modules/post';
import { useDispatch } from 'react-redux';
const Post = () => {
  const postRef = useRef(null);
  const dispatch = useDispatch();

  const postContents = [
    `
    몇 달 전 경기도 여주시의 한 야산에서 동물 118마리가 죽은 채 발견됐어요.
    옷을 입고 목걸이·하네스까지 한 채 싸늘히 식어 있었다고. 이는 ‘신종 펫숍’으로 불리는 업체가 벌인 짓으로 드러났어요.

    신종 펫숍? 어떻게 된 거야? 😰
    동물을 파양하는 반려인을 대상으로 벌어진 사기 행각이에요. 이 업체들은 ‘안락사 없는 보호소’라는
    이름을 내걸고 활동했는데요. 동물을 파양하는 반려인에게 "새로운 곳에 입양 갈 때까지 보호하겠
    다"고 약속하며 수백에서 수천만 원에 이르는 돈을 받았어요. 이후 동물처리업자에 동물을 넘겨 새 반
    려인인 척 사진을 찍어 보내기도 하고, 결국 죽이게 한 것. 이번 사건을 파헤친 단체는 엄벌을 내려달
    라며 탄원서를 받고 있어요.

    몇 달 전 경기도 여주시의 한 야산에서 동물 118마리가 죽은 채 발견됐어요.
    옷을 입고 목걸이·하네스까지 한 채 싸늘히 식어 있었다고. 이는 ‘신종 펫숍’으로 불리는 업체가 벌인 짓으로 드러났어요.
    `,
    `
    몇 달 전 경기도 여주시의 한 야산에서 동물 118마리가 죽은 채 발견됐어요.
    옷을 입고 목걸이·하네스까지 한 채 싸늘히 식어 있었다고. 이는 ‘신종 펫숍’으로 불리는 업체가 벌인 짓으로 드러났어요.

    신종 펫숍? 어떻게 된 거야? 😰
    동물을 파양하는 반려인을 대상으로 벌어진 사기 행각이에요. 이 업체들은 ‘안락사 없는 보호소’라는
    이름을 내걸고 활동했는데요. 동물을 파양하는 반려인에게 "새로운 곳에 입양 갈 때까지 보호하겠
    다"고 약속하며 수백에서 수천만 원에 이르는 돈을 받았어요. 이후 동물처리업자에 동물을 넘겨 새 반
    려인인 척 사진을 찍어 보내기도 하고, 결국 죽이게 한 것. 이번 사건을 파헤친 단체는 엄벌을 내려달
    라며 탄원서를 받고 있어요.

    몇 달 전 경기도 여주시의 한 야산에서 동물 118마리가 죽은 채 발견됐어요.
    옷을 입고 목걸이·하네스까지 한 채 싸늘히 식어 있었다고. 이는 ‘신종 펫숍’으로 불리는 업체가 벌인 짓으로 드러났어요.
    `,
  ];
  useEffect(() => {
    //상대위치: 현재 스크롤 맨위에서 얼마나 떨어졌나
    /*  console.log(postRef.current.getBoundingClientRect().top); */
    //스크롤 절대위치 스크롤된 값 +  상대위치 = 절대위치
    const postPosition = document.documentElement.scrollTop + postRef.current.getBoundingClientRect().top;
    dispatch(PostPosition(postPosition));
    console.log(postPosition);
  }, []);

  return (
    <PostSection>
      <PostHeader>
        <TagName>{'태그링크'}</TagName>
        <h2>{'PostTitle'}</h2>
        <time>{'발행일'}</time>
      </PostHeader>

      <PostContainer ref={postRef}>
        <PostFeatured>
          <PostImg src='https://d2phebdq64jyfk.cloudfront.net/media/image/article/thumbnail/%E1%84%83%E1%85%A1%E1%86%AB%E1%84%89%E1%85%B5%E1%86%AB_2_2O2teop.jpg' />
        </PostFeatured>

        {/* pre태그가 줄바꿈까지 표시 */}
        {postContents.map(item => {
          return <Postdetail> {item}</Postdetail>;
        })}

        <PostHashTag>
          <a>#사회</a>
          <a>#사회</a>
          <a>#사회</a>
        </PostHashTag>

        <PostFoot>
          <PostLikeBtn>
            <span>🧡</span>
            {'좋았슴 '}
            <b>5</b>
          </PostLikeBtn>
          <ShareBtnContainer>
            <button>F</button>
            <button>T</button>
          </ShareBtnContainer>
        </PostFoot>
      </PostContainer>
    </PostSection>
  );
};

export default Post;

const PostSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PostHeader = styled.div`
  padding: 4rem 0 4rem 0;
  border-bottom: 1px solid #051619;
  border-top: 1px solid #051619;

  text-align: center;
  width: 100%;
`;

const TagName = styled.a`
  color: #ff6b00 !important;
  font-size: 0.925rem;
  font-weight: 700;
  text-decoration: underline;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40rem;

  padding: 4rem 1.4285rem 5.7142rem;
`;

const PostHashTag = styled.section`
  display: flex;
  gap: 10px;
  margin-bottom: 2rem;
`;

const PostFoot = styled.section`
  display: flex;
  width: 100%;
  max-width: 45.7142rem;

  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const PostLikeBtn = styled.section`
  background: none;
`;

const ShareBtnContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const PostFeatured = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const PostImg = styled.img`
  width: 100%;
`;

const Postdetail = styled.pre`
  white-space: pre-line;
`;
