import React, { useState } from 'react';
import { ModalCompo } from './Modal';
import * as S from "./styles/SubscribeStyle";
const Subscribe = () => {
    const [email,setEmail] = useState('');
    const [emailState, setEmailState] = useState(false);
    const [modal,setModal] = useState(false);
    const [modalText, setModalText] = useState('')
    
    const Sub=(e)=>{
        e.preventDefault();
        const IDRegex = new RegExp('[a-z0-9]+@[a-z]+[.][a-z]{2,3}');
        if (IDRegex.test(email)) setEmailState(false);
        else setEmailState(true);
        
    }

    const ModalView =(text)=>{
        setModalText(text);
        setModal(true);
    }

    return (
        <S.Div>
            <S.SubForm onSubmit={Sub} >
                <S.Roundinput 
                value= {email} 
                placeholder='이메일 주소'
                onChange={(e)=>setEmail(e.target.value)}
                />
                <S.OrangeButton>
                    {'뉴스레터 구독하기'}
                </S.OrangeButton>
                {
                    emailState
                    ? '이메일 형식이 아닙니다!'
                    : ''
                }
            </S.SubForm>
            <ModalCompo state={modal} setState={setModal} text={modalText}/>
            <S.SubscribeInfo>
                {"구독할 경우 "}
                <S.Span onClick={()=>ModalView('personal')}>{"개인정보 수집·이용"}</S.Span>
                {"과 "}
                <S.Span onClick={()=>ModalView('ad')}>{"광고성 정보 수신"}</S.Span>
                {"에 동의 하게 됩니다."}
            </S.SubscribeInfo>
        </S.Div>
    );
};

export default Subscribe;
