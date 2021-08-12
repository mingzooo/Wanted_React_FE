import { BrowserRouter, Route, Switch } from "react-router-dom"
import IndexPage from "../pages"
import HomePage from "../pages/home"
import MyPage from '../pages/Profile/MyPage';
import MyProfile from '../pages/Profile/MyProfile';
import Joblist from '../pages/Joblist/Joblist';
import DetailPage from '../pages/DetailPage/DetailPage';
import cv from '../pages/CvPage/CvPage';
import cvDetail from '../pages/CvDetailPage/CvDetailPage';
import SearchResult from '../pages/SearchResult/SearchResult';
import Salary from '../pages/Salary/Salary';
import Bookmark from "../pages/Bookmark/Bookmark";
//import Login from "../pages/login/Login"
// import NoMatchPage from "../pages/noMatch"



const RootRoute = () => {

    return (
        <BrowserRouter>
            <Switch>

                {/* 기본 루트페이지 */}
                <Route path='/' component={IndexPage} exact />
                {/* <Route path='/' component={IndexPage} exact key="index" /> */}

                {/* 추가되는 페이지 */}
                <Route path='/home' component={HomePage} exact />
                <Route path='/mypage' component={MyPage} exact />
                <Route path='/myprofile' component={MyProfile} exact />
                {/* <Route path="/cv" component={CvPage} exact /> */}
                <Route exact path="/joblist" component={Joblist} />
                <Route exact path="/detail/:id" component={DetailPage} />
                <Route exact path="/cv" component={cv} />
                <Route exact path="/cv/:index" component={cvDetail} />
                <Route exact path="/tag-search" component={SearchResult} />
                <Route exact path="/search" component={SearchResult} />
                <Route exact path="/salary" component={Salary} />
                <Route exact path="/bookmarks" component={Bookmark} />
                {/* 경로가 유효하지 않을 때 */}
                {/* <Route path='*' component={NoMatchPage} key="noMatch" /> */}

            </Switch>
        </BrowserRouter>
    )
}


export default RootRoute