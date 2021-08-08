import { useState } from "react";
import CategoryButton from "./CategoryButton";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const CategorySlider = ({ caterories, changeCategories }) => {
  const totalPage = parseInt(caterories.length / 8);
  const slideInterval = (1060 - ((caterories.length * 130) % 1060)) / totalPage;
  const { page, changePage } = useArrowBtn(0, totalPage);

  return (
    <Section>
      <ArrowButton
        data-direction="left"
        onClick={changePage}
        visible={page !== 0}
        totalPage={totalPage}
      >
        <span>&lt;</span>
      </ArrowButton>
      <ArrowButton
        data-direction="right"
        onClick={changePage}
        visible={page !== totalPage}
        totalPage={totalPage}
      >
        <span>&gt;</span>
      </ArrowButton>
      <CategorysContainer>
        <ul style={{ left: page * (1060 - slideInterval) * -1 }}>
          {caterories.map(category => (
            <CategoryButton
              Id={category.id}
              categoryName={category.title}
              categoryImg={category.image_url}
              parentsId={category.category_id}
              changeCategories={changeCategories}
            />
          ))}
        </ul>
      </CategorysContainer>
    </Section>
  );
};

const useArrowBtn = (initialVal, totalPage) => {
  const [pageNum, setPageNum] = useState(initialVal);

  const changePageNum = e => {
    const isLeft = e.currentTarget.dataset.direction === "left";
    if (!isLeft && pageNum < totalPage) setPageNum(pageNum + 1);
    if (isLeft && pageNum > 0) setPageNum(pageNum - 1);
  };

  return { page: pageNum, changePage: changePageNum };
};

export default CategorySlider;

const Section = styled.div`
  width: 70%;
  height: 60px;
  position: relative;
`;

const ArrowButton = styled.button`
  width: 10%;
  height: 60px;
  position:absolute;
  z-index: 1;
  font-size: 40px;
  font-weight: 100;
  color: gray;
  ${props => props["data-direction"]}: -40px;
  background: linear-gradient(
    to ${props => props["data-direction"]},
    rgba(100, 0, 0, 0),
    rgba(255, 255, 255, 1) 70%
  );
  background-size: cover;
  text-align: ${props => props["data-direction"]};
  opacity: ${props => (props.visible ? "1" : "0")};
  pointer-events: ${props => (props.visible ? "auto" : "none")};
  border:none;
`;

const CategorysContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  ul {
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 0;
    transition: 1s ease-in-out;
    list-style:none;
  }
`;
