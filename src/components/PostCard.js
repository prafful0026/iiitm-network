import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { CardMedia } from "@material-ui/core";
import CalculateTime from "../utils/calculateTime";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../redux/actions/PostActions";
import { Badge } from "@material-ui/core";
import { likePost } from "../redux/actions/PostActions";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
  deleteIcon: {
    color: "red",
    width: "10%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function PostCard({
  postTitle,
  postDesc,
  userName,
  userProfilePic,
  createdAt,
  picUrl,
  userId,
  postId,
  likes,
}) {
  const dispatch = useDispatch();
  const loginInfo = useSelector((state) => state.userLogin);
  const { userInfo } = loginInfo;

  // const deleteState = useSelector((state) => state.postDelete);
  // const { success:deleteSuccess,loading:deleteLoading,error:deleteError } = deleteState;

  const classes = useStyles();

  const handleDelete = () => {
    dispatch(deletePost(postId));
  };
  const likePostHandler = () => {
    dispatch(likePost(postId));
  };

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <CardHeader
          avatar={
            <Avatar
              src={userProfilePic}
              aria-label='recipe'
              className={classes.avatar}
            />
          }
          title={userName.toUpperCase()}
          subheader={<CalculateTime createdAt={createdAt} />}
        />
        {(userInfo.userId === userId || userInfo.userRole === "root") && (
          <IconButton className={classes.deleteIcon} onClick={handleDelete}>
            <DeleteForeverIcon color='red' />
          </IconButton>
        )}
      </div>
      <CardMedia
        // className={classes.media}
        image={picUrl}
        title='Paella dish'
      >
        <img style={{ height: "100%", width: "100%" }} src={picUrl} />
      </CardMedia>
      <CardContent>
        <Typography variant='h6'>{postTitle}</Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {postDesc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites' onClick={likePostHandler}>
          <Badge badgeContent={likes.length} color='secondary'>
            {likes.find((like) => like.user === userInfo.userId) ? (
              <React.Fragment>
                <FavoriteIcon color='primary' />
              </React.Fragment>
            ) : (
              <FavoriteIcon />
            )}
          </Badge>
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
