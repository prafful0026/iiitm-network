import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import { Badge } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { USER_LOGOUT } from "../redux/constants/UserConstants";
import { useDispatch } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBarRoot:{
  display:"flex",
  alignItems:"center"

  },
  appTitle: { flexGrow: 1 },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  chat: {
    color: "white",
    marginRight:20
  },
  logout:{
    color:"white"
  }
}));

function NavBar({ handleDrawerToggle }) {
  const dispatch=useDispatch()
  const classes = useStyles();
  const theme = useTheme();
  const logoutHandler=()=>{
     localStorage.removeItem("userInfo")
     dispatch({type:USER_LOGOUT})
  }
  return (
    <div className={classes.appBarRoot}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h5' noWrap className={classes.appTitle}>
            IIITM NETWORK
          </Typography>
          <IconButton onClick={logoutHandler}>
            <ExitToAppIcon className={classes.logout} />
          </IconButton>
          <IconButton  className={classes.chat}>
            <Badge badgeContent={4} color='secondary'>
              <ChatIcon />
            </Badge>
          </IconButton>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
