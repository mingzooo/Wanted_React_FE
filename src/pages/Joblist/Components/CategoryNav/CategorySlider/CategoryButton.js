import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUrlLoading } from "../../../../../store/actions/index";
import styled from "styled-components";

const CategoryButton = ({
  Id,
  categoryName,
  categoryImg,
  parentsId,
  history,
  changeCategories,
  location
}) => {
  const dispatch = useDispatch();
  const onCategoryClick = () => {
    changeCategories(true);
    dispatch(setUrlLoading(true));
    const pushURL = parentsId
      ? `/joblist/${parentsId}/${Id}`
      : `/joblist/${Id}`;
    history.push(`${pushURL}${location.search}`);
  };

  return (
    <ButtonContainer onClick={onCategoryClick} img={categoryImg}>
      <div>
        <span>{categoryName}</span>
      </div>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.li`
  div {
    cursor: pointer;
    display: flex;
    width: 120px;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: gray;
    margin-right: 10px;
    border-radius: 5px;
    background-image: linear-gradient(
        270deg,
        rgba(156, 169, 204, 0.4) 0,
        rgba(50, 55, 72, 0.8)
      ),
      url("${props => props.img}");
    background-size: cover;

    span {
      color: white;
      font-size: 13px;
    }
  }
`;

export default withRouter(CategoryButton);
