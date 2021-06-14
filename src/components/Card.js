import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import { Link } from "react-router-dom";
// import image from "./image-1619519466677.png"

const useStyles = makeStyles({
  root: {
    maxWidth: 300
  },
  media: {
    height: 300,
    paddingTop: "56.25%", 
  },
});

export default function ProfileCard({ user }) {
  const classes = useStyles();
  const subHeading=user.rollNumber||user.designation||user.currentCompany
  const {name,profilePicUrl:image,role,_id:userId}=user.user
  return (
    <Card className={classes.root} elevation={5}>
      <CardHeader title={name.toUpperCase()} subheader={subHeading.toUpperCase()} />
      <CardMedia
        className={classes.media}
        image={image}
      />
      <CardActions >
        <IconButton aria-label='chat' >
          <Link style={{textDecoration:'none'}}  to={`/chat/${userId}`}>
          <ChatIcon  />
          </Link>
        </IconButton>
        <IconButton aria-label='profile'>
          <PersonIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
