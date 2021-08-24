import Menu from "./Menu";
import MenuOverlay from "./MenuOverlay";
import Aside from "./Aside";
import styled from "styled-components";
import { useState, useCallback, } from "react";
import LoginModal from '../../Login/LoginModal';
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  //메뉴 드롭다운
  const [isOverlayOpened, setOverlayOpened] = useState(false);
  const onOpenOverlay = useCallback(() => setOverlayOpened(true), []);
  const onCloseOverlay = useCallback(() => setOverlayOpened(false), []);

  //로그인

  return (
    <>
      <Container>
        <NavBox>
          <Logo onClick={() => {
            document.documentElement.scrollTop = 0;
            history.push("/");
          }}><img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Ftheme.zdassets.com%2Ftheme_assets%2F9309779%2F480a35976bf401a88dd7388d8f5c19d77227cd35.png" /></Logo>
          <Menu
            isOverlayOpened={isOverlayOpened}
            onOpenOverlay={onOpenOverlay}
            onCloseOverlay={onCloseOverlay}
          />
          <Aside />
        </NavBox>
        <MenuOverlay opened={isOverlayOpened} onCloseOverlay={onCloseOverlay} />
      </Container>
      <LoginModal />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  background: #ffffff;
  position:fixed;
  border-bottom: 1px solid #e1e2e3;
  z-index:100;
  color: #060606;
`;

const Logo = styled.div`
  width: 6.8%;
  cursor: pointer;
  img{
    width: 100%;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const NavBox = styled.nav`
  //Mobile
  @media screen and (max-width: 780px) {
    width: 70%;
    height: 50px;
  }
  //PC
  @media (min-width: 1200px) {
    width: 70%;
    height: 50px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  z-index: 200;
`;

export default Navbar;