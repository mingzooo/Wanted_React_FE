import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import Navbar from "../../components/common/Navbar/navbar";
// import { API } from "../../config";
import Quest from "./Quest";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [topImg, setTopImg] = useState([]);

  const mainWidth = window.innerWidth;
  const percentage = 66;

  useEffect(() => {
    fetch("/data/mainMock.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res.position);
        // console.log(res.position);
      });
    fetch("/data/mainTopImg.json")
      .then((res) => res.json())
      .then((res) => {
        setTopImg(res.main_top_img);
      });
  }, []);

  const list = data.map((myData, idx) => {
    return (
      <PositionList
        key={myData.idx}
        title={myData.title}
        no={myData.job_id}
        company={myData.company}
        region={myData.region}
        country={myData.country}
        compensation={myData.reward_total}
        thumbnail={myData.thumbnail}
        like={myData.like}
      />
    );
  });

  return (
    <>
      <Navbar />
      < Main >
        <BlueBox>
          <div>
            <Percent>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={6}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textColor: "white",
                  pathColor: "white",
                  trailColor: "#0260d1",
                  textSize: "25px"
                })}
              />
            </Percent>
            <BlueBoxText>프로필에 이력서 추가하고, 인사담당자에게 직접 면접 제안 받으세요.</BlueBoxText>
          </div>
          <BlueBoxButton>이력서 강화하기</BlueBoxButton>
        </BlueBox>
        <Quest />
      </Main >
    </>
  );
}

const Main = styled.div`
  max-width: 1060px;
  padding: 0em 2em;
  margin: 0 auto;
`;

const PostionBox = styled.div`
  margin-top: 3em;
  margin-bottom: -1em;
`;

const BlueBox = styled.div`
  width: 100%;
  background-color: white;
  display:flex;
  justify-content: space-between;
  padding: 1em 2em;
  border-radius: .2em;
  align-items: center;
  div{
    display: flex;
    align-items: center;
  }
`;

const Percent = styled.div`
  width: 62px;
  height: 62px;
`;

const BlueBoxText = styled.p`
  color: white;
  font-size: 1.125rem;
  margin-left: 1em;
`;

const BlueBoxButton = styled.div`
  background-color: white;
  padding: 1em 3em;
  text-align: center;
  color: white;
  border-radius: .2em;
  font-weight: 600;
  &:hover {
          cursor: pointer;
          background-color: #f7f7f7;
    }
`;

const FlexBox = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  .setting{
    color: gray;
    margin-left: .7em;
    margin-top: -.3em;
  }
`;

const PostionTitle = styled.div`
  font-size: 1.5rem;
  margin: 1em 0em 1em 0em;
  font-weight: 600;
  color: gray;
`;

const MoreView = styled.span`
  font-size: 1.25rem;
  color:gray;
`;

const FlexUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export default MainPage;