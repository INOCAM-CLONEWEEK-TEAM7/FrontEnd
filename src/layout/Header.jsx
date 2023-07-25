import { useNavigate } from "react-router-dom";
import * as CiIcons from "react-icons/ci";
import { S } from "./HeaderStyles";

function Header() {
  const navigate = useNavigate();

  return (
    <S.HeaderLayout>
      <S.HeaderWrapper>
        <S.HeaderLogo
          onClick={() => {
            navigate("/");
          }}
        />
        <S.SearshButton
          onClick={() => {
            navigate("/search");
          }}
        >
          <CiIcons.CiSearch />
        </S.SearshButton>
        <S.LoginButton
          onClick={() => {
            navigate("/login");
          }}
        >
          <CiIcons.CiUser />
        </S.LoginButton>
      </S.HeaderWrapper>
    </S.HeaderLayout>
  );
}

export default Header;
