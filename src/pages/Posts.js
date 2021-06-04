import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import { getPosts } from "../redux/actions/PostActions";
import { useDispatch, useSelector } from "react-redux";
const createStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 800,
    margin: "auto",
  },
});
const Posts = () => {
 
  const dispatch = useDispatch();
  const classes = createStyles();

  useEffect(() => {
    dispatch(getPosts("placement"));
  }, [dispatch]);
  const postState = useSelector(
    (state) => state.postsByCategory
  );
  const {error,posts,loading}=postState

  return (
    <div className={classes.root}>
      <CreatePost className={classes.createPost} />
      {loading ? (
        <h1>loading.....</h1>
      ) : (
       posts && posts.map((post) => (<>
          <PostCard key={post._id} postDesc={post.postDesc} postTitle={post.postTitle} userName={post.user.name} />
          </>
       ))
      )}
    </div>
  );
};

export default Posts;
