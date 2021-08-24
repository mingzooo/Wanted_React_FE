import React from 'react';
import styled from 'styled-components';
import { infoData } from '../../data/infoData';

const IntroComponents = () => {
    return (
        <div>
            {infoData.map(info => {
                return (
                    <InfoComponent>
                        <Info>
                            <NewintroPic key={info.id} src={info.image} />
                            <Contents>
                                <Title>
                                    {info.title1}
                                    <br />
                                    {info.title2}
                                </Title>
                                <SubTitle>
                                    {info.subtitle1}
                                    <br />
                                    {info.subtitle2}
                                </SubTitle>
                            </Contents>
                        </Info>
                    </InfoComponent>
                );
            })}
        </div>
    );
}

const InfoComponent = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:420px;
    background:white;
    align-items:center;
`;

const Info = styled.div`
    display:flex;
    flex-direction:row;
    width:60%;
    height:100%;
    background:white;
    align-items:center;
    justify-content: space-between;
    margin: 0 auto;
`;

const NewintroPic = styled.img`
  display: flex;
  align-self:center;
  width: 55%;
  height: 90%
`;

const Contents = styled.div`
    display:flex;
    flex-direction:column;
`;

const Title = styled.h1`
display:flex;
  margin-bottom: 30px;
  line-height: 48px;
  font-size: 36px;
  font-weight: bold;
`;

const SubTitle = styled.h3`
display:flex;
  line-height: 28px;
  font-size: 16px;
`;

export default IntroComponents;