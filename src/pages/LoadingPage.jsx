import { keyframes, styled } from "styled-components";
import LoadingImg from "../images/gosum-home.png";

function LoadingPage() {
  return (
    <LoadingSection>
      <Img src={LoadingImg} />
    </LoadingSection>
  );
}

export default LoadingPage;

const rotate_image = keyframes`
  100% {
  transform : rotate(360deg)
}
`;

const Img = styled.img`
  animation: ${rotate_image} 6s linear infinite;
  transform-origin: 50% 50%;
  width:100px;
`;

const LoadingSection = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);

  display: flex;
  height: 100vh;
  width:100vw;
  justify-content: center;
  align-items: center;

  background-color:var(--beige);

  z-index:100;
`;
