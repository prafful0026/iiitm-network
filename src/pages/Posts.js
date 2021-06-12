import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState, useCallback } from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import { getPosts } from "../redux/actions/PostActions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
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
  const dispatch = useDispatch();
  const classes = createStyles();
  useEffect(() => {
    dispatch(getPosts(location.pathname.split("/")[2]));
  }, [dispatch]);
  const postState = useSelector((state) => state.postsByCategory);
  const { error, posts, loading } = postState;

  return (
    <React.Fragment>
      {error && <h1>{error}</h1>}
      <div className={classes.root}>
        <CreatePost location={location.pathname.split("/")[2]} />
        {loading ? (
          <h1>loading.....</h1>
        ) : (
          posts &&
          posts.map((post) => (
            <PostCard
              key={post._id}
              postDesc={post.postDesc}
              postTitle={post.postTitle}
              userName={post.user.name}
              userProfilePic={post.user.profilePicUrl}
              createdAt={post.createdAt}
              picUrl={post.picUrl}
              userId={post.user._id}
              postId={post._id}
              likes={post.likes}
            />
          ))
        )}
      </div>
    </React.Fragment>
  );
};

export default Posts;
