import Menu from "./Menu";
import MenuOverlay from "./MenuOverlay";
import Aside from "./Aside";
import styled from "styled-components";
import { useState, useCallback, } from "react";
import LoginModal from '../../Login/LoginModal';

const Navbar = () => {
  //메뉴 드롭다운
  const [isOverlayOpened, setOverlayOpened] = useState(false);
  const onOpenOverlay = useCallback(() => setOverlayOpened(true), []);
  const onCloseOverlay = useCallback(() => setOverlayOpened(false), []);

  //로그인

  return (
    <>
      <Container>
        <NavBox>
          <Logo>wanted</Logo>
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
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
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