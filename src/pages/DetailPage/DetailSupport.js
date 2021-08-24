import React, { useState, useEffect } from "react";
import { withRouter, Link, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import USERDATA from "../../data/UserData";


const DetailSupport = ({ data, handleComponentChange, history }) => {
  const [chekedList, setChekedList] = useState([]);
  const [applyStatus, setApplyStatus] = useState(USERDATA.applyStatus);
  const ResumeBoxHandler = (item) => {
    if (chekedList.includes(item)) {
      setChekedList(chekedList.filter((option) => option !== item));
    } else setChekedList([...chekedList, item]);
  };
  const { id } = useParams();

  const gotoHandler = () => {
    history.push("/explore");
  };
  //유저정보 불러오기
  const [userInfo, setUserinfo] = useState({});
  const token = localStorage.getItem("X-ACCESS-TOKEN");

  useEffect(() => {
    fetch(`/profiles`, {
      method: 'GET',
      headers: {
        "X-ACCESS-TOKEN": token,
      },
      redirect: 'follow'
    })
      .then((response) => response.json())
      .then(
        function innerFunc(res) {
          setUserinfo(res.result);
        }
      )
  });

  const handleFetch = () => {
    const token = localStorage.getItem("token");
    setApplyStatus({ stepOne: applyStatus.stepOne + 1, });
    console.log(applyStatus);
    alert("지원완료되었습니다");
    // fetch("http://3.131.35.195:8000/user/applicationstatus", {
    //   method: "POST",
    //   headers: {
    //     Authorization: token
    //   },
    //   body: JSON.stringify({
    //     position_id: `${id}`,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     if (res.message === "DONE") {
    //       alert("제출이 완료되었습니다.");
    //       gotoHandler();
    //     } else {
    //       alert("정상적인 접근방법이 아닙니다");
    //     }
    //   });
  };

  const dataInfo = data.applicant_information;
  const dataAttat = data.attatchment;
  return (
    <SupportBox>
      <SupportHeader>
        <div />
        <h2>지원하기 </h2>
        <button onClick={handleComponentChange}>뒤로</button>
      </SupportHeader>
      <SupportBody>
        <SupportSubHeader>지원 정보</SupportSubHeader>
        <CommonInput>
          <h4>이름</h4>
          <DataInfo> {userInfo.name}</DataInfo>
        </CommonInput>
        <CommonInput>
          <h4>이메일</h4>
          <DataInfo>{userInfo.email}</DataInfo>
        </CommonInput>
        <CommonInput>
          <h4>연락처</h4>
          <DataInfo>{userInfo.phone}</DataInfo>
        </CommonInput>
        <CommonInput>
          <h4>추천인</h4>
          <DataInfo>선택 사항</DataInfo>
        </CommonInput>
        <SupportSubHeader>첨부 파일</SupportSubHeader>
        <SupportBtn>
          {dataAttat?.map((el, idx) => (
            <ResumeBox
              key={idx}
              onClick={() => ResumeBoxHandler("resume")}
              isChecked={chekedList.includes("resume")}
            >
              <input type="checkbox" name="xxx" value="yyy" />
              <ResumeTable>
                <p>{userInfo.name}</p>
                <ResumeSmallBox>
                  <span>{el.languae}</span>
                  <span>2020.8.31</span>
                  <span>{el.completion_status}</span>
                </ResumeSmallBox>
              </ResumeTable>
              <ArrowImg></ArrowImg>
            </ResumeBox>
          ))}
          <LabelBox>
            <label>파일 업로드</label>
            <input type="file"></input>
          </LabelBox>
          <NewResume onClick={() => history.push("/cv")}>
            새 이력서 작성
          </NewResume>
          <p>원티드 이력서로 지원하면 최종 합격률이 40% 높아집니다.</p>
        </SupportBtn>
      </SupportBody>
      <FooterBox
        onClick={() => ResumeBoxHandler("resume")}
        isChecked={chekedList.includes("resume")}
      >
        <button onClick={handleFetch}>제출하기</button>
      </FooterBox>
    </SupportBox>
  );
};

export default withRouter(DetailSupport);

const SupportBox = styled.div`
  display:flex;
  flex-direction:column;
  position: absolute;
  width: 22%;
  top: 60px;
  right: 0;
  left: 63%;
  height: 80%;
  border: 1px solid #e1e2e3;
  background: white;
  z-index: 999;
`;

const SupportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #e1e2e3;
  div {
    color: #333;
    font-size: 16px;
    font-weight: bold;
  }
  button {
    font-size: 16px;
    line-height: 16px;
    color: #999;
    font-weight: bold;
    border: none;
    outline: none;
    background: white;
    cursor: pointer;
  }
`;

const SupportBody = styled.div`
  height: 560px;
  position: sticky;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SupportBtn = styled.div`
  width: 100%;
  margin: 20px 0 0 10px;
  label {
    margin: 20px 0 0 10px;
  }
  p {
    margin: 10px;
    width: 80%;
    font-size: 0.8rem;
    color: #666;
  }
`;

const SupportSubHeader = styled.div`
  height: 22px;
  margin-top: 20px;
  border-left: 2px solid #258bf7;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`;

const CommonInput = styled.div`
  display: flex;
  border-bottom: 1px solid #999;
  margin: 0 10px 0 16px;
  font-weight: 400;
  h4 {
    width: 80px;
    height: 50px;
    line-height: 50px;
  }

  input {
    width: 255px;
    outline: none;
    border: none;
    font-weight: bold;
  }
`;

const NewResume = styled.button`
  width: 283px;
  height: 50px;
  margin: 12px 0 0 10px;
  text-align: center;
  border-radius: 25px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: normal;
  color: #666;
  outline: none;
  cursor: pointer;
`;


const LabelBox = styled.label`
  display: block;
  width: 283px;
  height: 50px;
  text-align: center;
  border-radius: 25px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 50px;
  color: #666;
  cursor: pointer;
`;

const FooterBox = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid #e1e2e3;

  button {
    width: 100%;
    height: 100%;
    align-items: center;
    color: #ccc;
    font-weight: 600;
    border: none;
    outline: none;
    border-radius: 30px;
    background: #3366ff;
    cursor: pointer;
  }
`;

const ResumeBox = styled.div`
  position: relative;
  display: flex;
  width: 310px;
  height: 60px;
  /* ${({ isChecked }) =>
    isChecked ? `border: 1px solid blue` : `border: 1px solid #ececec`}; */

  padding: 14px 0 10px 10px;
  background: #fff;
  border-radius: 4px;

  input {
    display: flex;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: none;
    outline: none;
  }
`;

const ResumeTable = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  p {
    width: 100%;
    height: 20px;
    font-size: 14px;
    color: #333;
    display: flex;
    font-weight: 600;
  }
`;

const ResumeSmallBox = styled.div`
  display: flex;
  span {
    font-size: 10px;
    margin-right: 8px;
    color: #333;
  }
`;

const ArrowImg = styled.span`
  position: absolute;
  top: 35%;
  right: 15px;
  width: 10px;
  height: 10px;
  border-top: 2px solid rgba(167, 167, 167);
  border-right: 2px solid rgba(167, 167, 167);
  transform: rotate(45deg);
`;

const DataInfo = styled.div`
  margin: 0 auto;
  height: 33px;
  width: 100%;
  font-weight: bold;
  line-height: 50px;
`;
