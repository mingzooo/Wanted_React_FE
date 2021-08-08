import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CategoryNav from "./Components/CategoryNav/CategoryNav";
import styled from "styled-components";
import JoblistMain from "./Components/JoblistMain/JoblistMain";
import { USER_FILTER_API, CATEGORY_API, JOB_API } from "../../config";
import {
  setFilter,
  setJobLoading,
  setUrlLoading
} from "../../store/actions/index";
import Navbar from "../../components/common/Navbar/navbar";

const objToQuery = obj => {
  const str = Object.entries(obj)
    .filter(el => el[1].length)
    .map(x => x[1].map(y => [x[0], y.id].join("=")))
    .map(z => z.join("&"))
    .join("&");
  return str;
};

const Joblist = ({ history, location }) => {
  const { main, sub } = useParams();
  const [isFilterloading, setIsFilterloading] = useState(true);
  const [sortingState, setSortingState] = useState("popularity");
  const userFilterState = useSelector(state => state.userFilterReducer);
  const jobLoading = useSelector(state => state.jobFetchReducer);
  const urlUpdating = useSelector(state => state.urlUpdateReducer);
  const dispatch = useDispatch();
  const { jobData } = useJobsFetch(main, sub, location, jobLoading, dispatch);
  const {
    currentCategories,
    categoryRoute,
    reFetchCategory
  } = useCategoryFetch(main, sub);

  useEffect(() => {
    const option = localStorage.getItem("token")
      ? {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
      : {
        method: "GET"
      };
    if (isFilterloading)
      fetch(USER_FILTER_API, option)
        .then(res => res.json())
        .then(res => {
          delete res.message;
          console.log(res);
          dispatch(setFilter(res));
          setIsFilterloading(false);
          dispatch(setUrlLoading(true));
        });
    if (urlUpdating) {
      const QueryURL = ((sub, main) => {
        if (sub) return `/joblist/${main}/${sub}`;
        else if (main) return `/joblist/${main}`;
        else return "/joblist";
      })(sub, main);
      history.push(
        `${QueryURL}?${objToQuery(userFilterState)}&job_sort=${sortingState}`
      );
      dispatch(setUrlLoading(false));
      dispatch(setJobLoading(true));
    }
  }, [urlUpdating]);

  return (
    <>
      <Navbar />
      <Main>
        <CategoryNav
          currentCategories={currentCategories}
          categoryRoute={categoryRoute}
          reFetch={reFetchCategory}
        />
        <JoblistMain jobData={jobData} setSortingState={setSortingState} />
      </Main>
    </>
  );
};

const useCategoryFetch = (main, sub) => {
  const [categories, setCategories] = useState([]);
  const [CategoryLoading, setCategoryLoading] = useState(true);
  const [route, setRoute] = useState([]);

  const filterCategories = allCategories => {
    let currentCategories = [];
    if (sub)
      currentCategories = allCategories[main - 1].sub_category.filter(
        el => el.id !== +sub
      );
    else if (main) currentCategories = allCategories[main - 1].sub_category;
    else currentCategories = allCategories;
    setCategories(currentCategories);
  };

  const getCategoryRoute = allCategories => {
    let currentCategoryRoute = [];
    main && currentCategoryRoute.push(allCategories[main - 1]);
    sub &&
      currentCategoryRoute.push(
        allCategories[main - 1].sub_category.filter(el => el.id === +sub)[0]
      );
    setRoute(currentCategoryRoute);
  };

  useEffect(() => {
    if (CategoryLoading)
      // fetch(CATEGORY_API)
      fetch('/data/job-category.json')
        .then(res => res.json())
        .then(res => {
          filterCategories(res.category_list);
          getCategoryRoute(res.category_list);
          setCategoryLoading(false);
        });
  }, [CategoryLoading]);

  return {
    currentCategories: categories,
    categoryRoute: route,
    reFetchCategory: setCategoryLoading
  };
};

const useJobsFetch = (main, sub, location, jobLoading, dispatch) => {
  const [jobData, setJobData] = useState();

  const objToQuery = () => {
    const jobCategoryQuery = main
      ? sub
        ? `&main=${main}&sub=${sub}`
        : `&main=${main}`
      : "";
    const currentQueryStr = location.search;
    return currentQueryStr + jobCategoryQuery;
  };

  useEffect(() => {
    const query = objToQuery();
    const option = localStorage.getItem("token")
      ? {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
      : {
        method: "GET"
      };
    if (jobLoading) console.log(JOB_API, query);
    // fetch(`${JOB_API}${query}`, option)
    fetch('/data/job_list.json')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setJobData(res.job_list);
        dispatch(setJobLoading(false));
      });
  }, [jobLoading]);

  return { jobData };
};

const Main = styled.main`
  margin-top: 50px;
  width: 100%;
`;

export default Joblist;
