import { makeStyles } from "@material-ui/core";
import React from "react";
import CreatePost from "../components/CreatePost";
import { useLocation } from "react-router-dom";
import BackButton from "../components/BackButton"
import PostDisplay from "../components/PostDisplay";
const createStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 800,
    margin: "auto",
  },
});
const Posts = () => {
  const location = useLocation();
  const classes = createStyles();
  return (
    <React.Fragment>
      <BackButton/>
      <div className={classes.root}>
        <CreatePost location={location.pathname.split("/")[2]} />
        <PostDisplay  keyword={location.pathname.split("/")[2]}/>
      </div>
    </React.Fragment>
  );
};

export default Posts;
