import LoginPage from "./pages/login/login";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import User from "./pages/User";
import ProfilePage from "./pages/Profile/ProfilePage";
import Forum from "./pages/Forum"
import Posts from "./pages/Posts";
import Chat from "./pages/Chat"
import ChatRoom from "./pages/ChatRoom";
import { useSelector } from "react-redux";
import FavouritePosts from "./pages/FavouritePosts";
import Post from "./pages/Post"
import React from "react";
const App = () => {
  const loginInfo = useSelector((state) => state.userLogin);
  const { userInfo } = loginInfo;

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={LoginPage} exact />
        {userInfo && (
          <Layout>
            <Route path='/' component={ProfilePage} exact />
            <Route path='/member/:userType' component={User} exact />
            <Route path='/discuss' component={Forum} exact />
            <Route path='/post/favourite' component={FavouritePosts} exact />
            <Route path='/post/:postId' component={Post} exact />
            <Route path='/discuss/:postType' component={Posts} exact />
            <Route path='/chat' component={Chat} exact />
            <Route path='/chat/:userId' component={ChatRoom} exact />
            <Route path='/user/:userId' component={ProfilePage} exact />

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
