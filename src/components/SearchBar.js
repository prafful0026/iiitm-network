import React,{useState} from "react";
import { makeStyles, Button, TextField, Icon } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    width: "100%",
  },
  form: {
    display: "flex",
  },
}));
const MessageInput = ({sendMsg,isComment}) => {
  const [message,setMessage]=useState("")


  const messageSendHandler = (e) => {
    e.preventDefault();
   sendMsg(message)
   setMessage("")
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <div style={{ backgroundColor:"white"}}>
        <form onSubmit={messageSendHandler} className={classes.form} autoComplete="off">

          <IconButton
            color='primary'
            aria-label='add to shopping cart'
            type='submit'
          >
            <SendIcon />
          </IconButton>
        </form>
      </div>
    </React.Fragment>
  );
};

export default MessageInput;
