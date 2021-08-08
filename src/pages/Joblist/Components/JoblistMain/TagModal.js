import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { FILTER_API } from "../../../../config";
import { addFilter, deleteFilter } from "../../../../store/actions/index";
import { setUrlLoading } from "../../../../store/actions/index";

const TagModal = ({ closeModal }) => {
  const [filteringTags, setFilteringTags] = useState([]);
  const [mainTagId, setMaintagId] = useState(1);
  const [onSave, setOnSave] = useState(true);
  const userFilterState = useSelector(state => state.userFilterReducer);
  const dispatch = useDispatch();
  console.log(userFilterState);

  const setTagState = (id, name) => {
    const isHavingTag = userFilterState.tag.some(function (val) {
      return val.id === id;
    });
    if (!isHavingTag) {
      if (userFilterState.tag.length < 3) dispatch(addFilter({ id, name }));
      else alert("이런 욕심쟁이! 태그는 3개 까지만^.~");
    }
    if (isHavingTag)
      dispatch(deleteFilter(userFilterState.tag.filter(tag => tag.id !== id)));
  };

  useEffect(() => {
    fetch(`${FILTER_API}/tag`)
      .then(res => res.json())
      .then(res => {
        setFilteringTags(res.tag_list);
      });
  }, []);

  return (
    <Modal>
      <HeaderMenu>
        <span>
          <i class="fas fa-undo"></i> 초기화
        </span>
        <div>
          <span>태그</span>
          <div>{userFilterState.tag.length}</div>
        </div>
        <span onClick={closeModal}>
          <i data-name="exitModal" class="fas fa-times fa-lg "></i>
        </span>
      </HeaderMenu>
      <Article>
        <h3>
          기업의 특별한 복지, 혜택 등 태그를 선택하여
          <br />
          나에게 꼭 맞는 포지션을 찾아보세요!
        </h3>
        <div>
          <h4>1. 카테고리 선택</h4>
          {filteringTags.map((mainTag, idx) => (
            <TagButton
              isClicked={mainTagId === idx + 1}
              onClick={() => setMaintagId(idx + 1)}
            >
              {mainTag.name}
            </TagButton>
          ))}
        </div>
        <div>
          <h4>2. 태그 선택</h4>
          <div>
            {filteringTags[mainTagId] &&
              filteringTags[mainTagId - 1].tags.map((tag, idx) => (
                <TagButton onClick={() => setTagState(tag.id, tag.name)}>
                  {tag.name}
                </TagButton>
              ))}
          </div>
        </div>
      </Article>
      <SelecedTagsBox>
        <div>
          {userFilterState.tag.map(tag => (
            <SelectedButton>
              {tag.name}
              <button onClick={() => setTagState(tag.id, tag.name)}>X</button>
            </SelectedButton>
          ))}
        </div>
        <footer>
          <h5>
            <input
              type="checkbox"
              checked={onSave}
              onClick={e => setOnSave(e.target.checked)}
            />
            선택한 필터를 항상 유지합니다
          </h5>
          <button
            data-name="exitModal"
            onClick={() => dispatch(setUrlLoading(true))}
          >
            확인
          </button>
        </footer>
      </SelecedTagsBox>
    </Modal>
  );
};

const Modal = styled.div`
  width: 500px;
  height: 556px;
  background-color: white;
  padding-top: 20px;
`;

const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;

  & > * {
    width: 33%;
  }

  span {
    color: rgba(0, 0, 0, 0.4);
    font-size: 14px;

    cursor: pointer;

    &:nth-child(3) {
      text-align: end;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    span {
      cursor: auto;
      color: black;
      margin-right: 10px;
      font-size: 16px;
    }

    div {
      width: 20px;
      height: 20px;
      color: white;
      background-color: #3366ff;
      border-radius: 50%;
      font-size: 14px;
    }
  }
`;

const Article = styled.article`
  padding: 0 20px;
  height: 270px;
  overflow: auto;
  padding-top: 15px;

  h3 {
    font-size: 14px;
    margin-bottom: 25px;
    line-height: 20px;
  }

  div {
    font-size: 13px;
    margin-bottom: 20px;

    h4 {
      font-weight: 400;
      margin-bottom: 15px;
    }

    div {
      border: 1px solid #d1d1d1;
      padding: 15px;
    }
  }
`;

const TagButton = styled.button`
  border-radius: 20px;
  border: 1px solid ${props => (props.isClicked ? "#3366ff" : "none")};
  background-color: #e9f4fb;
  padding: 10px 15px;
  color: #333333;
  margin: 0 8px 5px 0;
  font-size: 13px;
`;

const SelectedButton = styled.span`
  height: 34px;
  border-radius: 20px;
  border: 1px solid #3366ff;
  background-color: #ffffff;
  padding: 8px 15px;
  color: #3366ff;
  margin: 0 8px 5px 0;
  font-size: 13px;
  font-weight: bold;

  button {
    margin-left: 5px;
  }
`;

const SelecedTagsBox = styled.div`
  div {
    display: flex;
    padding: 20px;
    height: 100px;
    background-color: #eeeeee;
    overflow: auto;
    flex-wrap: wrap;
  }

  footer {
    text-align: center;

    h5 {
      text-align: start;
      padding: 20px 20px;
    }

    button {
      width: 460px;
      height: 50px;
      border-radius: 50px;
      background-color: #3366ff;
      color: white;
      font-weight: bold;
      text-align: center;
    }
  }
`;

export default withRouter(TagModal);
