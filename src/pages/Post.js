import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPostById } from "../redux/actions/PostActions";
import PostCard from "../components/PostCard";

const Post = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.postById);
  console.log(post)
  useEffect(() => {
    dispatch(getPostById(postId));
  }, []);

  return <div>{post && <PostCard post={post} isSinglePost={true}/>}</div>;
};

export default Post;
