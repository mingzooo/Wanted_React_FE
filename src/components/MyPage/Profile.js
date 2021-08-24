import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import USERDATA from '../../data/UserData';

const Profile = ({ handleEditMode, onEditMode }) => {

  const [userInfo, setUserinfo] = useState({});
  const token = localStorage.getItem("X-ACCESS-TOKEN");

  useEffect(() => {
    fetch(`/profiles`, {
      method: 'GET',
      headers: {
        "X-ACCESS-TOKEN": token,
      },
      redirect: 'follow'
    })
      .then((response) => response.json())
      .then(
        function innerFunc(res) {
          setUserinfo(res.result);
        }
      )
  });

  return (
    <ProfileBox>
      <div />
      <Image
        src={userInfo.profileImage === null ? 'https://img.icons8.com/pastel-glyph/2x/person-male--v2.png' : userInfo.profileImage} />
      {userInfo && (
        <dl>
          <dt>{userInfo.name}</dt>
          <dd>{userInfo.email}</dd>
          <dd>
            {userInfo.phone === null ? '미등록' : userInfo.phone}
          </dd>
        </dl>
      )}
      <EditButton
        onClick={handleEditMode}
        color={onEditMode ? '#3366ff' : '#333333'}
      >
        기본정보 수정
      </EditButton>
    </ProfileBox>
  );
};

const ProfileBox = styled.aside`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 248px;
  height: 329px;
  margin-right: 20px;
  padding: 42px 20px 30px 20px;
  border-radius: 3px;

  dl {
    text-align: center;

    dt {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 700;
      line-height: 19px;
    }

    dd {
      margin-bottom: 30px;
      color: #767676;
      font-size: 14px;
      line-height: 15px;

      &:nth-child(2) {
        margin-bottom: 10px;
      }
    }
  }
`;

const Image = styled.div`
  display: block;
  width: 77px;
  height: 77px;
  margin-bottom: 30px;
  border-radius: 50%;
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
`;

const EditButton = styled.button`
  background:white;
  padding: 11px 34px;
  border-radius: 20px;
  color: ${props => props.color};
  font-weight: 600;
  outline: none;
  cursor: pointer;
`;

export default Profile;
