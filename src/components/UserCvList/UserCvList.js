import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { withRouter } from "react-router-dom"
import UserCvListToggle from "../UserCvListToggle/UserCvListToggle"
import { MdMoreVert } from 'react-icons/md';

const UserCvList = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getFunc();
  }, [])

  function getFunc() {
    const token = localStorage.getItem("X-ACCESS-TOKEN");
    fetch(`/cvs`, {
      method: 'GET',
      headers: {
        "X-ACCESS-TOKEN": token,
      }
    })
      .then((response) => response.json())
      .then((res) => {
        setData(res.result);
      })
  }

  function moveDetailFunc(input) {
    props.history.push(`/cv/${input}`)
  }

  function validation(input) {
    if (input.length > 5) {
      return "작성 완료"
    } else {
      return "작성 중"
    }
  }

  return (
    <>
      {data && data.map((item, inx) => {
        return (
          <Cover>
            <BoxWrap>
              <InnerBox key={inx}>
                <HeaderWarp onClick={() => { moveDetailFunc(item.id); props.setToggle(0); }}>
                  <NameIng color={validation(item.intro)}>{item.title}</NameIng>
                  <DateSpan>{(item.updateDate).substring(0, 10)}</DateSpan>
                </HeaderWarp>
                <TextIng color={validation(item.intro)}>
                  <NonClickBox onClick={() => { moveDetailFunc(item.id); props.setToggle(0); }} color={validation(item.intro)}><span>{validation(item.intro)}</span></NonClickBox>
                  <ClickBox onClick={() => props.isToggle !== item.id ? props.setToggle(item.id) : props.setToggle(0)}><MdMoreVert /></ClickBox>
                </TextIng>
              </InnerBox>
            </BoxWrap>
            <UserCvListToggle index={item.id} isToggle={props.isToggle} getFunc={getFunc} />
          </Cover>
        )
      })
      }
    </>
  )
}

export default withRouter(UserCvList);

const Cover = styled.div`
  display:flex;
  position:relative;
  width: 100%;
  height:190px;
  width: calc(25% - 25px);
  margin-left: 20px;
  margin-bottom: 20px;
`;

const BoxWrap = styled.div`
  width:100%;
  z-index:20;
  background-color:#fff;  
`;

const InnerBox = styled.div`
  cursor: pointer;
  height:100%;
  width:100%;
  z-index:5;
  display:flex;
  flex-direction:column;
  border:1px solid #e0e0e0;
`;

const HeaderWarp = styled.div`
  height: calc(100% - 40px);
  border-bottom: 1px solid #e0e0e0;
  padding: 20px;
  display:flex;
  flex-direction:column;
`;

const NameIng = styled.span`
  color:${props => props.color === "작성 완료" ? "#333333" : "#999999"};
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  margin-bottom:10px;
`;

const DateSpan = styled.span`
  color:#999999;
  font-size: 16px;
`;

const TextIng = styled.div`
  display:flex;
  width:100%;
  height:25%; 
`;

const NonClickBox = styled.div`
  height:100%;
  width:85%;
  display:flex;
  justify-content:center;
  align-items:center;
  span {
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    color:${props => props.color === "작성 완료" ? "#333333" : "#999999"};
    font-size:${props => props.color === "작성 완료" ? "17px" : "16px"};
    font-weight:600;
    text-align:center;
  }
`;

const ClickBox = styled.div`
  width:15%;
  height:100%;
  z-index:200;
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  svg {
    width:60%;
    height:60%;
    opacity:0.5;
  }
`;
