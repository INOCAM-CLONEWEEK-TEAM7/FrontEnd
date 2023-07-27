import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import * as S from "./styles/ProgressBarStyle";

const Progessbar = ({title}) => {
  const progerssRef = useRef(null);
  const ContainerRef = useRef(null);

  const postData = useSelector(state => state.postData);

  useEffect(() => {
    let progressBarHandler = () => {
      //post.jsx에서 필요한 부분 리덕스에 저장해서 가져옵니다 porps로 가져오기에는 상위로갓다 하위로가는게 번잡스러워서
      
      //현재스크롤 윗부분 높이
      let nowScroll = document.documentElement.scrollTop;
      
      //헤더부분을 제외하고 post 부분부터 보여야해서 
      if (nowScroll >= postData.postPosition) {
        ContainerRef.current.style.display = "block";

        //스크롤 시키지 않았을때 전체높이 - 눈에 보이는 만큼의 높이
        //const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
       
        // %계산 : 헤더아래쪽부터 / (post영역의 높이 - 현재보이는 높이(스크롤 아래쪽을 기준으로 도착지정위함))   
        const scroll = `${(nowScroll - postData.postPosition) / (postData.postHeight-document.documentElement.clientHeight)}`;
        //프로그래시브 바 진행
        progerssRef.current.style.transform = `scale(${scroll}, 1)`;
        //0.1초 지연줘서 부드럽게
        progerssRef.current.style.transition='.1s';
      } 
      
      else {
        //post 부분보다 높게 스크롤이 위치할때 
        ContainerRef.current.style.display = "none";
      }
    };

    //스크롤 이벤트리스너 만듬 ref는 랜더링을 일으키지 않기에 콜백함수로 만듬
    window.addEventListener("scroll", progressBarHandler);
    //useEffect로 unmount 됐을때 이벤트 없애줘야 메모리 누수 방지
    return () => window.removeEventListener("scroll", progressBarHandler);
  }, [postData]);

  return (
    <S.ProgressbarContainer ref={ContainerRef}>
      <S.ProgressTitle>{title}</S.ProgressTitle>
      <S.Progressbar ref={progerssRef} />
    </S.ProgressbarContainer>
  );
};

export default Progessbar;
