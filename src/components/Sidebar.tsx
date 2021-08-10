import React from "react";
import { Drawer, List, Typography, Link } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import NavListItem from "./NavListItem";
import { drawerWidth } from "./Layout";

const Brand = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "center",
  margin: "1.4rem 0",
  "& a": {
    color: "#fff",
  },
  "& a:hover": {
    textDecoration: "none",
  },
});

const Sidebar = ({ open }: any) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#663399",
          color: "#fff",
        },
        "& .MuiDrawer-paper::-webkit-scrollbar": {
          width: "3px",
        },
        "& .MuiDrawer-paper::-webkit-scrollbar-thumb": {
          visibility: "hidden",
          background: "#ccc",
          borderRadius: "10px",
        },
        "& .MuiDrawer-paper:hover::-webkit-scrollbar-thumb": {
          visibility: "visible",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <List>
        <Brand>
          <Link href="/">GULL</Link>
        </Brand>
        <NavListItem></NavListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
