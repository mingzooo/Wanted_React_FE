import AcceptedPositionBox from './AcceptedPositionBox';
import CareerBox from './CareerBox';
import NewHireBox from './NewHireBox';
import ThemeBox from './ThemeBox';
import ThisWeekBox from './ThisWeekBox';

import styled from 'styled-components';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import CAREER_DATA from '../../data/CareerData';

const Positions = () => {
    const acceptList = CAREER_DATA.accept;
    const newList = CAREER_DATA.new;
    const thisweekList = CAREER_DATA.thisweek;
    const careerList = CAREER_DATA.career;
    const themeList = CAREER_DATA.theme;

    return (
        <PositionContainer>
            <MainContainer>
                <Title>
                    wanted 합격예측 포지션
                    <AiOutlineQuestionCircle size="25" color="gray" className="icon" />
                </Title>
                <PositionBox>
                    {acceptList.map(acceptList => {
                        return (
                            <AcceptedPositionBox
                                key={acceptList.id}
                                id={acceptList.id}
                                imageUrl={acceptList.imageUrl}
                                job={acceptList.job}
                                name={acceptList.name}
                                city={acceptList.city}
                                state={acceptList.state}
                                price={acceptList.price}
                            />
                        );
                    })}
                </PositionBox>
            </MainContainer>
            <MainContainer>
                <Title>커리어 성장의 기회</Title>
                <PositionBox>
                    {careerList.map(careerList => {
                        return (
                            <CareerBox
                                key={careerList.id}
                                id={careerList.id}
                                imageUrl={careerList.imageUrl}
                                title={careerList.title}
                            />
                        );
                    })}
                </PositionBox>
            </MainContainer>
            <MainContainer>
                <Title>신규 채용 회사</Title>
                <PositionBox>
                    {newList.map(newList => {
                        return (
                            <NewHireBox
                                key={newList.id}
                                id={newList.id}
                                imageUrl={newList.imageUrl}
                                job={newList.job}
                                name={newList.name}
                            />
                        );
                    })}
                </PositionBox>
            </MainContainer>
            <MainContainer>
                <Title>테마별 채용</Title>
                <PositionBox>
                    {themeList.map(themeList => {
                        return (
                            <ThemeBox
                                key={themeList.id}
                                id={themeList.id}
                                imageUrl={themeList.imageUrl}
                                context={themeList.context}
                                title={themeList.title}
                                sub={themeList.sub}
                            />
                        );
                    })}
                </PositionBox>
            </MainContainer>
            <MainContainer>
                <Title>금주의 추천</Title>
                <PositionBox>
                    {thisweekList.map(thisweekList => {
                        return (
                            <ThisWeekBox
                                key={thisweekList.id}
                                id={thisweekList.id}
                                imageUrl={thisweekList.imageUrl}
                                job={thisweekList.job}
                                name={thisweekList.name}
                                city={thisweekList.city}
                                state={thisweekList.state}
                                price={thisweekList.price}
                            />
                        );
                    })}
                </PositionBox>
            </MainContainer>
        </PositionContainer>
    );
}


const PositionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Title = styled.h2`
  display: inline-block;
  padding: 0;
  margin-bottom: 20px;
  line-height: 1.05;
  color: #333;
  font-size: 22px;
  font-weight: 600;
  text-align: left;
  letter-spacing: normal;

  .icon {
    position: absolute;
    margin-left: 8px;
  }
`;

const PositionBox = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
`;

export default Positions;