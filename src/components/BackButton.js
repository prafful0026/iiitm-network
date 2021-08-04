import React from 'react'
import { Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from "react-router-dom";

const BackButton = () => {
  const history=useHistory()

    return (
        <div>
         <Button
        variant="contained"
        color="primary"
        onClick={()=>history.goBack()}
        startIcon={<ArrowBackIcon />}
      >
        Go Back
        </Button>
        </div>
    )
}

export default BackButton
