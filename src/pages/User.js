import React, { useState, useEffect, useMemo } from "react";
import Card from "../components/Card";
import { useParams } from "react-router";
import BASE_URL from "../utils/baseUrl";
import axios from "axios";
import { useSelector } from "react-redux";
import PageHeader from "../components/PageHeader";
import { TextField } from "@material-ui/core";

const Student = () => {
  const params = useParams();
  const [users, setUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState([]);
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
    setSearchUsers(
      users.filter((user) => {
        const searchTerm =
          user.rollNumber || user.designation || user.currentCompany;
        return (
          user.user?.name?.toLowerCase().includes(input?.toLowerCase()) ||
          searchTerm.includes(input?.toLowerCase())
        );
      })
    );
  };
  const { userInfo } = useSelector((state) => state.userLogin);
  const Axios = useMemo(() => {
    return axios.create({
      baseURL: `${BASE_URL}/api/user/${params.userType}`,
      headers: { Authorization: userInfo.token },
    });
  }, [params.userType, userInfo.token]);
  useEffect(() => {
    const getUsersData = async () => {
      const { data } = await Axios.get("/");
      setUsers(data);
    };
    getUsersData();
  }, [Axios]);

  return (
    <div>
      <PageHeader title={`${params.userType}s`} />
      <div style={{ marginLeft: "100px" }}>
        <TextField
          id='outlined-basic'
          label='Search'
          variant='outlined'
          value={input}
          onChange={onInputChange}
          required
          autoComplete={false}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "space-evenly",
        }}
      >
        {input === ""
          ? users &&
            users.map((user) => (
              <div style={{ margin: "10px" }}>
                <Card user={user} />
              </div>
            ))
          : searchUsers &&
            searchUsers.map((user) => (
              <div style={{ margin: "10px" }}>
                <Card user={user} />
              </div>
            ))}
        {input === ""
          ? users &&
            users.map((user) => (
              <div style={{ margin: "10px" }}>
                <Card user={user} />
              </div>
            ))
          : searchUsers &&
            searchUsers.map((user) => (
              <div style={{ margin: "10px" }}>
                <Card user={user} />
              </div>
            ))}
        {input === ""
          ? users &&
            users.map((user) => (
              <div style={{ margin: "10px" }}>
                <Card user={user} />
              </div>
            ))
          : searchUsers &&
            searchUsers.map((user) => (
              <div style={{ margin: "10px" }}>
                <Card user={user} />
              </div>
            ))}
        {input === ""
          ? users &&
            users.map((user) => (
              <div style={{ margin: "10px" }}>
                <Card user={user} />
              </div>
            ))
          : searchUsers &&
            searchUsers.map((user) => (
              <div style={{ margin: "10px" }}>
                <Card user={user} />
              </div>
            ))}
        {input === ""
          ? users &&
            users.map((user) => (
              <div style={{ margin: "10px" }}>
                <Card user={user} />
              </div>
            ))
          : searchUsers &&
            searchUsers.map((user) => (
              <div style={{ margin: "10px" }}>
                <Card user={user} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Student;
