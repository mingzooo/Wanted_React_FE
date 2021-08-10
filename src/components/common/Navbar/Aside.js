import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Search } from "@styled-icons/material-sharp/Search";
import { NotificationsNone } from "@styled-icons/material-sharp";
import { UserCircle } from "@styled-icons/boxicons-solid";
import { Menu } from "@styled-icons/boxicons-regular";
import {
  changeModal,
  changeProfile,
} from "../../../store/actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SearchModal from "./Search/SearchModal";
import LogoutGo from "../../Login/LogoutGo";

const Aside = ({
  changeModal,
  changeProfile,
  loginCheck,
  profileUpdown,
  history,
}) => {
  const [isSearchModalOn, setIsSearchModalOn] = useState(false);

  const handleSearch = () => {
    setIsSearchModalOn(prevIsSearch => !prevIsSearch);
  };

  return (
    <Container loginCheck={loginCheck}>
      <List onClick={handleSearch}>
        <SearchIcon />
      </List>
      {isSearchModalOn && <SearchModal clickSearch={handleSearch} />}
      <InLoginProfile
        loginCheck={loginCheck}
      >
        <AlarmIcon />
        <UserIcon onClick={() => changeProfile(!profileUpdown)} />
      </InLoginProfile>
      <InLogoutProfile
        onClick={() => changeModal(true)}
        loginCheck={loginCheck}
      >
        회원가입/로그인
      </InLogoutProfile>
      <Button loginCheck={loginCheck}>기업 서비스</Button>
      <HiddenProfile show={profileUpdown}>
        <ul>
          <li onClick={() => history.push("/myprofile")}>
            <Link to="/">프로필</Link>
          </li>
          <li>
            <Link to="/">지원현황</Link>
          </li>
          <li>
            <Link to="/">좋아요</Link>
          </li>
          <li>
            <Link to="/">북마크</Link>
          </li>
        </ul>
        <LogoutGo />
      </HiddenProfile>
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  width: ${(props) => (props.loginCheck ? "20%" : "27%")};
  justify-content: ${(props) => (props.loginCheck ? "space-evenly" : "space-between")};
  `;

const List = styled.li`
  cursor: pointer;
  font-size:0.88rem;
  font-weight: 550;
  margin-right:${(props) => (props.loginCheck ? "0" : "1rem")};
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

const InLoginProfile = styled.div`
  display: ${(props) => (props.loginCheck ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 30%;
  height: 100%;
`;

const InLogoutProfile = styled.li`
  display: ${(props) => (props.loginCheck ? "none" : "")};
  cursor: pointer;
  width: 50%;
  font-size:0.88rem;
  font-weight: 550;
  margin-right:1rem;
  color:#0D0D0D;
`;

const AlarmIcon = styled(NotificationsNone)`
  width: 24px;
`;

const UserIcon = styled(UserCircle)`
  width: 30px;
  color: gray;
`;

const Button = styled.button`
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 4px 4px;
  font-weight: 400;
  background-color: white;
  color: #666666;
  cursor: pointer;
  width: ${(props) => (props.loginCheck ? "40%" : "30%")};
  font-size: 0.8rem;
`;

const HiddenProfile = styled.div`
  position: ${(props) => (props.show ? "absolute" : "")};
  display: ${(props) => (props.show ? "" : "none")};
  background-color: #fff;
  top: 60px;
  width: 170px;
  border-radius: 3px;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e1e2e3;
  ul {
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 100%;
      font-weight: 400;
      font-size: 15px;
      color: #333;
    }
    li:first-child {
      border-bottom: 1px solid #e1e2e3;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    navPick: state.navPick,
    loginCheck: state.loginCheck,
    profileUpdown: state.profileUpdown,
  };
};

export default withRouter(
  connect(mapStateToProps, { changeModal, changeProfile })(Aside)
);
