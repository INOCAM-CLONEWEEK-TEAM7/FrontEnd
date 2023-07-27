import React from "react";
import { styled } from "styled-components";
import ChangeOnHoverButton from "./styles/ChangeOnHoverButton";

const GetListBtn = ({ pageNum, setPageNum }) => {
  // 더보기 기능
  const GetList = async () => {
    await setPageNum(pageNum + 1);
  };

  return (
    <ChangeOnHoverButton
      $bgColor="var(--white)"
      $color="var(--black)"
      $bgOnHover="var(--orange)"
      $colorOnHover="var(--black)"
      $width="200px"
      onClick={GetList}
    >
      더보기
    </ChangeOnHoverButton>
  );
};

export default GetListBtn;

const Button = styled.button`
  display: ${props => (props.BtnState ? "none" : "block")};
  width: 200px;
  border-radius: 10px;
  padding: 10px;
`;
