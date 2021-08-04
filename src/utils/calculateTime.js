import Moment from "react-moment";
import React from "react";

const calculateTime = ({ createdAt }) => {
    return (
      <React.Fragment>
        <Moment format='DD/MM/YYYY hh:mm A'>{createdAt}</Moment>
      </React.Fragment>
    );
  // }
};

export default calculateTime;
