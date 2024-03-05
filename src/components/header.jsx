import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Tab, Tabs, Typography, useMediaQuery, useTheme } from "@mui/material";

import DrawerComp from "./DrawerComp";
import SearchBar from "./searchComp";

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const [selectedMenu, setSelectedMenu] = useState();
  const menuItems = [
    {
      value: (
        <h1>Team</h1>
        //   <Image
        //     src={logo}
        //     alt="logo"
        //     width={200}
        //     style={{ objectFit: "contain" }}
        //   />
      ),
    },
    {
      value: (
        // <h2>search</h2>
        <SearchBar />
        // <Link href="/SignIn_SignUp/SignIn">
        //   <ButtonField
        //     name="Login"
        //     variant="contained"
        //     esx={{ marginLeft: "auto" }}
        //     onClick={() => console.log("Login Button Clicked")}
        //   />
        // </Link>
      ),
    },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          // backgroundColor: "white",
          color: "white",
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <DrawerComp menuItems={menuItems} />
              <h1>Team</h1>
            </>
          ) : (
            <>
              <h1>Team</h1>
              <SearchBar
                sx={{ marginLeft: "auto" }}
                placeholder="Search"
                onSearch={(e) => console.log(e)}
              />
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
