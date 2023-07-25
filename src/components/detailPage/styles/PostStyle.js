import { styled } from 'styled-components';

export const PostSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PostHeader = styled.div`
  padding: 4rem 0 4rem 0;
  border-bottom: 1px solid #051619;


  text-align: center;
  width: 100%;
`;

export const TagName = styled.a`
  color: #ff6b00 !important;
  font-size: 0.925rem;
  font-weight: 700;
  text-decoration: underline;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40rem;

  padding: 4rem 1.4285rem 5.7142rem;
`;

export const PostHashTag = styled.section`
  display: flex;
  gap: 10px;
  margin-bottom: 2rem;
`;

export const PostFoot = styled.section`
  display: flex;
  width: 100%;
  max-width: 45.7142rem;

  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const PostLikeBtn = styled.section`
  background: none;
`;

export const ShareBtnContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const PostFeatured = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const PostImg = styled.img`
  width: 100%;
`;

export const Postdetail = styled.pre`
  white-space: pre-line;
`;
