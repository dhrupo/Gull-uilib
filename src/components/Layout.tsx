import * as React from "react";
import { Box, Grid } from "@material-ui/core";
import { ThemeProvider, styled } from "@material-ui/core/styles";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import theme from "../theme";

export const drawerWidth = "8%";

export interface MainContent {
  open?: boolean;
}

const Main = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "open",
})<MainContent>(({ theme, open }) => ({
  backgroundColor: "#F1F3F4",
  boxShadow: "none",
  marginLeft: `-${drawerWidth}`,
  position: "static",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: `0`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Content = styled("div")({
  padding: "20px 30px 30px 30px",
});

const Layout = ({ children }: any) => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} sx={{ height: "100vh" }}>
          <Grid item xs={3} sm={2} md={1}>
            <Sidebar open={open}></Sidebar>
          </Grid>
          <Grid item xs={9} sm={10} md={11}>
            <Main open={open}>
              <Nav handleDrawerOpen={handleDrawerOpen}></Nav>
              <Content>{children}</Content>
            </Main>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
