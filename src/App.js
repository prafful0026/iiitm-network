import LoginPage from "./pages/login/login";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Alumni from "./pages/Alumni";
import Student from "./pages/Student";
import Faculty from "./pages/Faculty";
import Admin from "./pages/Admin";
import { useSelector } from "react-redux";
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
            <Route path='/student' component={Student} exact />
            <Route path='/faculty' component={Faculty} exact />
            <Route path='/alumni' component={Alumni} exact />
            <Route path='/Admin' component={Admin} exact />
            <Route path='*'>
              <Redirect to='/' />
            </Route>
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
