import React, { useEffect,Fragment } from "react";
import PostCard from "./PostCard";
import { getPosts } from "../redux/actions/PostActions";
import { useDispatch, useSelector } from "react-redux";
import { POST_RESET } from "../redux/constants/PostConstants";
import Loader from "./Loader";
import Error from "./Error";
const PostDisplay = ({ keyword ,isUserById}) => {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.postsByCategory);
  const { error, posts, loading } = postState;

  useEffect(() => {
    const isFavourite = keyword === "favourite";
    dispatch(getPosts(keyword, isFavourite,isUserById));
    return () => {
      dispatch({ type: POST_RESET });
    };
  }, [dispatch,keyword,isUserById]);

  return (
    <Fragment>
      <Error error={error} />
       <Loader loading={loading} />
        <Fragment>
          { posts && posts.length>0 &&
              posts.map((post) => <PostCard keyword={keyword} key={post._id} post={post} />)
              }
        </Fragment>
      
    </Fragment>
  );
};

export default PostDisplay;
