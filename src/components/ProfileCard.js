import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import WorkIcon from "@material-ui/icons/Work";

const useStyles = makeStyles({
  root: {
    width: "600px",
    minWidth: "450px",
    display: "flex",
    flexDirection:"column",
  },
  header: {
  },
  media: {
    width: "100%",
    minWidth:"350px",  
    height: "350px",
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
    width:"100%"
  },
  socials: {
    // width: "100%",
    display: "flex",
    alignItems: "center",
    margin: "10px",
    justifyContent: "space-evenly",
  },
  button:{
      width:"100%"
  },
  icon: {
    marginRight: "10px",
  },
  info:{
      display:"flex",
      flexDirection:"column",
  },
  link:{
      textDecoration:"none",
  }
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
      <img className={classes.media} src={image} />
      <div className={classes.info}>
        <div className={classes.header}>
          <CardHeader title={name.toUpperCase()} subheader={subHeading} />
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
          <div >
        <Link style={{ textDecoration: 'none' }} to={`/chat/${userId}`}>
         <Button className={classes.button} variant="contained" color="secondary" >
           {`Chat`}
          </Button>
          </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
