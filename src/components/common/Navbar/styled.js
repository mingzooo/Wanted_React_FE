import styled from "styled-components";

export const PageWrap = styled.div`
    width:100vw;
    height:100vh;
    background-color:white;
`;
export const TextMiddle = styled.div`
    position:absolute;
    top:50%;
    left:50%;

    transform:translate(-50%,-50%);
`;

//navbar

export const Back = styled.div`
  position: fixed;
  background-color: white;
  padding-right: initial;
  width: 100%;
  z-index: 100;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  display: block;
`;

export const MenuBack = styled.div`
  margin: 0 auto;
  height: 3.2em;
  width: 90%
  position: relative;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
`;

export const NavigationBack = styled.nav`
width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const HomeLogo = styled.img`
  display: flex;
  cursor: pointer;
  padding-right: initial;
  width: 5em;
  padding-bottom: 0.2em;
`;

export const Menus = styled.ul`
width:58%;
padding-top:0.2em;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content:space-evenly;
}
`;

export const MenuItem = styled.li`
  height: inherit;
  display: inline-block;
  list-style: none;
`;

export const Item = styled.a`
  position: relative;
  font-size: 0.88em;
  line-height: 0.05em;
  font-weight: 600;
  padding-bottom: 0.6em;
  padding-left: 0.6em;
  padding-right: 0.6em;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

export const User = styled.aside`
  padding: 0;
  height: 100%;
  display: block;
  border: 0;
  font-size: 0.8rem;
`;

export const UserList = styled.ul`
  height: 100%;
  margin: 0;
  list-style: none;
  border: 0;
  flex-direction: row;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const UserListItem = styled.li`
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin: 0;
  border: 0;
`;

export const UserBtn = styled.button`
  position: relative;
  height: 100%;
  padding: 0 10px;
  font-size: 1em;
  font-weight: 600;
  border: 0;
  background: none;
  cursor: pointer;
`;

export const Line = styled.div`
  position: center;
  font-size: 0.5em;
  font-weight: 100;
  color: grey;
  opacity: 0.4;
  margin: 20px 6px;
`;

export const UserBtn2 = styled.button`
  position: relative;
  height: 60%;
  font-size: 0.8rem;
  background-color: transparent;
  margin: 10px 15px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 400;
  line-height: 0.9rem;
`;