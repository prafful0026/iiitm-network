import {useEffect,useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import {userLogin} from "../../redux/actions/UserActions"
import "./login.css";
import { useHistory } from "react-router-dom";
import React from "react";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory()
  const loginInfo = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = loginInfo;

  useEffect(() => {
    if(userInfo)
    history.push("/")

  }, [history,userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };
  return (
    <div className="loginPage">
        
      <div className="formContainer">
      <h2 >Login to IIITM Network</h2>
        <form onSubmit={submitHandler}>
            <div className="inputContainer">
          <input
            type='email'
            value={email}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type='password'
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
