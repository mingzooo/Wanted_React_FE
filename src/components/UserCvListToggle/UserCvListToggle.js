import React from "react";
import styled from "styled-components"
import { API } from "../../config"

const UserCvListToggle = (props) => {

  const token = localStorage.getItem("X-ACCESS-TOKEN");

  const deleteFunc = () => {
    fetch(`/cvs`, {
      method: "PATCH",
      headers: {
        "Authorization": token,
        'Content-Type': 'application/json',
      }
    })
      .then(props.getFunc)
  }

  return (
    <>
      <ToggleBox isToggle={props.isToggle} index={props.index}>
        <ul>
          <li onClick={() => props.getFunc}>이름 변경</li>
          <li>다운로드</li>
          <li onClick={deleteFunc}>삭제</li>
        </ul>
      </ToggleBox>
    </>
  )
}

export default UserCvListToggle;

const ToggleBox = styled.div`
  display:${props => props.isToggle === props.index ? "" : "none"}; 
  background-color:white;
  z-index:1000;
  border: 1px solid #d2d2d2;
  position:absolute;
  bottom:-75px;
  right:15px;
  width:160px;
  height:90px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  ul {
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:5px 0;
    li {
      display:flex;
      align-items:center;
      cursor:pointer;
      height:100%;
      font-size:14px;
      padding-left:10%;
      color: #272b33;    
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
`;
