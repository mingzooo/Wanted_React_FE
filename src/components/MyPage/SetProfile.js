import React from 'react';
import styled from 'styled-components';
import { FaCaretDown } from 'react-icons/fa';
import { VscEdit } from 'react-icons/vsc';

const SetProfile = () => {

  return (
    <SetProfileContainer>
      <Cv>
        <VscEdit className="edit" />
        <Title>기본 이력서</Title>
        <ul>
          <li>
            <span>기본 이력서 선택</span>
            <Options>
              <p>박민주 1</p>
              <FaCaretDown className="more" />
            </Options>
          </li>
          <li>
            <span>학교</span>
            <div>
              <span>000대학교</span>
              <span>전공 미입력</span>
            </div>
          </li>
          <li>
            <span>직장</span>
            <div>
              <span>직장 미입력</span>
              <span>직책 미입력</span>
            </div>
          </li>
        </ul>
      </Cv>
      <ProfessionalField>
        <VscEdit className="edit" />
        <Title>전문분야 설정</Title>
        <ul>
          <li>
            <span>직군</span>
            <div>
              <span>개발</span>
            </div>
          </li>
          <li>
            <span>직무</span>
            <div>
              <span>프론트엔드 개발자</span>
            </div>
          </li>
          <li>
            <span>경력</span>
            <div>
              <span>신입</span>
            </div>
          </li>
          <li>
            <span>스킬</span>
            <div>
              <span>React</span>
            </div>
          </li>
        </ul>
      </ProfessionalField>
    </SetProfileContainer>
  );
};

const SetProfileContainer = styled.div`
  width: 70%;
`;

const Cv = styled.div`
  border: 1px solide #e1e2e3;
  background-color : white;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 26px 0 34px;
  border-radius: 5px;

  & > .edit {
    position: absolute;
    display: none;
    right: 45px;
    top: 182px;
    color: #2180f6;
    font-size: 20px;
    cursor: pointer;
  }

  &:hover > .edit {
    display: block;
  }

  span {
    margin-top: 18px;
    padding: 0 32px;
    color: #9a9a9a;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
  }

  ul {
    padding: 0 32px;

    li {
      & > span {
        display: inline-block;
        padding: 0 0 10px;
      }
      & > div {
        span {
          padding: 0;
          color: #333333;

          &:last-child::before {
            display: inline-block;
            width: 2px;
            height: 16px;
            margin: 0 8px 0 5px;
            color: #cccccc;
            content: '|';
          }
        }
      }
    }
  }
`;

const ProfessionalField = styled.div`
  border: 1px solide #e1e2e3;
  background-color : white;
  position: relative;
  padding: 26px 0 34px;
  border-radius: 5px;

  & > .edit {
    position: absolute;
    display: none;
    right: 45px;
    top: 85px;
    color: #2180f6;
    font-size: 20px;
    cursor: pointer;
  }

  &:hover > .edit {
    display: block;
  }

  ul {
    padding: 32px 32px;

    li {
      margin-bottom: 20px;

      & > span {
        display: inline-block;
        padding: 0 0 20px;
        color: #9a9a9a;
      }

      & > div {
        span {
          font-weight: 500;

          &::after {
            content: ',';
            display: inline-block;
            margin-right: 3px;
          }

          &:last-child::after {
            display: none;
          }
        }
      }
    }
  }
`;

const Title = styled.h2`
  padding: 0 32px 10px;
  font-size: 18px;
  font-weight: 700;
`;

const Options = styled.div`
  width: 100%;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border : 1px solid #8e8e8e;

  .more {
    width: 30px;
    right: 2px;
    color: #8e8e8e;
    background-color: #ffffff;
  }

  p {
    border: 1px solide #e1e2e3;
    background-color : white;
    width: 100%;
    padding: 14px 30px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
  }
`;

export default SetProfile;
