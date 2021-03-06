import React, { useState,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  TextField, Button, makeStyles } from "@material-ui/core";
import { createPost } from "../redux/actions/PostActions.js";
import Error from "./Error.js";
const useStyles = makeStyles({
  formStyles: {
    display: "flex",
    flexDirection: "column",
    maxHeight: 1000,
    justifyContent: "space-between",
    marginTop:30
  },
});

const CreatePost = ({ location }) => {
  const {loading, error } = useSelector(
    (state) => state.postCreate
  );
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [postTitle, setPostTitle] = useState("");
  const [postDesc, setPostDesc] = useState("");
  const [highlighted, setHighlighted] = useState(false);

  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  const addStyles = () => ({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    textAlign: "center",
    width: "100%",
    border: "dotted",
    cursor: "pointer",
    borderColor: highlighted ? "green" : "black"
  });

  const submitHanler =async (e) => {
    e.preventDefault();
    dispatch(createPost({ postTitle, postDesc, postCategory: location,media:media }));
    setMedia(null);
    setMediaPreview(null)
    setHighlighted(false)
    setPostTitle("");
    setPostDesc("");
  };

  const titleInput = (e) => setPostTitle(e.target.value);
  const descInput = (e) => setPostDesc(e.target.value);
  const imgageInput=(e)=>{
    const {files}=e.target
    if (files && files.length > 0) {
      setMedia(files[0]);
      setHighlighted(true)
      setMediaPreview(URL.createObjectURL(files[0]));
    }
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Error error={error} /> 
      <form onSubmit={submitHanler} className={classes.formStyles}>
      <input
            ref={inputRef}
            onChange={imgageInput}
            name="media"
            style={{ display: "none" }}
            type="file"
            accept="image/*"
          />
        <div
          onClick={() => inputRef.current.click()}
          style={addStyles()}
          
        >
          
          {media === null ? (
            <h4>UPLOAD A IMAGE</h4>
          ) : (
            <img
              src={mediaPreview}
              alt="PostImage"
            />
          )} 
        </div>
        <TextField
          id='outlined-basic'
          label='Title'
          variant='outlined'
          required
          value={postTitle}
          onChange={titleInput}
        />
        <TextField
          id='outlined-multiline-static'
          label='Description'
          multiline
          rows={4}
          variant='outlined'
          value={postDesc}
          onChange={descInput}
          required
        />
        <Button
          disabled={loading}
          type='submit'
          variant='contained'
          color='primary'
        >
          {loading ? "loading" : "POST"}
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
