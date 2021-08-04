import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FaCaretDown, FaCcPaypal } from 'react-icons/fa';

const EditPage = () => {
  const { handleProfileEdit, userInfo } = useContext();
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);

  const handleInput = e => {
    const { name, value } = e.target;

    name === 'name' && setName(value);
    name === 'email' && setEmail(value);
    name === 'phoneNumber' && setPhoneNumber(value);
  };

  const handleSubmit = () => {
    handleProfileEdit(name, email, phoneNumber);
  };

  return (
    <EditerContainer>
      <Editer>
        <Title>기본정보 수정</Title>
        <span>
          지원 결과 또는 추천 포지션 정보를 받아볼 이메일/연락처 정보
          입력해주세요.
        </span>
        <UserInfo>
          <li>
            <label>
              <h6>이름</h6>
              <input
                type="text"
                name="name"
                onChange={handleInput}
                value={name}
              />
            </label>
          </li>
          <li>
            <label>
              <h6>이메일</h6>
              <input
                type="text"
                name="email"
                onChange={handleInput}
                value={email}
              />
            </label>
          </li>
          <li>
            <label>
              <h6>연락처</h6>

              <div>
                <FaCaretDown className="more" />
                <select name="countryCode" id="" onChange={handleInput}>
                  <option value="+82">+82 South Korea</option>
                  <option value="+1">+1 United States</option>
                </select>
              </div>
              <input
                type="text"
                name="phoneNumber"
                onChange={handleInput}
                value={phoneNumber}
              />
            </label>
          </li>
        </UserInfo>
        <SubmitButton onClick={handleSubmit}>확인</SubmitButton>
      </Editer>
    </EditerContainer>
  );
};

const EditerContainer = styled.div`
  width: 753px;

  .btn {
    width: 100px;
    height: 100px;
  }
`;

const Editer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px 0 34px;
  border-radius: 5px;

  span {
    margin-top: 18px;
    padding: 0 32px;
    color: #9a9a9a;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
  }
`;

const Title = styled.h2`
  padding: 0 32px 10px;
  font-size: 18px;
  font-weight: 700;
`;

const UserInfo = styled.ul`
  padding: 40px 32px;

  li {
    padding: 15px 0;

    label {
      display: flex;
      align-items: center;

      h6 {
        display: inline-block;
        width: 130px;
        color: #999999;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.1;
      }

      input {
        width: 540px;
        padding: 12px 0;
        border: 0;
        border-bottom: 1px solid #e1e2e3;
        color: #333333;
        font-size: 16px;
        font-weight: 400;
        outline: none;
      }

      div {
        position: relative;
        margin-right: 10px;

        .more {
          position: absolute;
          width: 30px;
          top: 50%;
          right: 2px;
          background-color: #f8f8fa;
          transform: translateY(-50%);
        }
        select {
          padding: 14px 30px;
          font-size: 16px;
          font-weight: 400;
          border: 0;
          border-radius: 3px;
          background-color: #f8f8fa;
          outline: none;
          cursor: pointer;
        }
      }
    }

    &:nth-child(3) {
      input {
        width: 329px;
      }
    }
  }
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  width: 190px;
  height: 50px;
  margin-right: 32px;
  border: none;
  border-radius: 3px;
  color: #fff;
  background-color: #258bf7;
  font-size: 18px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
`;

export default EditPage;
