import React,{Fragment} from 'react'
import PostDisplay from '../components/PostDisplay'
import { useLocation } from "react-router-dom";

const FavouritePosts = () => {
    const location = useLocation();
    return (
        <Fragment>
            <PostDisplay keyword={location.pathname.split("/")[2]}/>  
        </Fragment>
    )
}

export default FavouritePosts
