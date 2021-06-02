import {useEffect,useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import {userLogin} from "../../redux/actions/UserActions"
import classes from "./login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginInfo = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = loginInfo;

  useEffect(() => {
    console.log(loading);
    console.log(error);
    console.log(userInfo);
  }, [loading, error, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };
  return (
    <div className={classes.loginPage}>
        
      <div className={classes.formContainer}>
      <h2 >Login to IIITM Network</h2>
        <form onSubmit={submitHandler}>
            <div className={classes.inputContainer}>
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
