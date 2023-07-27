import React from 'react';
import { styled } from 'styled-components';

const GetListBtn = ({pageNum, setPageNum}) => {

    // 더보기 기능 
    const GetList =async()=>{
        await setPageNum(pageNum+1);
    }

    return (
        <Button onClick={GetList}>
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