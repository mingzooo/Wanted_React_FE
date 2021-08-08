import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import TagModal from "./TagModal";
import LocationModal from "./LocationModal";
import CareerModal from "./CareerModal";
import Job from "../../../../components/Job/Job";
import { setUrlLoading } from "../../../../store/actions/index";

const filterData = [
  { name: "태그", key: "tag" },
  { name: "지역", key: "city" },
  { name: "경력", key: "career" }
];

const sortData = ["인기순", "보상금순", "인기순", "응답률순"];

const obj = (activeModalId, closeModal, setIsURLUpdating) => {
  const target = {
    1: <TagModal closeModal={closeModal} setIsURLUpdating={setIsURLUpdating} />,
    2: <LocationModal closeModal={closeModal} />,
    3: <CareerModal closeModal={closeModal} />
  };
  return target[activeModalId];
};

const JoblistMain = ({
  jobData,
  setIsURLUpdating,
  setSortingState,
  history
}) => {
  const { activateModal, closeModal, activeModalId } = useModal();
  const userFilterState = useSelector(state => state.userFilterReducer);
  const dispatch = useDispatch();

  const changeSortingState = e => {
    const sortingType = ["compensation", "popularity", "response"];
    const {
      target: { selectedIndex }
    } = e;
    setSortingState(sortingType[selectedIndex - 1]);
    dispatch(setUrlLoading(true));
  };

  return (
    <JobListMain activateModal={activateModal}>
      <JobSortSection>
        <div>
          {filterData.map((keyWord, idx) => (
            <FilterButton onClick={() => activateModal(idx + 1)}>
              <span>{keyWord.name} </span>
              <span>
                {userFilterState[keyWord.key] &&
                  userFilterState[keyWord.key][0]?.name}
              </span>
              <span>▼</span>
            </FilterButton>
          ))}
        </div>
        <ModalBackground data-name="modalBack" isVisible={activeModalId}>
          {obj(activeModalId, closeModal, setIsURLUpdating)}
        </ModalBackground>
        <Select onChange={changeSortingState}>
          {sortData.map(type => (
            <option>{type}</option>
          ))}
        </Select>
      </JobSortSection>
      <LikeButtonBox>
        <button onClick={() => history.push("/favoritelist")}>
          ♥ 북마크 모아보기 &gt;
        </button>
      </LikeButtonBox>
      <JoblistSection>
        <ul>{jobData && jobData.map(job => <Job key={job.id} job={job} />)}</ul>
      </JoblistSection>
    </JobListMain>
  );
};

const useModal = () => {
  const [activeModalId, setActiveModalId] = useState(0);

  const activateModal = modalIdx => {
    setActiveModalId(modalIdx);
    window.addEventListener("click", closeModal);
  };

  const closeModal = e => {
    const target = e.target.dataset.name;
    const isExitBtn = target === "modalBack" || target === "exitModal";
    if (isExitBtn) setActiveModalId(0);
  };

  return { activateModal, closeModal, activeModalId };
};

const JobListMain = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const JobSortSection = styled.div`
  width: 70%;
  margin: 30px 0 20px 0;
  display: flex;
  justify-content: space-between;
`;

const LikeButtonBox = styled.div`
  width: 70%;
  button {
    font-weight: 700;
    color: #3366ff;
  }
`;

const JoblistSection = styled.section`
  width: 70%;
  ul {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const FilterButtonStyle = css`
  border-radius: 5px;
  border: 0.1px solid rgba(0, 0, 0, 0.1);
  padding: 12px 15px;
  outline: none;

  span {
    &:nth-child(2) {
      margin-right: 5px;
    }
  }
`;

const Select = styled.select`
  ${FilterButtonStyle}
`;

const FilterButton = styled.button`
  ${FilterButtonStyle}
  margin-right: 10px;

  span {
    font-size: 14px;

    &:nth-child(2) {
      font-weight: 700;
      color: #3366ff;
    }
  }
`;

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.isVisible};
  pointer-events: ${props => (props.isVisible ? "auto" : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withRouter(JoblistMain);
