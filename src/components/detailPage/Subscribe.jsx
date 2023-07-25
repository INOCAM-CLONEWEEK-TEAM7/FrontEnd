import React, { useState } from "react";
import { styled } from "styled-components";
import { ModalCompo } from "./Modal";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [emailState, setEmailState] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const Sub = e => {
    e.preventDefault();
    const IDRegex = new RegExp("[a-z0-9]+@[a-z]+[.][a-z]{2,3}");
    if (IDRegex.test(email)) setEmailState(false);
    else setEmailState(true);
  };

  const ModalView = text => {
    setModalText(text);
    setModal(true);
  };

  return (
    <Div>
      <SubForm onSubmit={Sub}>
        <Roundinput value={email} placeholder="이메일 주소" onChange={e => setEmail(e.target.value)} />
        <OrangeButton>{"뉴스레터 구독하기"}</OrangeButton>
        {emailState ? "이메일 형식이 아닙니다!" : ""}
      </SubForm>
      <ModalCompo state={modal} setState={setModal} text={modalText} />
      <SubscribeInfo>
        {"구독할 경우 "}
        <Span onClick={() => ModalView("personal")}>{"개인정보 수집·이용"}</Span>
        {"과 "}
        <Span onClick={() => ModalView("ad")}>{"광고성 정보 수신"}</Span>
        {"에 동의 하게 됩니다."}
      </SubscribeInfo>
    </Div>
  );
};

export default Subscribe;

const Roundinput = styled.input`
  padding: 1.0333rem;
  font-size: 1.0933rem;
  line-height: 1.1875;
  border-radius: 8px 0 0 8px;
  width: 64%;
  min-width: 200px;
  margin: 0;

  @media only screen and (max-width: 767px) {
    width: 100%;
    border-radius: 8px 8px 8px 8px;
  }
`;

const OrangeButton = styled.button`
  display: block;
  min-width: 30%;
  font-size: 1.1933rem;
  padding: 1.0333rem;
  color: #fff;
  line-height: 1.1575;
  border: 1px solid #051619;
  border-left: 0;
  background-color: #ff6b00;
  border-radius: 0 8px 8px 0;
  cursor: pointer;

  @media only screen and (max-width: 767px) {
    margin-top: 1.3333rem;
    width: 100%;
    border-radius: 8px 8px 8px 8px;
  }
`;

const Div = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  padding: 0 1.4285rem 5.7142rem;
`;

const SubForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 5.8333rem;
  border-top: 1px solid #051619;
`;

const SubscribeInfo = styled.p`
  margin-top: 1.3333rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: darkgray;
  text-align: center;
`;

const Span = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
