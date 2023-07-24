import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';

const Progessbar = () => {
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
        ContainerRef.current.style.display = 'block';
        nowScroll = nowScroll;
        //스크롤 시키지 않았을때 전체높이 - 눈에 보이는 만큼의 높이
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        //%로 계산
        const scroll = `${(nowScroll - postData.position) / (windowHeight - postData.position)}`;

        progerssRef.current.style.transform = `scale(${scroll}, 1)`;
      } else {
        ContainerRef.current.style.display = 'none';
      }
    };

    //스크롤 이벤트리스너 만듬 ref는 랜더링을 일으키지 않기에 콜백함수로 만듬
    window.addEventListener('scroll', progressBarHandler);
    //useEffect로 unmount 됐을때 이벤트 없애줘야 메모리 누수 방지
    return () => window.removeEventListener('scroll', progressBarHandler);
  }, []);


  return (
    <ProgressbarContainer ref={ContainerRef}>
      <ProgressTitle>{'타이틀이 들어갑니다'}</ProgressTitle>
      <Progressbar ref={progerssRef} />
    </ProgressbarContainer>
  );
};

export default Progessbar;

const Progressbar = styled.div`
  display: block;
  background: rgba(255, 107, 0, 1);
  transform-origin: top left;
  //x축 y축 비율
  transform: scale(0, 1);
  height: 100%;
`;

const ProgressbarContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  background: white;

  width: 100%;
  height: 50px;


  border-bottom:1px solid black;
`
const ProgressTitle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 20;

display:flex;
justify-content:center;
align-items:center;

font-weight:bold;
`
