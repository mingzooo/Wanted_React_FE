import React from "react";
import styled from "styled-components";

const Aggressive = (props) => {
  return (
    <AggressiveContentBox>
      <AggressiveImg><img src={props.img} alt="" className="imgHover" /></AggressiveImg>
      <div className="paddingBox">
        <AggressiveCI>
          <img src={props.ci} alt="" />
        </AggressiveCI>
        <AggressiveCIName className="titleHover">{props.title}</AggressiveCIName>
        <p>{props.position}개 포지션</p>
      </div>
    </AggressiveContentBox>
  );
}

const AggressiveContentBox = styled.li`
  position: relative;
  width: 200px;
  height: 270px;
  border: 1px solid #dddddd;
  border-radius: .2em;
  margin-right: 1em;
  :hover{
   .titleHover{
       color: black;
   }
   .imgHover{
       animation: imgAni 2s forwards;
   }
  }
  :last-child {
      margin-right: 0em;
  }
  .paddingBox{
    padding: 0 1em;
    }
    p{
        font-size: .875rem;
        color: gray;
    }
`;

const AggressiveImg = styled.div`
  width: 100%;
  overflow: hidden;
  img{
      width: 100%;
  }
`;

const AggressiveCI = styled.div`
  position: absolute;
  top: 7em;
  width: 50px;
  height: 50px;
  border: 1px solid #dddddd;
  img{
      width: 100%;
  }
`;

const AggressiveCIName = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin: 2.5em 0em .5em 0em;
`;


export default Aggressive;