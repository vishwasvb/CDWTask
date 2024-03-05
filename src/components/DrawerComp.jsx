import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
// import Image from "next/image";
// import logo from "../../public/assets/images/final _illustrator_logo.jpg";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";

const DrawerComp = ({ menuItems }) => {
  console.log("menuItems", menuItems.value);
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Divider />
        <List>
          {menuItems?.map((item) => (
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>{item.value}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        aria-label="open drawer"
        edge="start"
        sx={{ mr: 2, display: { lg: "none" } }}
      >
        <MenuRoundedIcon style={{ color: "white" }} />
      </IconButton>
    </>
  );
};

export default DrawerComp;
