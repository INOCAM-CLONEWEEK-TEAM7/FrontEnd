import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import * as S from "./styles/ProgressBarStyle";

const Progessbar = ({title}) => {
  const progerssRef = useRef(null);
  const ContainerRef = useRef(null);

  const postData = useSelector(state => state.postData);

  useEffect(() => {
    let progressBarHandler = () => {
      //현재스크롤 윗부분 높이
      let nowScroll = document.documentElement.scrollTop;
      //console.log(postData.position)
      console.log(nowScroll);
      console.log(postData.position);

      if (nowScroll > postData.position) {
        ContainerRef.current.style.display = "block";
        nowScroll = nowScroll;
        //스크롤 시키지 않았을때 전체높이 - 눈에 보이는 만큼의 높이
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        //%로 계산
        const scroll = `${(nowScroll - postData.position) / (windowHeight - postData.position)}`;

        progerssRef.current.style.transform = `scale(${scroll}, 1)`;
      } else {
        ContainerRef.current.style.display = "none";
      }
    };

    //스크롤 이벤트리스너 만듬 ref는 랜더링을 일으키지 않기에 콜백함수로 만듬
    window.addEventListener("scroll", progressBarHandler);
    //useEffect로 unmount 됐을때 이벤트 없애줘야 메모리 누수 방지
    return () => window.removeEventListener("scroll", progressBarHandler);
  }, []);

  return (
    <S.ProgressbarContainer ref={ContainerRef}>
      <S.ProgressTitle>{title}</S.ProgressTitle>
      <S.Progressbar ref={progerssRef} />
    </S.ProgressbarContainer>
  );
};

export default Progessbar;
