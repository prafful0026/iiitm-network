import React from "react";
import { Divider, Avatar, Grid, Paper, makeStyles } from "@material-ui/core";
import CalculateTime from "../utils/calculateTime";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CommentCard = ({ comment:{user,...commentData} }) => {
  const {
    name,
    profilePicUrl,
    _id
  } = user;
  const {text,date} = commentData
  return (
    <div style={{ padding: 14, }} className='App'>
      <Grid container wrap='nowrap' spacing={2}>
        <Grid item>
          <Avatar alt='Remy Sharp' src={profilePicUrl} />
        </Grid>
        <Grid justifyContent='left' item xs zeroMinWidth>
          <Link style={{textDecoration:"none"}} to={`/user/${_id}`}>
            <h4 style={{ margin: 0, textAlign: "left",color:"black" ,textDecoration:"none"}}>
              {name.toUpperCase()}
            </h4>
          </Link>
          <CalculateTime createdAt={date} />
          <p style={{ textAlign: "left" }}>
              {text}
          </p>
          <p style={{ textAlign: "left", color: "gray" }}>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
export default CommentCard;
