import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Typography, TextField, Button, makeStyles } from "@material-ui/core";
import {createPost} from "../redux/actions/PostActions.js"

const useStyles = makeStyles({
  formStyles:{
      display:"flex",
      flexDirection:"column",
   height:250,
   justifyContent:"space-between"
  }
});

const CreatePost = ({setSuccess,success:postSuccess}) => {
  const {success,loading,error}=useSelector(state=>state.postCreate)
  const dispatch=useDispatch()
    const [postTitle,setPostTitle]=useState("")
    const [postDesc,setPostDesc]=useState("")
  const submitHanler = (e) => {
    e.preventDefault();
   dispatch(createPost({postTitle,postDesc,postCategory:"placement"}))
   setPostTitle("")
   setPostDesc("")
  };
  useEffect(() => {
     if(success)
     setSuccess(!postSuccess)
  }, [success])
  const titleInput=(e)=>setPostTitle(e.target.value)
  const descInput=(e)=>setPostDesc(e.target.value)
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Typography variant='h4'>Create Post</Typography>
        <form onSubmit={submitHanler} className={classes.formStyles} >
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
        <Button type='submit' variant='contained' color='primary'>
          Post
        </Button>
        </form>
     
    </div>
  );
};

export default CreatePost;
