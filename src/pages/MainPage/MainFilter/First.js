import React, { useState } from "react";
import styled from "styled-components";

const First = ({ filter, filterItem, setCareer }) => {
    const [filterRegion, setFilterRegion] = useState("전국")
    const career = (e) => {
        setCareer = e.target.value;
        console.log(setCareer);
    }

    return (
        <>
            <Area className="marginBottom" isActive={filterItem}>
                <p className="pTag">지역</p>
                <ChoiceBox>
                    {
                        filter && filter.map((region, idx) => {
                            return <li onClick={() => setFilterRegion(region.name)} style={{ backgroundColor: filterRegion === region.name ? '#2986FA' : '#F8F8FA', color: filterRegion === region.name ? 'white' : '#333333' }}>{region.name}</li>
                        })
                    }
                </ChoiceBox>
            </Area>
            <AlignBox className="marginBottom">
                <p className="pTag">정렬</p>
                <label>
                    <select onChange={career}>
                        <option>전체</option>
                        <option>신입</option>
                        <option>1년</option>
                        <option>2년</option>
                        <option>3년</option>
                        <option>4년</option>
                        <option>5년</option>
                        <option>6년</option>
                        <option>7년</option>
                        <option>8년</option>
                        <option>9년</option>
                        <option>10년</option>
                    </select>
                </label>
            </AlignBox>
            <CheckBox>
                <input type="checkBox" />
                <span>적용된 필터를 저장하고 유지합니다.</span>
            </CheckBox>
        </>
    );
}

const Area = styled.div`
    display: ${props => props.isActive === "한국" ? "block" : "none"};
`;

const AlignBox = styled.div`
    select{
        background-color: #F8F8FA;
        font-size: 1rem;
        font-weight: 600;
        width: 445px;
        height: 40px;
    }
`;

const CheckBox = styled.div`
    margin-top: 2em;
    font-size: 1rem;
    font-weight: 600;
    input{
        margin-right: .5em;
    }
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
`;

export default First;