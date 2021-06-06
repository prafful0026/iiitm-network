import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { CardMedia } from '@material-ui/core';
import CalculateTime from "../utils/calculateTime";
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop:30
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PostCard({postTitle,postDesc,userName,userProfilePic,createdAt,picUrl}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src={userProfilePic} aria-label="recipe" className={classes.avatar} />
        }
        title={userName.toUpperCase()}
        subheader={ <CalculateTime createdAt={createdAt}/>}
      />
         <CardMedia
        // className={classes.media}
        image={picUrl}
        title="Paella dish"
      ><img style={{height:"100%",width:"100%"}} src={picUrl} />
        </CardMedia>
      <CardContent>
      <Typography variant="h6" >
       {postTitle}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
       {postDesc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
