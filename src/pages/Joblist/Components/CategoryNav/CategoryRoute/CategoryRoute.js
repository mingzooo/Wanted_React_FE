import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setUrlLoading } from "../../../../../store/actions/index";

const CategoryRoute = ({ routes, changeCategories, history, location }) => {
  const dispatch = useDispatch();
  return (
    <Section>
      <button
        onClick={() => {
          changeCategories(true);
          dispatch(setUrlLoading(true));
          history.push(`/joblist${location.search}`);
        }}
      >
        전체
      </button>
      {routes.map(route => (
        <>
          <span> &gt; </span>
          <button
            onClick={() =>
              updateJoblist(route, changeCategories, history, dispatch)
            }
          >
            {route.title}
          </button>
        </>
      ))}
    </Section>
  );
};

const updateJoblist = (route, changeCategories, history, dispatch) => {
  changeCategories(true);
  dispatch(setUrlLoading(true));
  const pushURL = route.category_id
    ? `/joblist/${route.category_id}/${route.id}`
    : `/joblist/${route.id}`;
  history.push(pushURL);
};

const Section = styled.div`
  width: 70%;
  margin-bottom: 10px;
  margin-top:20px;

  button {
    font-size: 20px;
    color: gray;
    background:#fff;
    border:none;
    &:hover{
      cursor:pointer;
    }
    &:last-child {
      color: black;
    }
  }
`;

export default withRouter(CategoryRoute);
