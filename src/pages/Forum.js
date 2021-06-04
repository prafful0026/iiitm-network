import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 600,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    widh:"70%"
  },
  link:{
    width:"100%",
    textDecoration:"none"
  },
  btn: {
    width:"100%",
    height: 100,
    fontSize:"1.4rem",
    backgroundColor:"#fefefe"
  },
}));
const Forum = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link className={classes.link} to="/discuss/general">
      <Button
        variant='outlined'
        color='primary'
        className={classes.btn}
      >
        GENERAL DISCUSSION
      </Button>
      </Link>
      
      <Link className={classes.link} to="/discuss/placement">
      <Button
        variant='outlined'
        color='primary'
        className={classes.btn}
      >
        PLACEMENT DISCUSSION
      </Button>
      </Link>
      <Link className={classes.link} to="/discuss/college">
      <Button
        variant='outlined'
        color='primary'
        className={classes.btn}
      >
        COLLEGE DISCUSSION
      </Button>
      </Link>
      <Link className={classes.link} to="/discuss/student">
      <Button
        variant='outlined'
        color='primary'
        className={classes.btn}
      >
        STUDENT DISCUSSION
      </Button>
      </Link>
    </div>
  );
};

export default Forum;
