import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const NewHireBox = ({ imageUrl, job, name }) => {

  const history = useHistory();

  const goToDetail = () => {
    history.push(`/detail/`); //나중에 id API에 넣자
    window.scrollTo(0, 0);
  };

  return (
    <PositionContainer onClick={() => goToDetail()}>
      <CompanyImage src={imageUrl} />
      <CompanyBox>
        <Name>{name}</Name>
        <Job>{job}</Job>
      </CompanyBox>
    </PositionContainer>
  );
}


const PositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 300px;
  cursor: pointer;
`;

const CompanyImage = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 4px;
`;

const CompanyBox = styled.div`
  width: 250px;
  height: 50px;
  padding: 14px 10px;
`;

const Name = styled.p`
  line-height: 1.2;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
`;

const Job = styled.p`
  margin-top: 6px;
  color: #999;
  font-size: 14px;
`;

export default NewHireBox;