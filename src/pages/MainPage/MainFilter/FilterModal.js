import React, { useState } from "react";
import styled from "styled-components";
import { WiRefresh } from 'react-icons/wi';
import { IoIosClose } from "react-icons/io";
import First from "./First";
import ScrollLock from "../../../components/Modal/ScrollLock";

const FilterModal = ({ setShowModal, filter, setFilterAlign, setCountry, setRegion, setCareer, onSuccess }) => {
    const [filterItem, setFilterItem] = useState("한국");
    const choiceCountry = [
        "전세계", "대만", "싱가폴", "일본", "한국", "홍콩", "기타"
    ]

    ScrollLock();

    return (
        <ShareModaIn>
            <Filter>
                <FilterTop>
                    <div className="refreshBox">
                        <WiRefresh size="30" /><span>초기화</span>
                    </div>
                    <div className="filterTitle">필터</div>
                    <div className="closeIcon">
                        <IoIosClose size="35" color="#999" onClick={() => setShowModal(false)} />
                    </div>
                </FilterTop>
                <FilterMain>
                    <AlignBox className="marginBottom">
                        <p className="pTag">정렬</p>
                        <label>
                            <select onChange={(e) => setFilterAlign(e.target.value)}>
                                <option>최신순</option>
                                <option>보상금순</option>
                                <option>인기순</option>
                            </select>
                        </label>
                    </AlignBox>
                    <CountryBox className="marginBottom">
                        <p className="pTag">국가</p>
                        <ChoiceBox>
                            {
                                choiceCountry && choiceCountry.map((choice, idx) => {
                                    return <li onClick={() => setFilterItem(choice)
                                    } style={{ backgroundColor: filterItem === choice ? '#2986FA' : '#F8F8FA', color: filterItem === choice ? 'white' : '#333333' }}>{choice}</li>
                                })
                            }
                        </ChoiceBox>
                    </CountryBox>
                    <div className="contents"><First filter={filter} filterItem={filterItem} setRegion={setRegion} setCareer={setCareer} /></div>
                </FilterMain>
                <FilterBottom onClick={onSuccess}>
                    <div>적용</div>
                </FilterBottom>
            </Filter>
        </ShareModaIn >
    );
}

const ShareModaIn = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 999;
  .pTag{
      margin-bottom: .7em;
  }
  select{
      padding: 0em 1em;
      border-style: none;
  }
  .marginBottom{
      margin-bottom: 2em;
  }
`;

const Filter = styled.div`
    width: 500px;
    height: 620px;
    background-color: white;
    border-radius: .3em;
`;

const FilterTop = styled.div`
    width: 100%;
    height: 55px;
    border-bottom: 1px solid #dddddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .5em;
    .refreshBox{
        color: ${props => props.theme.color.gray};
        display: flex;
        align-items: center;
    }
    .filterTitle{
        font-weight: 500;
    }
`;

const AlignBox = styled.div`
    select{
        background-color: #F8F8FA;
        font-size: 1rem;
        font-weight: 600;
        width: 445px;
        height: 40px;
        b
        :focus {
            outline: 0;
        }
    } 
`;

const CountryBox = styled.div`

`;

const ChoiceBox = styled.ul`
    display: flex;
    flex-wrap: wrap;
    font-size: 0.9375rem;
    li{
        padding: .7em .9em;
        background-color: #F8F8FA;
        border: 1px solid #dddddd; 
        margin-right: .6em;
        color: ${props => props.theme.color.font};
        margin-bottom: .5em;
        font-weight: 600;
    }
`

const FilterMain = styled.div`
    width: 100%;
    height: 475px;
    border-radius: .3em;
    overflow-y: auto;
    padding: 2em 1em;
    font-size: 1rem;
    p{
        color: ${[props => props.theme.color.gray]};
        font-weight: 500;
    }
    div{
        margin-bottom: 1rem;
    }
`;

const FilterBottom = styled.div`
    width: 100%;
    height: 90px;
    border-radius: 0 0 .3em;   
    border-top: 1px solid #dddddd;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        width: 460px;
        height: 50px;
        background-color: ${props => props.theme.color.main};
        text-align: center;
        color: white;
        font-size: 1.115rem;
        font-weight: 600;
        line-height: 3em;
    }
`;

export default FilterModal;