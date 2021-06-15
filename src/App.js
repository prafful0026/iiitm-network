import LoginPage from "./pages/login/login";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import User from "./pages/User";
import Forum from "./pages/Forum"
import Posts from "./pages/Posts";
import Chat from "./pages/Chat"
import ChatRoom from "./pages/ChatRoom";
import { useSelector } from "react-redux";
import React from "react";
import Profile from "./pages/Profile/Profile";
const App = () => {
  const loginInfo = useSelector((state) => state.userLogin);
  const { userInfo } = loginInfo;

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={LoginPage} exact />
        {userInfo && (
          <Layout>
            <Route path='/' component={Home} exact />
            <Route path='/user/:userType' component={User} exact />
            <Route path='/user/profile/:userId' component={Profile} exact />
            <Route path='/discuss' component={Forum} exact />
            <Route path='/discuss/:id' component={Posts} exact />
            <Route path='/chat' component={Chat} exact />
            <Route path='/chat/:userId' component={ChatRoom} exact />
            {/* <Route path='*'>
              <Redirect to='/' />
            </Route> */}
          </Layout>
        )}
        <Route path='*'>
          <Redirect to='/login' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
