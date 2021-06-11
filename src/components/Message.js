import React from 'react'
import { Paper,Avatar } from '@material-ui/core'

const Message = ({text,time,profilePicUrl}) => {
    return (
        <div style={{height:"20px"}}>
            <Paper>
                {text}
                </Paper>
        </div>
    )
}

export default Message
