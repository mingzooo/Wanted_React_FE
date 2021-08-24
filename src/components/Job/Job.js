import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { USER_LIKE_API } from "../../config";
import { setJobLoading } from "../../store/actions/index";

const Job = ({ job, history }) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    name,
    city,
    likes_count,
    image_url,
    compensation,
    likes_status,
    response_rate
  } = job;

  const token = localStorage.getItem("X-ACCESS-TOKEN");

  const onLike = ({ recruitId }) => {
    fetch(`/likes/${recruitId}`, {
      method: "POST",
      headers: {
        "X-ACCESS-TOKEN": token
      },
      body: JSON.stringify({
        company_id: id
      })
    })
      .then(response => response.json())
      .then(result => {
        dispatch(setJobLoading(true));
      });
  };

  const goToDetail = id => {
    history.push(`/detail/${id}`);
  };

  return (
    <JobBox BGI={image_url} response_rate={response_rate}>
      <header alt={name}>
        <LikeBox onClick={onLike} isliked={likes_status}>
          ♥ <span> {likes_count}</span>
        </LikeBox>
      </header>
      <span onClick={() => goToDetail(id)}>{title}</span>
      <span>{name}</span>
      {response_rate > 50 && <ResponseRate>응답률 매우 높음</ResponseRate>}
      <span>한국 · {city}</span>
      <span>채용보상금 {Number(compensation).toLocaleString()} 원</span>
    </JobBox>
  );
};

const JobBox = styled.li`
  width: 24%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  header {
    position: relative;
    border-radius: 5px;
    width: 100%;
    height: 200px;
    background-image: url(${props => props.BGI});
    background-size: cover;
    margin-bottom: 10px;
  }
  span {
    margin-bottom: 10px;
    &:nth-child(2) {
      font-weight: 700;
      font-size: 18px;
      cursor: pointer;
    }
    &:nth-child(3) {
      font-weight: 700;
      font-size: 15px;
    }
    &:nth-child(4) {
      color: gray;
      font-size: 13px;
    }
    &:nth-child(5) {
      font-size: 13px;
    }
    &:nth-child(6) {
      font-size: 13px;
    }
  }
`;

const LikeBox = styled.div`
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  color: ${props => (props.isliked ? "red" : "rgba(255, 255, 255, 0.5)")};
  padding: 7px 10px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 13px;
  cursor: pointer;
  span {
    color: white;
    font-weight: bold;
  }
`;

const ResponseRate = styled.div`
  color: #00aead;
  border: 1px solid #00aead;
  padding: 3px;
  font-size: 10px;
  margin-bottom: 10px;
`;

export default withRouter(Job);
