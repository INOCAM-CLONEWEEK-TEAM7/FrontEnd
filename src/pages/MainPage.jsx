import { S } from "./MainPageStyles";
import WithHelper from "../components/common/WithHelper";
import useValidateInput from "../hooks/useValidateInput";
import useCheckBox from "../hooks/useCheckBox";
import ChangeOnHoverButton from "../components/common/styles/ChangeOnHoverButton";
import mainlogo from "../images/gosum-home.png";
import StyledInput from "../components/common/styles/StyledInput";
import ContentsSection from "../components/common/ContentsSection";
import CategoryNav from "../components/common/CategoryNav";
import MiniBenner from "../components/common/MiniBenner";
import arrow from "../images/right-arrow.png";
import { getAllNewsesP } from "../api/news";
import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query";
import { useEffect, useState } from "react";

import { getSubsciberCount } from "../api/likeSubscrib";

import { postSubscribe } from "../api/likeSubscrib";


function MainPage() {
  //페이징 요청할 페이지넘버
  const [pageNum, setPageNum] = useState(0);

  //검색결과를 가져올 리엑트 쿼리 
  const { isLoading, isError, data, isSuccess } = useQuery(`all${pageNum}`, getAllNewsesP(pageNum), {
    suspense:pageNum? false: true,
  });

  const {isLoading:subIsLoading, isError:subIsError, data:subData} = useQuery('subNum',getSubsciberCount)

  const [newsList, setNewsList] = useState([]);
  const [ListNum, setListNum] = useState(0);

  //데이터 값을 담아줌
  //////////////////
  useEffect(() => {
    {
      if (isSuccess) {
        setNewsList([...newsList, ...data.data.data.newsList]);
        setListNum(data.data.data.newsCount);
      }
    }
  }, [data?.data.data.newsList]);
  ////////////////////



  const [subscribeuser, setSubscribeUser] = useState(0);
  const [email, handleEmailOnChange, emailValid, emailValidate] = useValidateInput("email",false);
  const [nickname, handleNicknameOnChange, nicknameValid, nicknameValidate] = useValidateInput("nickname",false);
  const [checkper, setCheckper] = useState(true);
  const [checkmar, setCheckmar] = useState(true);


  const [CheckPersonalBox, checkedPersonal] = useCheckBox(
    "개인정보 수집·이용에 동의합니다",
    "https://newneek.notion.site/ec39ad284cfa4b7390fff1366236dc19",
  );
  const [CheckMarketingBox, checkedMarketing] = useCheckBox(
    "광고성 정보 수신에 동의합니다",
    "https://newneek.notion.site/97c0f3756cc54e3f9b201f8c3abd0dba",
  );

  const queryClient = useQueryClient();
  const mutation = useMutation(postSubscribe,{
    onSuccess: (response) => {
      if(response.data.success)
        alert("구독 신청되었어요! 레터가 오기 전에 웹사이트에서 콘텐츠를 읽어 보세요!");
      else{
        alert("이미 구독하셨네요!");
      }
    }
  });

  const handleOnSubmit = e => {
    e.preventDefault();
    setCheckper(checkedPersonal);
    setCheckmar(checkedMarketing);
    emailValidate();
    nicknameValidate();

    if (emailValidate() && nicknameValidate() &&checkedMarketing &&checkedPersonal) {
      mutation.mutate({email,nickname});
      queryClient.invalidateQueries('subNum');
    }
  };

  return (
    <>
      <S.MainBanner>
        <S.MainBannerImage>
          <img src={mainlogo} alt="main-logo"></img>
        </S.MainBannerImage>
        <S.BannerTitle>
          <S.BannerInner>우리가 시간이 없지, 세상이 안 궁금하냐!</S.BannerInner>
        </S.BannerTitle>
        <S.BannerDescription>
          <S.BannerInner>
            <S.SubText>
              🚀 지금 구독하면 <strong style={{ fontWeight: "bold" }}>내일 아침</strong>에 읽을 수 있어요.
            </S.SubText>
            <S.SubText>
              ✨ 지금 <strong style={{ fontWeight: "bold" }}>{subData}명</strong>이 뉴닉을 읽고 있어요.
            </S.SubText>
            <S.SubText style={{ marginTop: "1rem" }}>
              세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은 아니잖아요!
              <br />
              월/화/수/목/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.
            </S.SubText>
            <S.SubscribeForm>
              <WithHelper msg="이메일 주소를 입력해주세요." valid={emailValid} $margin="0">
                <StyledInput
                  type="email"
                  $margin="0"
                  placeholder="이메일 주소"
                  value={email}
                  onChange={handleEmailOnChange}
                />
              </WithHelper>
              <WithHelper msg="이름을 입력해주세요." valid={nicknameValid} $margin="0.5rem 0 1rem">
                <StyledInput
                  type="text"
                  $margin="0"
                  placeholder="닉네임"
                  value={nickname}
                  onChange={handleNicknameOnChange}
                />
              </WithHelper>
              <WithHelper msg="약관에 동의해주세요." valid={checkper}>
                <CheckPersonalBox
                  checked={checkedPersonal}
                  style={{ display: "block", padding: "0.5rem 0", position: "relative" }}
                />
              </WithHelper>
              <WithHelper msg="약관에 동의해주세요." valid={checkmar}>
                <CheckMarketingBox
                  checked={checkedMarketing}
                  style={{ display: "block", padding: "0.5rem 0", position: "relative" }}
                />
              </WithHelper>
              <S.ButtonGroup>
                <ChangeOnHoverButton
                  onClick={handleOnSubmit}
                  $margin="32px 0"
                  $bgColor="var(--white)"
                  $color="var(--black)"
                  $bgOnHover="var(--black)"
                  $colorOnHover="var(--white)"
                  style={{ fontSize: "1rem", outline: "1px solid var(--black)" }}
                >
                  뉴스레터 무료로 구독하기
                </ChangeOnHoverButton>
                <ChangeOnHoverButton $margin="32px 0" style={{ fontSize: "1rem", outline: "1px solid var(--black)" }}>
                  앱 다운로드하기
                </ChangeOnHoverButton>
              </S.ButtonGroup>
            </S.SubscribeForm>
          </S.BannerInner>
        </S.BannerDescription>
      </S.MainBanner>
      <CategoryNav />
      <ContentsSection data={newsList} pageNum={pageNum} setPageNum={setPageNum} total={ListNum} />
      <MiniBenner />
      <div style={{ height: "120px", borderTop: "1px solid var(--black)" }}></div>
      <S.AsideGuide>
        <a href="https://www.notion.so/11e07b3b430a42a9ac8ed26893029e56">
          퀴어 프렌들리한 팀을 위한 뉴닉 레인보우 가이드 🏳️‍🌈
        </a>
        <img src={arrow} alt="right-arrow"></img>
      </S.AsideGuide>
      <S.AsideGuide>
        <a href="https://newneek.notion.site/90eb61e64b18407196422b3405a3bab6">
          3월 8일에 업데이트된 뉴닉의 여성용어 가이드 🍞🌹
        </a>
        <img src={arrow} alt="right-arrow"></img>
      </S.AsideGuide>
    </>
  );
}

export default MainPage;
