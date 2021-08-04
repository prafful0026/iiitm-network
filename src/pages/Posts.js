import { makeStyles } from "@material-ui/core";
import React from "react";
import CreatePost from "../components/CreatePost";
import { useLocation } from "react-router-dom";
import PostDisplay from "../components/PostDisplay";
import PageHeader from "../components/PageHeader";
const createStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 1200,
    margin: "auto",
  },
});
const Posts = () => {

  const location = useLocation();
  const classes = createStyles();
  return (
    <React.Fragment>
      <PageHeader title={
    `${location.pathname.split("/")[2].toUpperCase()} Discussion Zone`
      }/>
      <div className={classes.root}>
     {<CreatePost location={location.pathname.split("/")[2]} />}

        <PostDisplay  keyword={location.pathname.split("/")[2]}/>
      </div>
    </React.Fragment>
  );
};

export default Posts;
