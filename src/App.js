
import {useEffect,useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import {login} from "./redux/actions/UserActions"
import LoginPage from "./pages/login/login"
import {BrowserRouter,Route,Switch} from "react-router-dom"
const App=()=> {
  return (
    <BrowserRouter>
    <Switch>

    <Route  path="/login"  component={LoginPage} exact/>
     </Switch>
  
    </BrowserRouter>
  )
  
}

export default App;
