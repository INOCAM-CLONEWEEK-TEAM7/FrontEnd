import { styled } from 'styled-components';

/* 보내줘야하는 props들. 안 보내줄 시 기본설정으로 적용된
$bgColor: 배경색(기본: var(--black))
$bgOnHover: 마우스 올렸을 때 배경 색(기본: var(--white))
$color: 글자색(기본: var(--white))
$colorOnHover: 마우스 올렸을 때 글자 색(기본: var(--black))
$margin: 마진(기본: 0 0 0 0)
$padding: 패딩(기본: 10px 1.5rem 11px)
$width: width(기본: auto)
*/
const ChangeOnHoverButton = styled.button`
  cursor: pointer;
  background-color: ${({ $bgColor }) => $bgColor || 'var(--black)'};
  color: ${({ $color }) => $color || 'var(--white)'};
  border: 1px solid var(--black);
  border-radius: 8px;
  line-height: 25.2px;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  margin: ${({ $margin }) => $margin || '0px'};
  padding: ${({ $padding }) => $padding || '10px 1.5rem 11px'};
  width: ${({ $width }) => $width || 'auto'};

  &&:hover {
    background-color: ${({ $bgOnHover }) => $bgOnHover || 'var(--white)'};
    color: ${({ $colorOnHover }) => $colorOnHover || 'var(--black)'};
  }
`;

export default ChangeOnHoverButton;
