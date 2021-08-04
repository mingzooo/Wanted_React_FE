import React from 'react';
import styled from 'styled-components';

const ThemeBox = ({ imageUrl, title, sub }) => {
  return (
    <PositionContainer>
      <CompanyImg imageUrl={imageUrl} />
      <CompanyBox>
        <Title>{title}</Title>
        <Sub>{sub}</Sub>
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

const CompanyImg = styled.div`
  width: 100%;
  height: 270px;
  background: url(${props => props.imageUrl});
  background-size: cover;
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

const Sub = styled.p`
  margin-top: 8px;
  color: #999;
  font-size: 15px;
`;

const MainContext = styled.p`
  margin-top: 110px;
  color: white;
  text-shadow: 2px 2px 10px gray;
  text-align: center;
  font-weight: 900;
  font-size: 30px;
`;

export default ThemeBox;