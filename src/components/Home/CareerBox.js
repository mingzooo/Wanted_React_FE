import React from 'react';
import styled from 'styled-components';

const CareerBox = ({ imageUrl, title }) => {
  return (
    <PositionContainer>
      <CompanyImage src={imageUrl} />
      <CompanyBox>
        <Title>{title}</Title>
      </CompanyBox>
    </PositionContainer>
  );
}


const PositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 490px;
  height: 369px;
  cursor: pointer;
`;

const CompanyImage = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  border-radius: 4px;
`;

const CompanyBox = styled.div`
  width: 100%;
  height: 50px;
  padding: 14px 10px;
`;

const Title = styled.p`
  line-height: 1.2;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
`;

export default CareerBox;