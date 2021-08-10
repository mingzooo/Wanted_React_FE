import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../../components/common/Navbar/navbar";
import Footer from "../../components/common/Footer/Footer";
import newfile from "../../images/newfileWhite.png"
import upload from "../../images/upload.png"
import UserCvList from "../../components/UserCvList/UserCvList";

const CvPage = ({ loginCheck, history }) => {

  const [isLogin, setLogin] = useState(false);
  const [isToggle, setToggle] = useState(0);
  const [selectedFile, setSelectedFile] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const hiddenFileInput = useRef(null);
  const token = localStorage.getItem('X-ACCESS-TOKEN');

  useEffect(() => {
    loginCheck ? setLogin(true) : setLogin(false)
  }, [loginCheck])

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [])

  const handleFileChange = e => {
    const file = e.target.files[0];
    setSelectedFile(selectedFile.concat(file));
    const formData = new FormData();
    formData.append('File', file);

    fetch(`/cvs`, {
      method: 'POST',
      headers: {
        "X-ACCESS-TOKEN": token,
      },
      body: formData,
    })
      .then(res => res.json())
      .then(result => {
        setIsSelected(!isSelected);
      })
      .catch(error => console.log(error));
  };

  //파일 업로드
  const handleClickUpload = e => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <Navbar />
      <Cv>
        <NonUser isLogin={isLogin}>
          <IntroBox high="676px" >
            <IntroText high="20%" color="black" size="56px">
              <h2>이력서 양식, 그 이상</h2>
              <h3>채용 전문가들의 조언을 얻어, 이력서를 잘 쓸 수 있는 도구를 만들었습니다.</h3>
              <h4>서류 통과가 잘 되는 원티드 이력서를 쉽고 빠르게 작성해 보세요.</h4>
              <ButtonBox>
                <WantedButton border white>이력서 관리</WantedButton>
                <WantedButton border>새 이력서 작성</WantedButton>
              </ButtonBox>
            </IntroText>
            <IntroBackground high="280px" url="https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_01_en.png" />
          </IntroBox>
          <IntroBox high="540px">
            <IntroText high="15%" color="white" size="40px">
              <h2>지원에 유리한</h2>
              <h3>글로벌 기업에 보편적이고, 성별이나 가족관계 등 차별 금지 정책에 맞춰서 제작하였습니다.</h3>
              <h4>군더더기 없이, 당신의 진짜 경쟁력을 드러 내 보세요.</h4>
            </IntroText>
            <IntroBackground high="100%" url="https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_02.jpg" />
          </IntroBox>
          <IntroBox high="540px">
            <IntroText high="15%" color="black" size="40px">
              <h2>본질에 집중한</h2>
              <h3>보다 명확한 정보 설계로 당신의 커리어를 돋보이게 만들어 드립니다.</h3>
              <h4>불필요한 정보 입력을 최소화하고 이력서 작성에 방해가 되는 UI 요소들을 제거하였습니다.</h4>
            </IntroText>
            <IntroBackground high="290px" url="https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_03_ko.png" />
          </IntroBox>
          <IntroBox high="630px">
            <IntroText high="13%" color="white" size="40px">
              <h2>활용이 자유로운</h2>
              <h3>PC/모바일 어디에서나 작성할 수 있고, PDF 파일로 저장과 활용이 쉽습니다.</h3>
              <h4>가독성에 중점을 두고 설계하여, 파일 저장/출력시에도 돋보이는 결과물을 얻을 수 있습니다.</h4>
              <ButtonBox>
                <WantedButton white>샘플 다운로드</WantedButton>
                <WantedButton border>새 이력서 작성</WantedButton>
              </ButtonBox>
            </IntroText>
            <IntroBackground high="100%" url="https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_04.jpg" />
          </IntroBox>
        </NonUser>
        <UserContents isLogin={isLogin}>
          <UserContentsWrap>
            <Title>
              <h4>최근 문서</h4>
              <span>원티드 이력서 소개<i>ⓘ</i></span>
            </Title>
            <Contents>
              <ContentsWarp>
                <InnerBox onClick={() => history.push("/cv/0")}>
                  <BoxWrap>
                    <IBox blue >
                      <Icon url={newfile} top="15%" left="18%" size="50px" />
                    </IBox>
                    <span>새 이력서 작성</span>
                  </BoxWrap>
                </InnerBox>
                <InnerBox onClick={handleClickUpload}>
                  <BoxWrap >
                    <IBox>
                      <Icon url={upload} top="33%" left="33%" size="25px" />
                    </IBox>
                    <span>파일 업로드</span>
                    <form
                      action="/resumes/files"
                      method="post"
                      encType="multipart/form-data"
                    >
                      <input
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        ref={hiddenFileInput}
                        type="file"
                      ></input>
                    </form>
                  </BoxWrap>
                </InnerBox>
                <UserCvList isToggle={isToggle} setToggle={setToggle} />
              </ContentsWarp>
            </Contents>
          </UserContentsWrap>
          <Background onClick={() => setToggle(0)} />
        </UserContents>
      </Cv>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loginCheck: state.loginCheck
  }
}

export default withRouter(connect(mapStateToProps)(CvPage));

const Cv = styled.div``;

const NonUser = styled.div`
  display:${props => props.isLogin ? "none" : ""};
`;

const IntroBox = styled.div`
  position:relative;
  height:${props => props.high};
`;

const IntroText = styled.div`
  position:absolute;  
  top:${props => props.high};
  z-index:3;
  width:100%;
  color:${props => props.color};
  text-align:center;
  h2 {
    font-size:${props => props.size};
    font-weight: 600;
  }
  h3, h4 {
    font-size: 18px;
    font-weight: 400;
  }
  h3 {
    margin: 30px 0 10px 0;
  }
`;

const ButtonBox = styled.div`
  width:100%;
  margin-top:30px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const WantedButton = styled.button`
  cursor: pointer;
  outline:0;
  height:58px;
  font-size: 18px;
  font-weight: 600;
  margin:0 5px;
  padding:15px 50px;
  border-radius: 30px;
  background-color:${props => props.white ? "#fff" : "#3a68f9"};
  color:${props => props.white ? "#3a68f9" : "#fff"};
  border:${props => props.border ? "#3a68f9" : "#fff"} 1px solid;
`;

const IntroBackground = styled.div`
  position:absolute;
  bottom:0px;
  width:100%;
  height:${props => props.high};
  background-image:url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const UserContents = styled.div` 
  display:${props => props.isLogin ? "flex" : "none"};
  justify-content:center;
  background-color: #f8f8fa;
  padding:50px 0 100px 0;
  width:100%;  
`;

const UserContentsWrap = styled.div`
  width: 1060px;
`;

const Title = styled.div`
  display:flex;
  justify-content:space-between;
  margin: 25px 0 10px 0;
  align-items:center;
  font-size: 16px;
  font-weight: 600;
  h4 {  
    padding: 15px 0;
    color: #333;
  }
  span {
    color: #258BF7;
    i {
      margin-left: 5px;
      font-size: 17px;
    }  
  } 
`;

const Contents = styled.div`
  margin-left:-20px;
  width:calc(100% + 40px);
  display:flex;
  justify-content:center;
`;

const ContentsWarp = styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
`;

const InnerBox = styled.div`
  cursor: pointer;
  height:190px;
  width: calc(25% - 25px);
  margin-left: 20px;
  margin-bottom: 20px; 
  background-color:#fff;
  display:flex;
  flex-direction:column;
  border:1px solid #e0e0e0;
  z-index:10;
`;

const BoxWrap = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  span {
    font-size: 16px;
    font-weight: 600;
    color: #333333;
    margin: 20px 0 0;
  }
`;

const IBox = styled.div`
  position: relative;
  width: 74px;
  height: 74px;
  margin: 0 auto;
  border-radius: 50%;
  background:${props => props.blue ? "#258bf7" : "#e1e2e3"};
`;

const Icon = styled.div`
  background-image:url(${props => props.url});
  background-position:50%;
  background-size: cover;
  position: absolute;
  top:${props => props.top};
  left:${props => props.left};
  width:${props => props.size};
  height:${props => props.size};
`;

const Background = styled.div`
  width:100%;
  height:100vh;
  position:fixed;
  top:0;
`;