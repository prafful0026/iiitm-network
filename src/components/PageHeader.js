import React from "react";
import BackButton from "./BackButton";
import { makeStyles } from "@material-ui/core";

const createStyles = makeStyles({
  root: {
    display: "flex",
    width:"100%",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth:"1px 0px",
    marginBottom:"10px",
    borderColor:"black",
    color:"#3F51B5",
    borderColor:"3F51B5  "
  },
});
const PageHeader = ({ title }) => {
    const styles=createStyles()
  return (
    <div className={styles.root}>
      <h3>{title.toUpperCase()}</h3>
      <BackButton />
    </div>
  );
};

export default PageHeader;
