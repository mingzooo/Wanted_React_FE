import styled from "styled-components"
import Navbar from "../components/common/Navbar/navbar";
import Footer from "../components/common/Footer/Footer";
import { useHistory } from "react-router-dom";
import { PageWrap } from "../components/common/styled";
import IntroComponents from "../components/Intro/intro";

const IndexPage = () => {
  const history = useHistory();


  return (
    <PageWrap>
      <Navbar />
      <NewintroContainer>
        <NewintroPic src="https://static.wanted.co.kr/images/newintro/pc.webp">
          <Contents>
            <Title>
              직장인의 커리어 여정을
              <br />
              행복하게, 원티드
            </Title>
            <SubTitle>지금 원티드와 커리어 여정을 시작하세요.</SubTitle>
            <Button onClick={() => history.push("/login")}>지금 시작하기</Button>
          </Contents>
        </NewintroPic>
        <IntroComponents />
        <LastnewintroPic src="https://static.wanted.co.kr/images/newintro/foot_pc.webp">
          <LastContent>
            <LastTitle>
              커리어 성장과 행복을 위한 여정,
              <br />
              지금 원티드에서 시작하세요.
            </LastTitle>
            <LastsubTitle>
              200만 직장인과 10,000개 기업이
              <br />
              원티드와 커리어 여정을 함께합니다.
            </LastsubTitle>
            <Button onClick={() => history.push("/login")}>지금 시작하기</Button>
          </LastContent>
        </LastnewintroPic>
      </NewintroContainer>
      <Footer />
    </PageWrap>
  );
}


const NewintroContainer = styled.div`
  width:100%;
  margin: 0px;
  padding: 0px;
  border: 0px;
  background-color: #e5e5e5;
`;

const NewintroPic = styled.div`
  background-image: url(${props => props.src});
  background-position: center top;
  background-size: cover;
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
`;

const LastnewintroPic = styled.div`
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 520px;
  display: flex;
  justify-content: center;
`;

const Contents = styled.div`
  width: 65%;
  height: 306px;
  margin-top: 11rem;
`;

const LastContent = styled.div`
  width: 1000px;
  height: 306px;
  padding: 180px 0 0 20px;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  line-height: 62px;
  font-size: 48px;
  font-weight: bold;
`;

const SubTitle = styled.h3`
  margin-bottom: 40px;
  font-size: 18px;
`;

const Button = styled.button`
  background: #3a68f9;
  height: 64px;
  width: 230px;
  border-radius: 32px;
  border: none;
  color: white;
  line-height: 17px;
  font-size: 20px;
  cursor: pointer;
`;

const LastTitle = styled.h1`
  margin-bottom: 30px;
  line-height: 48px;
  font-size: 36px;
  font-weight: bold;
`;

const LastsubTitle = styled.h3`
  margin-bottom: 30px;
  line-height: 28px;
  font-size: 18px;
`;

export default IndexPage;