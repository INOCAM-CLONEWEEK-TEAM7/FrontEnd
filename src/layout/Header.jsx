import { useNavigate } from "react-router-dom";
import * as CiIcons from "react-icons/ci";
import onToggle from "../assets/onToggle.png";
import offToggle from "../assets/offToggle.png";
import { S } from "./HeaderStyles";
import useModal from "../hooks/useModal";
import MenuCard from "./MenuCard";
import { ReactComponent as NightModeIcon } from "../assets/nightModeIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../modules/nightMode";
import { Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [Modal, openModal, closeModal, openerRef] = useModal(false);
  const isLoggedin = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const nightMode = useSelector(state => state.nightMode);

  return (
    <S.HeaderLayout>
      <S.Small>
        <S.StyledLink to={'/'}>🏠홈</S.StyledLink>
        <S.StyledLink to={'/search'}>🔍검색</S.StyledLink>
        <S.StyledLink>🦔마이페이지</S.StyledLink>
      </S.Small>
      <S.HeaderWrapper>
        <S.HeaderLogo
          onClick={() => {
            navigate("/");
          }}
        />

        <S.NightModeContainer>
          <div>
            <NightModeIcon className="icon"/>
            <img className="toggle" src={nightMode? onToggle:offToggle} onClick={()=>dispatch(toggleMode())}/>
          </div>
        </S.NightModeContainer>
        <Modal>
          <MenuCard/>
        </Modal>
        <S.SearshButton
          onClick={() => {
            navigate("/search");
          }}
        >
          <CiIcons.CiSearch />
        </S.SearshButton>
        <S.LoginButton
          onClick={
            isLoggedin? 
            openModal
            :
            () => {
            navigate("/login");
          }}
          ref={openerRef}
        >
          {isLoggedin?
            '🦔'
            :
            <CiIcons.CiUser />
          }
        </S.LoginButton>
      </S.HeaderWrapper>
    </S.HeaderLayout>
  );
}

export default Header;
