import React, { useState, useEffect, Fragment, useMemo } from "react";
import BASE_URL from "../../utils/baseUrl";
import axios from "axios";
import { useSelector } from "react-redux";
import ProfileCard from "../../components/ProfileCard";
import PageHeader from "../../components/PageHeader";
import { useLocation, useParams } from "react-router";
import PostDisplay from "../../components/PostDisplay";
const ProfilePage = () => {
  const { userId } = useParams();
  const location = useLocation();
  const { userInfo } = useSelector((state) => state.userLogin);
  const [profile, setProfile] = useState();
  const Axios1 = useMemo(() => {
    return axios.create({
      baseURL: `${BASE_URL}/api/user`,
      headers: { Authorization: userInfo.token },
    });
  }, [userInfo.token]);
  useEffect(() => {
    const getProfileData = async () => {
      const toBeSent = location.pathname === "/" ? userInfo.userId : userId;
      const { data } = await Axios1.get(`/profile/${toBeSent}`);
      setProfile(data);
    };
    getProfileData();
  }, [Axios1, location.pathname, userId, userInfo.userId]);
  return (
    <Fragment>
      <PageHeader title='profile' />
      {profile && (
        <Fragment>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <div style={{ maxWidth: "700px", height: "600px" }}>
              {profile && <ProfileCard user={profile} />}
            </div>
            <div style={{ minWidth: "400px", maxWidth: "800px" }}>
              <h3>{`RECENT POSTS BY ${
                location.pathname === "/"
                  ? "YOU"
                  : profile.user.name.toUpperCase()
              }`}</h3>
              <PostDisplay
                keyword={location.pathname === "/" ? userInfo.userId : userId}
                isUserById={true}
              />
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProfilePage;
