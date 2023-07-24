import LogoBox from "./styles/LogoBox";
import logo from "../../newneek_logo.png"
import { Link } from "react-router-dom";

function Logo({$margin, $width}) {
  return (
    <LogoBox {...{$margin, $width}}>
      <Link to='/'>
        <img src={logo} width='100%' alt='로고 이미지'/>
      </Link>
    </LogoBox>
  )
}

export default Logo