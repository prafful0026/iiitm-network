import React, { Fragment } from "react";
import PostDisplay from "../components/PostDisplay";
import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { makeStyles } from "@material-ui/core";
const createStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 1200,
    margin: "auto",
  },
});
const FavouritePosts = () => {
  const styles = createStyles();
  const location = useLocation();
  return (
    <Fragment>
      <PageHeader title='favourite posts' />
      <div className={styles.root}>
        <PostDisplay keyword={location.pathname.split("/")[3]} />
      </div>
    </Fragment>
  );
};

export default FavouritePosts;
