import { styled } from "styled-components";

export const Roundinput = styled.input`
  padding: 1.0333rem;
  font-size: 1.1933rem;
  line-height: 1.7675;
  border-radius: 8px 0 0 8px;
  width: 64%;
  min-width: 200px;
  margin: 0;
  background-color: var(--white);
  color: var(--black);
  border-color: var(--black);

  @media only screen and (max-width: 767px) {
    width: 100%;
    border-radius: 8px 8px 8px 8px;
  }
`;

export const OrangeButton = styled.button`
  display: block;
  min-width: 30%;
  font-size: 1.1933rem;
  padding: 1.0333rem;
  color: var(--white);
  line-height: 1.8575;
  border: 1px solid #051619;
  border-left: 0;
  background-color: var(--orange);
  border-radius: 0 8px 8px 0;
  color: var(--black);
  cursor: pointer;

  @media only screen and (max-width: 767px) {
    margin-top: 1.3333rem;
    width: 100%;
    border-radius: 8px 8px 8px 8px;
  }
`;

export const Div = styled.div`
  max-width: 45rem;
  margin: 0 auto;
  padding: 0 1.4285rem 5.7142rem;
`;

export const SubForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 5.8333rem;
  border-top: 1px solid #051619;
`;

export const SubscribeInfo = styled.p`
  margin-top: 1.3333rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--dark-gray);
  text-align: center;
`;

export const Span = styled.span`
  text-decoration: underline;
  cursor: pointer;
  color: var(--black);
`;
