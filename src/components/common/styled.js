import styled from "styled-components";

export const PageWrap = styled.div`
    width:100vw;
    height:100vh;
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
  max-width: 1060px;
  display: block;
  box-sizing: border-box;
`;

export const NavigationBack = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const HomeLogo = styled.img`
  display: block;
  cursor: pointer;
  padding-right: initial;
  width: 5em;
  padding-bottom: 0.4em;
  padding-left: 0.6em;
`;

export const Menus = styled.ul`
  display: block;
  flex-direction: row;
  list-style: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
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
  line-height: 0.1em;
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
<<<<<<< HEAD
  // margin-block-start: 1em;
  // margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
=======
>>>>>>> 3709b66e5dfab945bf50f61ebb7f8c9f3df3aa70
`;

export const UserListItem = styled.li`
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
<<<<<<< HEAD
  margin: 0;
  border: 0;
=======
>>>>>>> 3709b66e5dfab945bf50f61ebb7f8c9f3df3aa70
`;

export const UserBtn = styled.button`
  position: relative;
  height: 100%;
  padding: 0 10px;
  font-size: 1em;
  font-weight: 600;
<<<<<<< HEAD
  margin: 0;
=======
>>>>>>> 3709b66e5dfab945bf50f61ebb7f8c9f3df3aa70
  border: 0;
  background: none;
  cursor: pointer;
`;

export const Line = styled.div`
  position: relative;
  font-size: 0.5em;
  font-weight: 100;
  color: grey;
  opacity: 0.4;
  margin: 6px;
`;

export const UserBtn2 = styled.button`
  position: relative;
  height: 100%;
  padding: 5px 10px 5px 10px;
  font-size: 0.8rem;
  background-color: transparent;
  margin-right: 15px;
  margin-left: 15px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 400;
  line-height: 0.9rem;
`;