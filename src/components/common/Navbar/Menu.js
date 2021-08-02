import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Menu = ({ isOverlayOpened, onOpenOverlay, onCloseOverlay }) => {
    const [clickedIndex, setIndex] = useState();

    const ref = useRef();
    const searchRef = useRef();

    useEffect(() => {
        ref.current.addEventListener("mouseenter", onCloseOverlay);
        ref.current.addEventListener("click", (e) => setIndex(e.target.id));
    }, [ref]);
    useEffect(() => searchRef.current.addEventListener("mouseenter", onOpenOverlay), [searchRef]);

    return (
        <Container ref={ref}>
            <List id="1" index={clickedIndex}>
                홈
            </List>
            <List id="2" index={clickedIndex} ref={searchRef}>
                탐색
            </List>
            <List id="3" index={clickedIndex}>
                커리어 성장
            </List>
            <List id="4" index={clickedIndex}>
                직군별 연봉
            </List>
            <List id="5" index={clickedIndex}>
                이력서
            </List>
            <List id="6" index={clickedIndex}>
                매치업
            </List>
            <List id="7" index={clickedIndex}>
                프리랜서
            </List>
            <List id="8" index={clickedIndex}>
                Ai 합격예측
            </List>
        </Container>
    );
};

const Container = styled.ul`
  display: flex;
`;

const List = styled.li`
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  &:nth-child(${(props) => props.index}) {
    box-shadow: inset 0 -2px #258bf7;
  }
  &:hover{
      border-bottom: 2px solid gray;
  }
  //Mobile
  @media screen and (max-width: 767px) {
    padding: 15px 10px;
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7) {
      display: none;
    }
  }
  //PC
  @media (min-width: 1200px) {
    padding: 15px 20px;
    &:nth-child(1) {
      display: none;
    }
  }
`;

export default Menu;