import { styled } from "styled-components";

export const Progressbar = styled.div`
  display: block;
  background: rgba(255, 107, 0, 1);
  transform-origin: top left;
  // x축 y축 비율
  transform: scale(0, 1);
  height: 100%;
`;

export const ProgressbarContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: white;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid black;
`;
export const ProgressTitle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
