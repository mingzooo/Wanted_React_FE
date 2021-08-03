import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '../../components/MyPage/Profile';
import User from '../../components/MyPage/User';
import EditPage from '../../components/MyPage/EditPage';
import Navbar from '../../components/common/Navbar/navbar';

const Mypage = () => {
  const [onEditMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode(prevStatus => !prevStatus);
  };

  return (
    <>
      <Navbar />
      <MypageContainer>
        <PageTitle>MY 원티드</PageTitle>
        <section>
          <Profile handleEditMode={handleEditMode} onEditMode={onEditMode} />
          {!onEditMode ? <User /> : <EditPage />}
        </section>
      </MypageContainer>
    </>
  );
};

const PageTitle = styled.h1`
  width:70%;
  margin: 1.2rem 0;
  font-size:1rem;
  font-weight: 800;
`;

const MypageContainer = styled.div`
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

export default Mypage;
