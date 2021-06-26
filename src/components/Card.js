import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import WorkIcon from "@material-ui/icons/Work";
// import image from "./image-1619519466677.png"

const useStyles = makeStyles({
  root: {
    width: 400,
    minHeight: 250,
    maxHeight: 280,
  },
  header: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  media: {
    width: "50px",
    height: "50px",
  },
  itemContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  item: {
    display: "flex",
    alignItems: "center",
    margin: "10px",
  },
  socials: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    margin: "10px",
    justifyContent: "space-evenly",
  },

  icon: {
    marginRight: "10px",
  },
});

export default function ProfileCard({ user }) {
  const classes = useStyles();
  const subHeading = user.rollNumber || user.designation || user.currentCompany;
  const {
    name,
    profilePicUrl: image,
    role,
    _id: userId,
    email,
    mobileNum,
  } = user.user;
  return (
    <Card className={classes.root} elevation={2}>
      <div className={classes.header}>
        <Avatar className={classes.media} src={image} />
      <Link style={{textDecoration:"none"}} to={`/user/${userId}`}>
        <CardHeader title={name} subheader={subHeading} />
      </Link>
        <IconButton aria-label='chat'>
          <Link style={{ textDecoration: "none" }} to={`/chat/${userId}`}>
            <ChatIcon />
          </Link>
        </IconButton>
      </div>
      <div className={classes.itemContainer}>
        {user.jobRole && (
          <div className={classes.item}>
            <WorkIcon className={classes.icon} />
            {user.jobRole}
          </div>
        )}
        {user.honour && (
          <div className={classes.item}>
            <AssignmentIndIcon className={classes.icon} />
            {user.honour}
          </div>
        )}
        <div className={classes.item}>
          <EmailIcon className={classes.icon} />
          {email}
        </div>
        <div className={classes.item}>
          <PhoneIcon className={classes.icon} />
          {mobileNum}
        </div>

        <div className={classes.item}>
          <GitHubIcon className={classes.icon} />
          <LinkedInIcon className={classes.icon} />
          <LanguageIcon className={classes.icon} />
        </div>
      </div>
    </Card>
  );
}
