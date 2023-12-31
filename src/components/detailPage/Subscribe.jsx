import React, { useEffect, useState } from "react";
import { ModalCompo } from "./Modal";
import * as S from "./styles/SubscribeStyle";
import useValidateInput from "../../hooks/useValidateInput";
import WithHelper from "../common/WithHelper";
import {postSubscribe} from '../../api/likeSubscrib'
import { useQueryClient } from "react-query";

const Subscribe = () => {
  const [emailState, setEmailState] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [email, handleEmailOnChange, emailValid] = useValidateInput("email");
  const [checkTry, setCheckTry] = useState(false);

  const queryClient = useQueryClient();

  const Sub = async(e) => {
    e.preventDefault();
    setEmailState(!emailValid);
    setCheckTry(true);

    if(emailValid===true){
      const nickname="";
      try{
        const response = await postSubscribe({email,nickname});
        if(response.data.success) alert("구독 신청되었어요! 레터가 오기 전에 웹사이트에서 콘텐츠를 읽어 보세요!");
        else alert("이미 구독하셨네요!")
        queryClient.invalidateQueries('subNum');
      } catch (error){
        alert('에러입니다')
      }
      
      
    }
  };

  useEffect(() => {
    if (email === "") setEmailState(false);
    else if (checkTry) setEmailState(!emailValid);
  }, [email]);

  const ModalView = text => {
    setModalText(text);
    setModal(true);
  };


  return (
    <S.Div>
      <S.SubForm onSubmit={Sub}>
        <S.Roundinput value={email} placeholder="이메일 주소" onChange={handleEmailOnChange} />
        <S.OrangeButton>{"뉴스 레터 구독하기"}</S.OrangeButton>
        <WithHelper msg="올바른 이메일 주소를 입력해주세요." valid={!emailState} $margin="1rem 0" />
      </S.SubForm>

      <ModalCompo state={modal} setState={setModal} text={modalText} />
      
      <S.SubscribeInfo>
        {"구독할 경우 "}
        <S.Span onClick={() => ModalView("personal")}>{"개인정보 수집·이용"}</S.Span>
        {"과 "}
        <S.Span onClick={() => ModalView("ad")}>{"광고성 정보 수신"}</S.Span>
        {"에 동의하게 됩니다."}
      </S.SubscribeInfo>
    </S.Div>
  );
};

export default Subscribe;
