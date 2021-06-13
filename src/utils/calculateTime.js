import moment from "moment";
import Moment from "react-moment";
import React from "react";

const calculateTime = ({ createdAt }) => {
  const today = moment(Date.now());
  const postDate = moment(createdAt);
  const diffInHours = today.diff(postDate, "hours");

  // if (diffInHours <= 24) {
  //   return (
  //     <React.Fragment>
  //       Today <Moment format='hh:mm A'>{createdAt}</Moment>
  //     </React.Fragment>
  //   );
  // } else if (diffInHours > 24 && diffInHours <= 36) {
  //   return (
  //     <React.Fragment>
  //       Yesterday <Moment format='hh:mm A'>{createdAt}</Moment>
  //     </React.Fragment>
  //   );
  // } else if (diffInHours > 36) {
    return (
      <React.Fragment>
        <Moment format='DD/MM/YYYY hh:mm A'>{createdAt}</Moment>
      </React.Fragment>
    );
  // }
};

export default calculateTime;
