import React, { useState } from "react";
import styled from "styled-components";
import DetailSlider from "../DetailPage/DetailSlider/DetailSlider";
import MapContent from "../DetailPage/Map/MapContent";
import { DetailPage_API } from "../../config";
import Detail from "./DetailData";
import Navbar from "../../components/common/Navbar/navbar";
import { PageWrap } from "../../components/common/styled";
import DetailLike from "./DetailLike";
import DetailSupport from "./DetailSupport";

const DetailPage = () => {
  // const [detail, setDetail] = useState({
  //   id: 0,
  //   title: '',
  //   name: '',
  //   response_rate: 0,
  //   city: '',
  //   compensation_recommender: 0,
  //   compensation_applicant: 0,
  //   likes_count: 0,
  //   image_url: [],
  //   contents: '',
  //   deadline: '',
  //   address: '',
  //   location: [],
  //   taglist: [],
  //   color: "#dbdbdb",
  //   button: false,
  // })
  const [changePage, setCompoChange] = useState(false);
  const [detail, setDetail] = useState(Detail.job_detail);

  // componentDidMount() {
  //   fetch(`${DetailPage_API}/company/${props?.match.params.id}`, {
  //     method: "GET"
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       if (res.message === "SUCCESS") {
  //         this.setDetail({
  //           detail: res.job_detail,
  //           response_rate: res.job_detail.response_rate
  //         });
  //       }
  //       if (this.state.response_rate > 50) {
  //         this.setDetail({ button: true });
  //       }
  //     });
  // }

  const handleChangeBtn = () => {
    if (detail.response_rate > 50) {
      setDetail({ button: true });
    }
  };

  const handleComponentChange = () => {
    setCompoChange(!changePage);
  };


  return (
    <PageWrap>
      <Navbar />
      <DetailPageBox>
        <DetailPageInner>
          <div className="MainContents">
            <div className="companyImg">
              <DetailSlider imgUrl={detail.image_url} />
            </div>
            <div className="section_1">
              <h2>{detail.title}</h2>
              <div className="contents1">
                <h6>{detail.name}</h6>
                {detail.button && (
                  <button onChange={handleChangeBtn}> 응답률 매우 높음</button>
                )}
                <h5>{detail.state}</h5>
                <h5>{detail.city}</h5>
              </div>
              <div className="tagArea">
                <ul>
                  {detail.tag_list &&
                    detail.tag_list.map(tag => <li>{tag.name}</li>)}
                </ul>
              </div>
            </div>
            <div className="contents2">
              <p>{detail.contents}</p>
            </div>
            <div className="section_2">
              <div className="section_2Contents">
                <div className="section_detail">
                  <span className="header">마감일</span>
                  <span className="body">{detail.deadline}</span>
                </div>
                <br></br>
                <div className="section_detail">
                  <span className="header">근무지역</span>
                  <span className="body">{detail.address}</span>
                </div>
              </div>
              <div className="map">
                <MapContent location={detail && detail.location} />
              </div>
            </div>
            <div className="section_3">
              <h5 className="position">윈티드님, 이 포지션을 찾고 계셨나요?</h5>
              <div className="companies"></div>
            </div>
          </div>
          <div className="asideArea">
            <div className="asideBox">
              <h3>채용보상금</h3>
              <ul>
                <li>
                  <h4>추천인</h4>
                  <p>{detail.compensation_recommender}원</p>
                </li>
                <li>
                  <h4>지원자</h4>
                  <p>{detail.compensation_applicant}원</p>
                </li>
              </ul>
            </div>
            <div className="button">
              <button className="bookMark">
                <li class="far fa-bookmark"></li>
                <li>북마크하기</li>
              </button>
              <ApplyButton
                {...detail}
                onClick={() => {
                  handleComponentChange();
                }}
              >지원하기</ApplyButton>
            </div>
            <DetailLike Detail={detail} />
          </div>
        </DetailPageInner>
        {changePage && (
          <DetailSupport
            data={detail}
            handleComponentChange={handleComponentChange}
          />
        )}
      </DetailPageBox>
    </PageWrap>
  );

}

const DetailPageBox = styled.div`
  width: 100%;
  margin-top: 80px;
`;

const ApplyButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  border:none;
  background-color: #36f;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  cursor:pointer;
`;

const DetailPageInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  height: 100%;
  margin: 0 auto;

  .MainContents {
    display:flex;
    flex-direction:column;
    width: 65%;
    height: 100%;
    .companyImg {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .section_1 {
      padding-top: 30px;
      width: 100%;
      h2 {
        display: block;
        color: #333;
        font-size: 22px;
        font-weight: 600;
      }
      .contents1 {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        h6 {
          font-size: 13px;
          padding-right: 10px;
        }
        button {
          margin: 10px;
          padding: 1.5px;
          font-size: 10px;
          font-weight: bold;
          background-color:#fff;
          color: rgb(41, 192, 192);
          border: 1px solid rgb(41, 192, 192);
        }
        h5 {
          display: flex;
          font-size: 15px;
          color: #999;
          display: inline-flex;
          font-weight: 400;
          padding-left: 10px;
        }
      }
      .tagArea {
        width: 100%;
        display: flex;
        ul {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          overflow: auto;
          li {
            margin-right: 6px;
            padding: 9px 14px;
            font-weight: 500;
            font-size: 12px;
            color: #333;
            background-color: #f3f5f8;
            border-radius: 25px;
            list-style:none;
          }
        }
      }
    }
    .contents2 {
      width: 100%;

      p {
        line-height: 1.75;
        font-size: 16px;
        color: #333;
        font-weight: 400;
      }
    }
    .section_2 {
      width: 100%;
      display:flex;
      flex-direction:column;
      border-top: 1px solid #eeeeee;
      margin: 20px 0;
      .section_2Contents {
        display:flex;
        flex-direction:column;
        .section_detail{
          display:flex;
          flex-direction:row;
          width: content-fit;
          align-items: center;
          .header {
          display:flex;
          font-size: 16px;
          font-weight: 600;
          color: #999;
          line-height: 40px;
          margin-right:20px;
          }
        }
        .body {
          color: #333;
          display: flex;
          font-size: 16px;
          font-weight: 600;
        }
      }
      .map {
        width: 100%;
        height: 280px;
      }
    }
    .section_3 {
      margin: 80px 0 0;
      .position {
        margin: 0 0 20px;
        font-size: 20px;
        font-weight: 600;
        color: #333;
      }
    }
  }
  .asideArea {
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    position: fixed;
    right: 15%;
    width: 20%;
    height: 40%;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    padding: 15px;
    border-radius: 3px;
    .asideBox {
      width:100%;
      padding:5px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 30%;
      h3 {
        font-size: 15px;
        font-weight: 600;
        text-align: left;
        color: #333;
      }
      ul {
        width: 100%;
        display:flex;
        flex-direction:row;
        li {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          width: 50%;
          list-style:none;
          text-align: left;
          h4 {
            height: 50%;
            font-size: 14px;
            font-weight: 700;
            color: #999;
            margin-bottom: 0.7rem;
          }
          p {
            height: 50%;
            font-size: 16px;
            color: #333;
            font-weight: 800;
          }
        }
      }
    }
    .button {
      width:100%;
      display:flex;
      flex-direction:column;
      cursor: pointer;
      height: 38%;
      justify-content: space-between;
      .bookMark {
        cursor:pointer;
        width: 100%;
        height: 50px;
        margin-bottom: 7px;
        border-radius: 25px;
        border: 1px solid #e1e2e3;
        background-color: #fff;
        display: flex;
        justify-content: center;
        li:first-child {
          line-height: 48px;
          color:#3366FF;
        }
        li:last-child {
          line-height: 48px;
          color: #3366FF;
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          list-style: none;
          padding-left: 10px;
        }
      }
    }
    .likeArea {
      display: flex;
      flex-direction:row;
      margin-top: 20px;
      .likeCount {
        height: 30px;
        border-radius: 15px;
        border: 1px solid #e1e2d3;
        margin-right: 12px;
        padding: 0 15px;
        background-color: #fff;
        cursor: pointer;
        button {
          cursor: pointer;
          padding-right: 10px;
          font-size: 15px;
          background-color: #fff;
          border: none;
        }
        span {
          font-size: 15px;
        }
      }
      .likePeople {
        border:none;
        background: #fff;
        cursor: pointer;
        i {
          list-style:none;
          font-size: 24px;
        }
      }
    }
  }
`;

export default DetailPage;