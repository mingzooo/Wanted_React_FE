import React, { useState, useEffect } from "react";
import styled from "styled-components"
import Navbar from "../../components/common/Navbar/navbar";
import { IoMdDownload } from "react-icons/io";
import { API } from "../../config"

const CvDetailPage = (props) => {

  const [introHigh, setIntroHigh] = useState(0);
  const [careerHigh, setcareerHigh] = useState(0);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intro, setIntro] = useState("");
  const [career, setCareer] = useState("");
  // const [isValiTitle, setIsValiTitle] = useState(false);
  // const [isValiIntro, setIsValiIntro] = useState(false);
  // const [isValiCareer, setIsValiCareer] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [])

  useEffect(() => { GetFunc() }, [])

  // useEffect(() =>
  //   title.length>0?
  //   setIsValiTitle(true):
  //   setIsValiTitle(false)
  //   , [title]
  // )

  // useEffect(() =>
  //   intro.length>0?
  //   setIsValiIntro(true):
  //   setIsValiIntro(false)
  //   , [intro]
  // )

  // useEffect(() =>
  //   career.length>0?
  //   setIsValiCareer(true):
  //   setIsValiCareer(false)
  //   , [career]
  // )

  const GetFunc = () => {
    const token = localStorage.getItem("access_token");
    fetch(`${API}/resume/detail/${props.match.params.index}`, {
      headers: {
        // Authorization:token,
        "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjo0fQ.w1z54j_Vf6rmysn_8a2S0AKrwZ54vrBufrNCxaBbg_g",
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((res) => {
        setTitle(res.resume[0].title);
        setName(res.resume[0].name);
        setEmail(res.resume[0].email);
        setIntro(res.resume[0].introduction);
        setCareer(res.resume[0].work_experiences);
      })
  }

  const writeFunc = () => {
    // if (isValiTitle === false) {  
    //   alert("제목을 입력해주세요.") 
    // }
    // else if (isValiIntro === false) {  
    //   alert("소개 글을 입력해주세요.") 
    // }
    // else if (isValiCareer === false) {  
    //   alert("경력을 입력해주세요.") 
    // }
    // if (isValiTitle) {
    //   if (isValiIntro) {
    //     if (isValiCareer) {
    const token = localStorage.getItem("access_token");
    fetch(`${API}/resume/detail/${props.match.params.index}`, {
      method: "POST",
      headers: {
        // Authorization:token,
        "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjo0fQ.w1z54j_Vf6rmysn_8a2S0AKrwZ54vrBufrNCxaBbg_g",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "title": title,
        "introduction": intro,
        "comment": career,
        "education": "",
        "other": "",
        "language": ""
      })
    })
      .then(() => {
        props.history.push("/cv");
      })
    //     }
    //   }
    // }
  }

  return (
    <>
      <Navbar />
      <DPage>
        <PageWrap>
          <ContentsHeader>
            <select>
              <option selected="selected">한국어</option>
            </select>
            <Korea />
            <DownBox><IoMdDownload /></DownBox>
          </ContentsHeader>
          <ContentsName>
            <input type="text" placeholder="이력서 제목(필수)" defaultValue={title}
              onChange={
                function titleFunc(e) {
                  setTitle(e.target.value);
                  // setIsValiTitle((e.target.value).length>0 === true)
                }
              }
            />
          </ContentsName>
          <ContentsUser>
            <input type="text" placeholder="이름(필수)" value={name} />
            <input type="text" placeholder="이메일(필수)" value={email} />
          </ContentsUser>
          <BottomWrap>
            <BottomBox high={introHigh}>
              <BoxTitle>간단 소개글</BoxTitle>
              <Textarea high={introHigh} placeholder="간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)"
                maxlength="2000" defaultValue={intro} onChange={
                  function introFunc(e) {
                    setIntroHigh((e.target.value).length);
                    setIntro(e.target.value);
                    // setIsValiIntro((e.target.value).length>0 === true);
                  }
                }
              />
            </BottomBox>
            <BottomBox high={careerHigh}>
              <BoxTitle>경력</BoxTitle>
              <Textarea high={careerHigh} placeholder="경력 사항을 입력해 주세요."
                maxlength="2000" defaultValue={career} onChange={
                  function careerFunc(e) {
                    setcareerHigh((e.target.value).length);
                    setCareer(e.target.value);
                    // setIsValiCareer((e.target.value).length>0 === true);
                  }
                }
              />
            </BottomBox>
          </BottomWrap>
        </PageWrap>
        <DPageFooter>
          <FooterWrap>
            <ButtonWrap>
              <Button onClick={writeFunc} white><span>임시 저장</span></Button>
              <Button onClick={writeFunc}><span>작성 완료</span></Button>
            </ButtonWrap>
          </FooterWrap>
        </DPageFooter>
      </DPage>
    </>
  )
}

export default CvDetailPage;

const DPage = styled.div`
  padding:50px 0 72px 0;
  width:100%;
  display:flex;
  justify-content:center;
`;

const PageWrap = styled.div`
  width:1060px;
`;

const ContentsHeader = styled.div`
  margin-top:30px;
  height:40px;
  width:100%;
  display:flex;
  justify-content:space-between;
  position: relative;
  select {
    width: 110px;
    height:38px;
    border-radius: 2px;
    border: solid 1px #bababa;
    background-color: #ffffff;    
    padding-left: 37px;
  } 
`;

const Korea = styled.i`
  position:absolute;
  left:12px;
  top:12px;
  background-image:url("https://s3.ap-northeast-2.amazonaws.com/wanted-public/ico_KR.svg");
  width:20px;
  height:14px;
`;

const DownBox = styled.div`
  cursor:pointer;
  width:40px;
  height:40px;
  display:flex;
  justify-content:center;
  align-items:center;
  border:1px solid #999;
  border-radius:3px;
  svg {
    width:20px;
    height:20px;
    opacity:0.6;
    margin-left:2px;
  }
`;

const ContentsName = styled.div`
  width:100%;
  height:40px;
  margin: 70px 0 50px;
  input {
    width:100%;    
    color: #3b3d40;
    font-size: 36px;
    font-weight: 500;
    outline:none;
    border:none; 
  }
  input::placeholder {
    color: rgba(118,118,118,0.5)
  }
`;

const ContentsUser = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin:20px 0 60px 0;
  input {
    margin-top:10px;
    width:100%;    
    color: #3b3d40;
    font-size: 16px;
    outline:none;
    border:none;
    &::placeholder {
      color: rgba(118,118,118,0.5)
    }
  } 
`;

const BottomWrap = styled.div`
  width:100%;
`;

const BottomBox = styled.div`
  width:100%;
  margin-bottom:60px;
`;

const BoxTitle = styled.div`
  padding: 20px 0 6px;
  font-size: 16px;
  font-weight: 500; 
  color: #3b3d40;
  border-bottom: 1px solid #bababa;
`;

const Textarea = styled.textarea`
  height:${props => props.high / 3 + 73}px;  
  max-height:960px;
  overflow-y:visible;
  font-size: 16px;
  font-weight: 500;
  margin-top: 30px;
  width:100%;    
  color: #3b3d40;
  outline:none;
  border:none;
  resize:none;
  &::placeholder {
    color: rgba(118,118,118,0.5)
  }
`;

const DPageFooter = styled.div`
  width:100%;
  height:73px;
  position:fixed;
  bottom:0px;
  background-color: white;
  border-top: 1px solid #e0e0e0;
  display:flex;
  justify-content:center;
`;

const FooterWrap = styled.div`
  width:1060px;
  display:flex;
  justify-content:flex-end;
`;

const ButtonWrap = styled.div`
  height:100%;
  background-color:white;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const Button = styled.div`
  cursor:pointer;
  width:174px;
  height:51.71px;
  background-color:${props => props.white ? "#ffffff" : "#258bf7"};
  border:1px solid #258bf7;
  border-radius: 3px;
  margin:0 5px;
  display:flex;
  align-items:center;
  justify-content:center;
  span {
    font-size:!5px;
    color:${props => props.white ? "#258bf7" : "#ffffff"};
  }
`;