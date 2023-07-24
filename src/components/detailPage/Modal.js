import styled from 'styled-components';

export const ModalCompo = ({ state, setState, text }) => {
  return (
    <div>
      <OutLayer state={state} onClick={() => setState(false)}></OutLayer>
      <Modal state={state}>
        {text === 'ad' ? (
          <Pre>
            {`광고성 정보 수신 동의
                    
                            광고성 정보 수신에 동의하실 경우, 뉴닉은 이메일 뉴스레터에 광고성 정보를 함께 발송할 수 있습니다.
                    
                            뉴닉은 타 기업, 단체, 브랜드와 광고 콘텐츠를 만들어 종종 소개하는데요. 읽는 사람에게 방해가 되는 광고가 아닌, 협업하는 조직의 전문성과 뉴닉만의 스토리텔링을 더해 더욱 유익하고 재밌는 콘텐츠를 만들어내고자 노력하고 있습니다.
                            더불어 광고성 정보 수신에 동의한다고 하더라도, 광고 콘텐츠가 이메일 뉴스레터에 들어가는 경우 꼭 제목에 (광고)를 붙여 메일을 발송합니다.
                    
                            현재는 뉴스레터에서 광고성 정보만 따로 보내는 것이 어렵기 때문에, 광고성 정보 수신 동의를 하지 않을 경우 서비스 이용이 제한될 수 있습니다. 뉴닉의 광고성 정보 수신 서비스를 원하지 않을 경우, 뉴스레터 하단의 '수신 거부'를 눌러 서비스 이용을 해지할 수 있습니다.
                    
                            혹시 뉴닉의 광고에 대해 더 자세히 알고 싶다면,`}{' '}
            <a href={'https://newneek.co/branded/policy'}>{'이 링크'}</a>
            {`를 클릭하세요.
                            `}
          </Pre>
        ) : (
          <Pre>
            {`개인정보 수집·이용 동의
                            뉴닉은 뉴스레터 발송을 위해 최소한의 개인정보를 수집하고 이용합니다.

                            수집·이용 목적	수집·이용 항목	보유·이용 기간
                            뉴닉 뉴스레터 발송	이메일주소	서비스 종료 시 또는 뉴스레터 구독 해지 시 즉시 파기

                            동의를 거부하는 경우에 대한 안내
                            동의하지 않을 경우 개인정보 수집·이용 동의를 거부할 권리가 있습니다. 거부할 경우 뉴스레터 구독 서비스를 이용할 수 없습니다.



                            개인정보 처리 위탁·수탁
                            회사는 서비스 제공 및 향상을 위해서 아래와 같이 개인정보를 위탁하고 있으며, 관계 법령에 따라 위탁 계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다.

                            수탁업체	          수탁업무 내용	                                               개인정보의 보유 및 이용기간
                            스티비	  뉴스레터 또는 광고가 포함된 뉴스레터 발송, 서비스 이용 통계 및 분석	구독해지 시 또는 위탁계약 종료 시
                            AWS	      개인정보가 저장된 국내 클라우드 서버 운영 및 관리	                   구독해지 시 또는 위탁계약 종료 시
                            `}
          </Pre>
        )}
      </Modal>
    </div>
  );
};

const Modal = styled.div`
  display: ${props => (props.state ? 'block' : 'none')};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;

  padding: 24px;
  background-color: white;

  max-width: 800px;
  width: 95%;

  height: 80%;

  z-index: ${props => (props.state ? 100 : -1)};
`;

const OutLayer = styled.div`
  position: fixed;
  left: 0%;
  top: 0%;
  height: 100vh;
  width: 100vw;
  z-index: ${props => (props.state ? 10 : -1)};

  background: ${props => (props.state ? 'rgba(0,0,0,0.6)' : '')};
`;

const Pre = styled.pre`
  white-space: pre-line;
`;
