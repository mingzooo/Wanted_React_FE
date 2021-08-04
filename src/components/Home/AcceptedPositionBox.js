import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const AcceptedPositionBox = ({ imageUrl, job, name, state, city }) => {
  const history = useHistory();

  const goToDetail = () => {
    history.push(`/detail/`); //id 넣기
    window.scrollTo(0, 0);
  };

  return (
    <PositionContainer onClick={() => goToDetail()}>
      <CompanyImage src={imageUrl} />
      <CompanyBox>
        <Job>{job}</Job>
        <Name>{name}</Name>
        <Address>
          {city}·{state}
        </Address>
        <Reward>채용보상금 1,000,000 원</Reward>
      </CompanyBox>
    </PositionContainer>
  );
}


const PositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 355px;
  cursor: pointer;
`;

const CompanyImage = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 4px;
  object-fit: cover;
`;

const CompanyBox = styled.div`
  width: 250px;
  height: 148px;
  padding: 14px 10px;
`;

const Job = styled.p`
  line-height: 1.2;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
`;

const Name = styled.p`
  margin: 4px 0px 0px;
  line-height: 1.6;
  font-size: 14px;
  text-align: left;
`;

const Address = styled.p`
  margin-top: 6px;
  color: #999;
  font-size: 14px;
`;

const Reward = styled.p`
  margin: 10px 0px 0px;
  color: #666666;
  font-size: 13px;
  text-align: left;
`;

export default AcceptedPositionBox;