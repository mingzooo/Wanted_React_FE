import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { API } from "../../config";
import { FiFilter } from "react-icons/fi";
import FilterModal from "./MainFilter/FilterModal";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
// import TopCate from "./TopCate";
// import PositionList from "./PositionList";
import Aggreesive from "./Aggreesive";
import {
    BrowserRouter as Link, useHistory
} from "react-router-dom";
import { AiFillHeart } from 'react-icons/ai';

const Quest = ({ clickFilter }) => {
    let history = useHistory(); //얘 공부하기
    // let match = useRouteMatch();
    const [content, setContent] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [filter, setFilter] = useState([]);
    const [cate, setCate] = useState([]);
    const [aggreesive, setAggreesive] = useState([]);
    const [filterAlign, setFilterAlign] = useState("최신순");
    const [country, setCountry] = useState("한국");
    const [region, setRegion] = useState("전국");
    const [career, setCareer] = useState("전체");
    const [transform, setTransform] = useState(0);
    const [clicked, setClicked] = useState(0);
    const [cateID, setCateID] = useState(0);
    const [pathID, setPathID] = useState(1);
    const [isFetching, setIsFetching] = useState(false);
    const [offset, setOffset] = useState(0)
    const LIMIT = 20
    // const [limit, setLimit] = useState(20);
    // const [listContent, setListContent] = useState(0);

    useEffect(() => {
        // fetch("/data/mainCate.json")
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setCate(res.data);
        //     });
        fetch(`${API}/job/category`)
            .then((res) => res.json())
            .then((res) => {
                setCate(res.data)
            });
        fetch(`${API}/job/list`)
            .then((res) => res.json())
            .then((res) => {
                setContent(res.data);
            });
        // fetch(`${API}/job/list/${cateID}`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setListContent(res.data);
        //     });
        fetch("/data/aggreesive.json")
            .then((res) => res.json())
            .then((res) => {
                setAggreesive(res.data);
            });
        fetch("/data/filter.json")
            .then((res) => res.json())
            .then((res) => {
                setFilter(res.data);
            });
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     getData();
    // }, [clickFilter]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop
            !== document.documentElement.offsetHeight) {
            setIsFetching(true);
            setOffset(offset + 20);
            return;
        }
    }

    // useEffect(() => {
    //     if (!setIsFetching) return;
    //     fetch(`${API}/job/list?offset=${offset}`)
    //         .then((res) => res.json())
    //         .then((res) => {
    //             console.log(res.data)
    //             setContent([...content, ...res.data]);
    //             setIsFetching(false);
    //         });
    //     // fetchMoreListItems();
    // }, [isFetching]);

    useEffect(() => {
        if (setIsFetching) {
            setOffset(LIMIT + offset);
            getData();
        } else {
            return;
        }
    }, [isFetching]);

    const getData = async () => {
        const response = await fetch(
            `${API}/job/list?offset=${offset}`
        );
        const list = await response.json();
        setContent([...content, ...list.data]);
        setIsFetching(false);
    };

    const aggreesiveList = aggreesive.map((aggreesiveData, idx) => {
        return (
            <Aggreesive
                title={aggreesiveData.name}
                position={aggreesiveData.number_positions}
                ci={aggreesiveData.logo_url}
                img={aggreesiveData.thumbnail_url}
            />
        );
    })

    const filterClick = () => {
        setShowModal(true);
    }

    const arrowRight = () => {
        setTransform(() => transform - 680);
        setClicked(() => clicked - 1);
    }

    const arrowLeft = () => {
        setTransform(() => transform + 680);
        setClicked(() => clicked + 1);
    }

    const clickCate = (id, idx) => {
        if (cate[idx].sub_category) {
            setCate(cate[idx].sub_category) //재클릭시, setCate가 set이 될 때 map을 돌게 없다.
            setCateID(idx)
            history.push(`/category/${idx}`);
        } else {
            history.push(`/category/${cateID}/${id}`);
            // dataUpdate();
            setPathID(id);
        }
    }

    // const dataUpdate = ({ match }) => {
    //     // let match = useRouteMatch();
    //     console.log("match", match)
    // }

    useEffect(() => {
        fetch(`${API}/job/list/${pathID}`)
            .then((res) => res.json())
            .then((res) => {
                setContent(res.data);
            });
    }, [pathID]) //pathID가 바뀔 때 실행이 된다.

    const detailPage = (id) => {
        // history.push(`/category/${cateID}/${id}`);
        history.push(`/DetailPage/${id}`);
    }

    return (
        <QuestContainer>
            <QuestCate>
                <PostionTitle>전체</PostionTitle>
                <PositionBox>
                    <PositionBtnLeft>
                        <BsChevronLeft size={30} onClick={arrowLeft} />
                    </PositionBtnLeft>
                    <div>
                        <FlexUlCate transform={transform}>
                            {
                                cate.map((mainData, idx) => {
                                    return (
                                        <TopCateList img={mainData.background_image} onClick={() => clickCate(mainData.id, idx)} style={{ cursor: 'pointer' }}>
                                            <p>{mainData.name}</p>
                                        </TopCateList>
                                    );
                                })
                            }
                        </FlexUlCate>
                    </div>
                    <PositionBtnRight>
                        <BsChevronRight size={30} onClick={arrowRight} />
                    </PositionBtnRight>
                </PositionBox>
            </QuestCate>
            <FlexBox>
                <QuestFliterLeft>
                    {
                        showModal ? (
                            <FilterModal
                                setShowModal={setShowModal}
                                setFilter={setFilter}
                                setFilterAlign={setFilterAlign}
                                setCountry={setCountry}
                                setRegion={setRegion}
                                setCareer={setCareer}
                                filter={filter}
                            />
                        ) : null
                    }
                    <QuestFliterButton>{filterAlign}</QuestFliterButton>
                    <QuestFliterButton><span>국가</span> {country}</QuestFliterButton>
                    <QuestFliterButton propsColor="black"><span>지역</span> {region}</QuestFliterButton>
                    <QuestFliterButton propsColor="black"><span>경력</span> {career}</QuestFliterButton>
                </QuestFliterLeft>
                <QuestFliterRight>
                    <QuestFliterButton onClick={() => filterClick()}>
                        <span><FiFilter color="#2986FA" /></span>필터
                    </QuestFliterButton>
                </QuestFliterRight>
            </FlexBox>
            <AggressiveBox>
                <PostionTitle>적극 채용 중인 회사</PostionTitle>
                <AggresiveFlexUl>
                    {aggreesiveList}
                </AggresiveFlexUl>
                <FlexUl>
                    {
                        content.map((quest) => {
                            return (
                                <PositionBoxList onClick={() => detailPage(quest.id)}>
                                    {/* onClick={() => detailPage(quest.id)} */}
                                    <PositionImg>
                                        <img src={quest.thumbnail} alt="" />
                                        <LikeBox><div><AiFillHeart /></div><span>{quest.likes}</span></LikeBox>
                                    </PositionImg>
                                    <PositionListTitle> {quest.name} </PositionListTitle>
                                    <PositionText>
                                        <p> {quest.company} </p>
                                        <span> {quest.region} </span>
                                        <span> {quest.country} </span>
                                    </PositionText>
                                    <Compensation>
                                        채용보상금 {Number(quest.reward_amount).toLocaleString()}원
                                    </Compensation>
                                </PositionBoxList>
                            );
                        })
                    }
                </FlexUl>
            </AggressiveBox>
        </QuestContainer>
    );
}

const QuestContainer = styled.div`
  max-width: 1060px;
  background-color: white;
  display: block;
  position: sticky;
  left: 0;
  top: 55px;
`;

const QuestCate = styled.div`
  border-bottom: 1px solid gray;
  padding-bottom: 1em;
  margin-top: 3em;
  /* position: sticky; 
  position: -webkit-sticky;
  top: 50px; */
  background-color: white;
`;

const AggresiveFlexUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3.5em;
  &:hover {
          cursor: pointer; 
    }
`;

const PositionBox = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display:none;
  }
`;

const FlexUlCate = styled.ul`
  width: 940px;
  display: inline-block;
  white-space: nowrap; 
  /* 위에 white-space사용해서 해결 */
  transform: translateX(${(props) => props.transform}px);
  transition: transform .15s ease-in-out;
`;

const QuestFliterLeft = styled.div`
  display:flex;
  margin-top: 1em;
`;

const QuestFliterButton = styled.div`
  padding: .8em 1em;
  border: 1px solid #dddddd;
  font-size: .8125rem;
  border-radius: .2em;
  display: flex;
  align-items: center;
  margin-right: .5em;
  color: ${props => props.propsColor === "black" ? "black" : "#2986FA"};
  :last-child{
    margin-right: 0em;
  }
  span{
    margin-right: .3em;
    color: #999999;
  }
  &:hover {
          cursor: pointer;
          background-color: #f7f7f7;
    }
`;

const QuestFliterRight = styled.div`
  margin-top: 1em;  
`;

const AggressiveBox = styled.div`
 
`;

const PositionBtnRight = styled.div`
  width: 300px;
  height: 60px;
  cursor: pointer;
  transition: all 0.2s linear;
  color: gray;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,.1));
  background-color: transparent;
  box-shadow: 3px 3px 10px 0px #FFFFFF;
`;

const PositionBtnLeft = styled.div`
  width: 300px;
  height: 60px;
  cursor: pointer;
  transition: all 0.2s linear;
  color: gray;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to left, rgba(255,255,255,.5), rgba(255,255,255,1));
  background-color: transparent;
  box-shadow: 3px 3px 10px 0px #FFFFFF;
`;

const FlexBox = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const PostionTitle = styled.div`
  font-size: 1.5rem;
  margin: 1em 0em 1em 0em;
  font-weight: 600;
  color: black;
`;

const TopCateList = styled.li`
    display: inline-block;
    width: 130px;
    height: 60px;
    border-radius: .3em;
    padding: .5em 0em;
    text-align: center;
    font-size: 0.9rem;
    background: url(${props => props.img}),
    linear-gradient(to right, rgba(20, 20, 20, 0.9),  rgba(20, 20, 20, 0.9));
    background-size: 100%;
    line-height: 3em;
    font-weight: 500;
    margin-right: .5em;
    color: #f7f7f7;
`;

const PositionBoxList = styled.li`
    width: 230px;
    height: 400px;
    span {
        font-size: .875rem;
        color: gray; 
    }
    &:hover {
      cursor: pointer;
    }
`;

const PositionImg = styled.div`
  position: relative;
  width: 100%; 
  height: 175px;
  img{
      width: 100%;
      border-radius: .3em;
  }
`;

const LikeBox = styled.div`
  top: .7em;
  right: .7em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba( 0, 0, 0, 0.3);
  color: white;
  width: 60px;
  height: 30px;
  border-radius: .2em;
  line-height: .1em;
  div{
      opacity: .5;
      margin-right: .2em;
  }
  span{
      font-size: .875rem;
      font-weight: 600;
  }
`;

const PositionListTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: black;
  margin: .8em 0px;
`;

const PositionText = styled.div`
    p{
        color: #999999;
        font-size: 1rem;
        margin-bottom: .5em;
    }
`;

const Compensation = styled.div`
  color: #666666;
  font-size: .875rem;
  margin-top: 1.2em;
`;


export default Quest;