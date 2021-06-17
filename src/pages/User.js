import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router";
import BASE_URL from "../utils/baseUrl";
import axios from "axios";
import { useSelector } from "react-redux";
const Student = () => {
  const params = useParams();
  const [users, setUsers] = useState([]);
  const { userInfo } = useSelector((state) => state.userLogin);
  const Axios = axios.create({
    baseURL: `${BASE_URL}/api/user/${params.userType}`,
    headers: { Authorization: userInfo.token },
  });
  useEffect(async () => {
    const { data } = await Axios.get("/");
    setUsers(data);
    console.log(data);
  }, [params]);
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          alignItems:"center",
          alignContent:"center",
          justifyContent:"space-evenly"
        }}
      >
        {users && users.map((user) => <div style={{margin:"10px"}}><Card user={user} /></div>)}
        {users && users.map((user) => <div style={{margin:"10px"}}><Card user={user} /></div>)}
        {users && users.map((user) => <div style={{margin:"10px"}}><Card user={user} /></div>)}
        {users && users.map((user) => <div style={{margin:"10px"}}><Card user={user} /></div>)}
        {users && users.map((user) => <div style={{margin:"10px"}}><Card user={user} /></div>)}
        {users && users.map((user) => <div style={{margin:"10px"}}><Card user={user} /></div>)}
        {users && users.map((user) => <div style={{margin:"10px"}}><Card user={user} /></div>)}
        {users && users.map((user) => <div style={{margin:"10px"}}><Card user={user} /></div>)}
        {users && users.map((user) => <div style={{margin:"10px"}}><Card user={user} /></div>)}
        {users && users.map((user) => <div style={{margin:"10px"}}><Card user={user} /></div>)}
        {users && users.map((user) => <div style={{margin:"10px"}}><Card user={user} /></div>)}
        {users && users.map((user) => <div style={{margin:"10px"}}><Card user={user} /></div>)}
        {users && users.map((user) => <div style={{margin:"10px"}}><Card user={user} /></div>)}
        {users && users.map((user) => <div style={{margin:"10px"}}><Card user={user} /></div>)}
        {users && users.map((user) => <div style={{margin:"10px"}}><Card user={user} /></div>)}
      </div>
    </div>
  );
};

export default Student;
