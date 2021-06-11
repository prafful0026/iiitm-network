import React from 'react'
import { makeStyles,Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
const createStyles=makeStyles({
    root:{
        height:"70px",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        padding:"5px",
        borderStyle:"solid",
        borderBottom:0,
        borderLeft:0,
        borderRight:0,
        borderColor:"blue",
        backgroundColor:"white"
    },
    avatar:{
        marginRight:"10px"
    }

})

const ChatBanner = ({name,profilePicUrl,userId}) => {
    const classes=createStyles()
    return (
        <div className={classes.root}>
            <Avatar alt='Remy Sharp' src={profilePicUrl} className={classes.avatar} />
            {/* <Link to={`/user/${userId}`}> */}
              <h4 style={{ margin: 0, textAlign: "left" }}>
                {name.toUpperCase()}
              </h4>
            {/* </Link> */}
        </div>
    )
}

export default ChatBanner
