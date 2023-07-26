import { useNavigate } from "react-router-dom";
import * as CiIcons from "react-icons/ci";
import { S } from "./HeaderStyles";
import useModal from "../hooks/useModal";
import MenuCard from "./MenuCard";

function Header() {
  const navigate = useNavigate();
  const [Modal, openModal, closeModal, openerRef] = useModal(false);
  const isLoggedin = localStorage.getItem("accessToken");

  return (
    <S.HeaderLayout>
      <S.HeaderWrapper>
        <S.HeaderLogo
          onClick={() => {
            navigate("/");
          }}
        />
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
