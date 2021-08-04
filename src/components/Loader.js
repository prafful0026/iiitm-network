import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    justifyContent: "center",
  },
}));

export default function Loader({ loading }) {
  const classes = useStyles();

  return (
    <>
      {loading && (
          <div style={{width:"100%"}}>
<div className={classes.root}>
          <CircularProgress color='secondary' />
        </div>
          </div>
        
      )}
    </>
  );
}
