import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPostById, commentOnPost } from "../redux/actions/PostActions";
import PostCard from "../components/PostCard";
import MessageInput from "../components/MessageInput";
import PageHeader from "../components/PageHeader";
import CommentCard from "../components/CommentCard";
import { Divider } from "@material-ui/core";
import Loader from "../components/Loader";
import Error from "../components/Error"
const Post = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.postById);

  useEffect(() => {
    if (post && !post[postId]) dispatch(getPostById(postId));
  }, [postId,post,dispatch]);

  const createComment = (text) => {
    dispatch(commentOnPost(text, postId));
  };

  return (
    <>
      <PageHeader title='Post' />
      <Loader loading={loading} />
      <Error error={error} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          {post && post[postId] && (
            <PostCard post={post[postId]} isSinglePost={true} />
          )}
          <MessageInput sendMsg={createComment} isComment={true} />
        </div>
        <div style={{ minWidth: "400px", maxWidth: "800px" }}>
          {post &&
            post[postId]?.comments &&
            post[postId].comments.map(
              (comment) =>
                comment && (
                  <>
                    <CommentCard comment={comment} />
                    <Divider />
                  </>
                )
            )}
        </div>
      </div>
    </>
  );
};

export default Post;
