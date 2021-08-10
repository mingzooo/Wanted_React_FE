import React from 'react';
import styled from 'styled-components';

function TagModal() {
  return (
    <Wrapper>
      <h4>추천태그로 검색해보세요</h4>
      <ul>
        <li>
          <button>#퇴사율5%이하</button>
        </li>
        <li>
          <button>#원격근무</button>
        </li>
        <li>
          <button>#자율복장</button>
        </li>
        <li>
          <button>#통신비</button>
        </li>
        <li>
          <button>#연봉상위2~5%</button>
        </li>
      </ul>
    </Wrapper>
  );
}
export default TagModal;

const Wrapper = styled.div`
  padding-top: 50px;
  h4{
    font-size: 0.9rem;
    font-weight: 600;
  }
  ul {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    li{
      margin-right: 7px;
      button {
        height: 50px;
        padding: 0 26px;
        border-radius: 30px;
        background-color: #effbf3;
        border: none;
        cursor: pointer;
      }
    }
  }
`;
