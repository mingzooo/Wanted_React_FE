import { BrowserRouter, Route, Switch } from "react-router-dom"
import IndexPage from "../pages"
import HomePage from "../pages/home"
import MyPage from '../pages/Profile/MyPage';
import MyProfile from '../pages/Profile/MyProfile';
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

                {/* 경로가 유효하지 않을 때 */}
                {/* <Route path='*' component={NoMatchPage} key="noMatch" /> */}

            </Switch>
        </BrowserRouter>
    )
}


export default RootRoute