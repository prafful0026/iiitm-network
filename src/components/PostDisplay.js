import React, { useEffect, useState, Fragment } from "react";
import PostCard from "./PostCard";
import { getPosts } from "../redux/actions/PostActions";
import { useDispatch, useSelector } from "react-redux";
import { POST_RESET } from "../redux/constants/PostConstants";
const PostDisplay = ({ keyword }) => {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.postsByCategory);
  const { error, posts, loading } = postState;
  useEffect(() => {
    const isFavourite = keyword === "favourite";
    dispatch(getPosts(keyword, isFavourite));
    return () => {
      dispatch({ type: POST_RESET });
    };
  }, [dispatch,keyword]);

  return (
    <Fragment>
      {error && <h1>{error}</h1>}
      {loading ? (
        <h1>loading.....</h1>
      ) : (
        <Fragment>
          { posts &&
              posts.map((post) => <PostCard keyword={keyword} key={post._id} post={post} />)
              }
        </Fragment>
      )}
    </Fragment>
  );
};

export default PostDisplay;
