import React from "react";
import styled from "styled-components";
import { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { changeLogin, changeProfile, kindLogin } from "../../store/actions";
import { useHistory } from "react-router-dom";

const LogoutGo = ({ changeLogin, changeProfile, kindLogin, loginKind }) => {

  const history = useHistory();
  const logOutEnd = () => {
    localStorage.clear();
    changeLogin(false);
    changeProfile(false);
    kindLogin("default");
    history.push("/");
    document.documentElement.scrollTop = 0;
  }

  return (
    <Cover>
      <i>
        <Li loginKind={loginKind} onClick={() => logOutEnd()}>
          로그아웃
        </Li>
      </i>
      <GoogleOut loginKind={loginKind}>
        <GoogleLogout
          clientId="95532860446-c8epnqedahgonnetd4ahe925c1gs00f8.apps.googleusercontent.com"
          render={(props) => (
            <li onClick={props.onClick} disabled={props.disabled}>
              로그아웃
            </li>
          )}
          onLogoutSuccess={() => logOutEnd()}
        />
      </GoogleOut>
    </Cover>
  );
};

const mapStateToProps = (state) => {
  return {
    loginKind: state.loginKind,
  };
};

export default connect(mapStateToProps, {
  changeLogin,
  changeProfile,
  kindLogin,
})(LogoutGo);

const Li = styled.li`
  color: #333;
  display: ${(props) => props.loginKind !== "default" && "none !important"};
`;

const GoogleOut = styled.i`
  display: ${(props) => props.loginKind !== "google" && "none !important"};
`;

const Cover = styled.div`
  i {
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-weight: 400;
      font-size: 15px;
      height: 46px;
      margin: 10px 0 0 0;
      background-color: #f2f4f7;
      border-top: 1px solid #e1e2e3;
      color: #767676;
    }
  }
`;
