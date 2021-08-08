import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CategorySlider from "./CategorySlider/CategorySlider";
import CategoryRoute from "./CategoryRoute/CategoryRoute";
import styled from "styled-components";

const CategoryNav = ({ currentCategories, categoryRoute, reFetch }) => {
  return (
    <CategoryNavSection>
      <CategoryRoute routes={categoryRoute} changeCategories={reFetch} />
      {currentCategories.length && (
        <CategorySlider
          caterories={currentCategories}
          changeCategories={reFetch}
        />
      )}
    </CategoryNavSection>
  );
};

const CategoryNavSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
`;

export default withRouter(CategoryNav);
