import React from "react";
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
const MessageInput = () => {
  const messageSendHandler = (e) => {
    e.preventDefault();
    console.log("pressed");
  };
  const classes = useStyles();
  return (
    <>
      <div style={{ backgroundColor:"white"}}>
        <form onSubmit={messageSendHandler} className={classes.form}>
          <TextField
            id='outlined-basic'
            label='Write Message'
            variant='outlined'
            className={classes.input}
            required
          />
          <IconButton
            color='primary'
            aria-label='add to shopping cart'
            type='submit'
          >
            <SendIcon />
          </IconButton>
        </form>
      </div>
    </>
  );
};

export default MessageInput;
