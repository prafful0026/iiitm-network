import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { useParams } from "react-router";
import BASE_URL from "../utils/baseUrl";
import axios from "axios";
import { useSelector } from "react-redux";
import PageHeader from "../components/PageHeader";
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
      <PageHeader title={`${params.userType}s`}/>
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
