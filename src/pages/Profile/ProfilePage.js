import React, { useState, useEffect,Fragment } from "react";
import BASE_URL from "../../utils/baseUrl";
import axios from "axios";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import ProfileCard from "../../components/ProfileCard";
import PageHeader from '../../components/PageHeader'
import { useLocation,useParams } from "react-router";
const ProfilePage = () => {
    const {userId}=useParams()
    const location=useLocation()
    const { userInfo } = useSelector((state) => state.userLogin);
    const [profile,setProfile]=useState()
    const Axios = axios.create({
        baseURL: `${BASE_URL}/api/user`,
        headers: { Authorization: userInfo.token },
      });
      useEffect(async () => {
        const toBeSent=location.pathname==="/"?userInfo.userId:userId
        const { data } = await Axios.get(`/profile/${toBeSent}`);
        setProfile(data)
        // console.log(data);
      }, []);
    return (
        <Fragment>
            <PageHeader title="profile"/>
            {profile&&<ProfileCard user={profile}/>}
        </Fragment>
    )
}

export default ProfilePage
