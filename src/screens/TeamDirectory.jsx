import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import CardComp from "../components/cardComp";
import axios from "axios";

const TeamDirectory = () => {
  const [usersData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098")
      .then((response) => {
        console.log("sadfads", response);
        setUserData(response?.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1 style={{ color: "gray" }}>Admin</h1>
      <Grid container spacing={2}>
        {usersData?.map((item) =>
          item?.role === "admin" ? (
            // console.log("item",item)

            <Grid item xs={12} md={3}>
              {/* <Typography>{item}</Typography> */}
              <CardComp usersData={item} />
            </Grid>
          ) : null
        )}
      </Grid>

      <h1 style={{ color: "gray", marginTop: "6%" }}>Members</h1>
      <Grid container spacing={2}>
        {usersData?.map((item) =>
          item?.role === "member" ? (
            // console.log("item",item)

            <Grid item xs={12} md={3}>
              {/* <Typography>{item}</Typography> */}
              <CardComp usersData={item} />
            </Grid>
          ) : null
        )}
      </Grid>
    </>
  );
};

export default TeamDirectory;
