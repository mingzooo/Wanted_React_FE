import React, { useState } from 'react';
import Profile from '../../components/MyPage/Profile';
import EditPage from '../../components/MyPage/EditPage';
import styled from 'styled-components';
import SetProfile from '../../components/MyPage/SetProfile';
import Navbar from '../../components/common/Navbar/navbar';

const MyProfile = () => {
  const [onEditMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode(prevStatus => !prevStatus);
  };

  return (
    <>
      <Navbar />
      <MyProfileContainer>
        <PageTitle>MY 원티드</PageTitle>
        <section>
          <Profile handleEditMode={handleEditMode} onEditMode={onEditMode} />
          {!onEditMode ? <SetProfile /> : <EditPage />}
        </section>
      </MyProfileContainer>
    </>
  );
};

const PageTitle = styled.h1`
  width:70%;
  margin: 1.2rem 0;
  font-size:1rem;
  font-weight: 800;
`;

const MyProfileContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
padding-top: 50px;
padding-bottom: 100px;
background-color: #f7f7f9;
color: #333333;

  section {
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    width:70%;
  }
`;

export default MyProfile;
