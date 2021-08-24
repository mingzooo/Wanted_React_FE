import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import SearchListModal from './SearchListModal';
import TagModal from './TagModal';

function SearchModal({ clickSearch }) {
  const [postingInfo, setPostingInfo] = useState([]);
  const [searchText, setSearchText] = useState('');
  const timerRef = useRef(undefined);
  const history = useHistory();

  useEffect(() => {
    if (timerRef.current > 0) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      fetch(`/company?tag=${searchText}`, {
        method: 'GET',
        redirect: 'follow'
      })
        .then(res => res.json())
        .then(result => setPostingInfo(result.result));
    }, 400);
  }, [searchText]);

  const clickInput = e => {
    e.stopPropagation();
  };

  const handleChange = e => {
    if (e.target.value !== '') {
      setSearchText(e.target.value);
    }
  };

  const handleKeyEvent = e => {
    if (e.key === 'Enter') {
      history.push(`/company?tag=${searchText}`);
      clickSearch();
      e.preventDefault();
      history.push('/company?tag=카카오');
    }
  };

  return (
    <Dimmer onClick={clickSearch}>
      <SearchContainer>
        <Wrapper>
          <form>
            <div>
              <input
                type="search"
                placeholder="#태그, 회사, 포지션 검색"
                onChange={handleChange}
                onClick={clickInput}
                onKeyPress={handleKeyEvent}
              />
              <i className="fas fa-search" />
            </div>
          </form>
          {searchText ? (
            <SearchListModal
              postingInfo={postingInfo}
              searchText={searchText}
            />
          ) : (
            <TagModal />
          )}
        </Wrapper>
      </SearchContainer>
    </Dimmer>
  );
}

export default SearchModal;

const Dimmer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  z-index: 200;
`;

const SearchContainer = styled.section`
  background-color: white;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 30px 0 90px 0;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  form {
    display: flex;
    justify-content: center;
    width: 100%;

    div {
      position: relative;
      i {
        position: absolute;
        margin: 0 16px 0 16px;
        font-size: 18px;
        top: 15px;
        left: 0;
      }

      input {
        width: 1050px;
        height: 50px;
        padding: 0 26px 0 40px;
        border: 1px solid #36f;
        border-radius: 25px;
        outline: none;
      }
    }
  }
`;
