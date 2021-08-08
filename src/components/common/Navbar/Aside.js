import styled from "styled-components";
import { Search } from "@styled-icons/material-sharp/Search";
import { NotificationsNone } from "@styled-icons/material-sharp";
import { UserCircle } from "@styled-icons/boxicons-solid";
import { Menu } from "@styled-icons/boxicons-regular";
import {
  changeNavColor,
  changeModal,
  changeProfile,
} from "../../../store/actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Aside = ({ changeModal, loginCheck }) => {

  return (
    <Container>
      <List>
        <SearchIcon />
      </List>
      <List onClick={() => changeModal(true)} loginCheck={loginCheck} >
        회원가입/로그인
      </List>
      {/* 알람하고 사용자아이콘은 로그인한 후에 */}
      {/* <List>
                <AlarmIcon />
            </List>
            <List>
                <UserIcon />
            </List> */}
      <List>
        <Button>기업 서비스</Button>
      </List>
      {/* <List>
                <MenuIcon />
            </List> */}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

const List = styled.li`
  cursor: pointer;
  font-size:0.88rem;
  font-weight: 550;
  margin-right:1rem;
  color:#0D0D0D;
  //mobile
  @media screen and (max-width: 767px) {
    &:nth-child(3),
    &:nth-child(4) {
      display: none;
    }
  }
  //pc
  @media (min-width: 1200px) {
    &:nth-child(5) {
      display: none;
    }
  }
`;

const SearchIcon = styled(Search)`
  width: 24px;
`;

const AlarmIcon = styled(NotificationsNone)`
  width: 24px;
`;

const UserIcon = styled(UserCircle)`
  width: 36px;
  color: gray;
`;

const Button = styled.button`
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  margin: 0 0 0 15px;
  font-weight: 400;
  padding: 5px 10px;
  background-color: white;
  color: #666666;
  cursor: pointer;
`;

const MenuIcon = styled(Menu)`
  width: 28px;
`;

const mapStateToProps = (state) => {
  return {
    navPick: state.navPick,
    loginCheck: state.loginCheck,
    profileUpdown: state.profileUpdown,
  };
};

export default withRouter(
  connect(mapStateToProps, { changeModal })(Aside)
);
