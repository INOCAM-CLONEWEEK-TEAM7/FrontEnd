import React, { useLayoutEffect, useState } from 'react';
import { styled } from 'styled-components';

const GetListBtn = ({pageNum, setPageNum, total}) => {
 
   const [BtnState,setBtnState]= useState(false);
    
   //나중에 계산하자 일단 메인부터 
    const last=Math.ceil(total/12);

    //스크롤 위치 유지 
    const SetScroll =()=>{
        let nowScroll = document.documentElement.scrollTop;
        window.scrollTo(0,nowScroll)
    }

    // 더보기 기능 
    const GetList =async()=>{
        if(pageNum>=last){
            setBtnState(true)
            console.log(BtnState)
            return -1;
        }
        await setPageNum(pageNum+1);
        SetScroll();
    }
    return (
        <Button BtnState={BtnState} onClick={GetList}>
            더보기
        </Button>
    );
};

export default GetListBtn;

const Button = styled.button`
    display: ${(props)=>props.BtnState ? 'none' : 'block'};
    width: 200px;
    border-radius:10px;
    padding:10px;
`