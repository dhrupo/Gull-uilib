import * as React from "react";
import {
  Box,
  Link,
  Toolbar,
  OutlinedInput,
  IconButton,
  InputAdornment,
  FormControl,
  Popover,
} from "@material-ui/core";
import MuiAppBar from "@material-ui/core/AppBar";
import { styled } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Image from "next/image";
import face from "../../images/face.png";
import nav1 from "../../images/nav1.svg";
import nav2 from "../../images/nav2.svg";
import search from "../../images/search.svg";

const AppBar = styled(MuiAppBar)({
  backgroundColor: "#F1F3F4",
  boxShadow: "none",
  position: "static",
});

const IconSearch = styled("div")({
  width: "50%",
});

const SearchFormControl = styled(FormControl)({
  width: "90%",
});

const SearchInput = styled(OutlinedInput)({
  borderRadius: "20px",
  backgroundColor: "#fff",
  "& input": {
    padding: "0.6rem",
  },
  "& fieldset": {
    borderWidth: "0",
  },
  "& input::placeholder": {
    color: "#949494",
  },
});

const Profile = styled("div")({
  position: "relative",
  width: "50%",
  textAlign: "end",
  "& a": {
    position: "relative",
    padding: "0 1rem",
  },
});

const FaceStyle = styled("span")({
  paddingLeft: "1rem",
  verticalAlign: "middle",
  "& img": {
    borderRadius: "10px",
  },
  "& img:hover": {
    cursor: "pointer",
  },
});

const NotificationCount = styled("span")({
  textAlign: "center",
  position: "absolute",
  backgroundColor: "#663399",
  borderRadius: "50%",
  width: "0.9rem",
  height: "0.9rem",
  fontSize: "0.6rem",
  color: "#fff",
  top: "-1rem",
  right: "0.4rem",
});

const NotificationList = styled("ul")({
  listStyle: "none",
  padding: "0 1rem",
  "& li": {
    borderBottom: "1px dotted #c4c4c4",
    fontSize: "14px",
    marginBottom: "0.5rem",
    padding: "0.5rem",
  },
});

const Nav = ({ handleDrawerOpen }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLAnchorElement | null>(
    null
  );

  const handleNotification = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const notify = Boolean(anchorEl);

  return (
    <Box>
      <AppBar>
        <Toolbar sx={{ marginTop: "1rem" }}>
          <IconSearch>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 3, color: "#663399" }}
            >
              <MenuIcon />
            </IconButton>
            <SearchFormControl>
              <SearchInput
                placeholder="Search"
                startAdornment={
                  <InputAdornment position="start">
                    <Image src={search}></Image>
                  </InputAdornment>
                }
              />
            </SearchFormControl>
          </IconSearch>
          <Profile>
            <Link href="#">
              <Image src={nav1}></Image>
            </Link>
            <Link onClick={handleNotification} href="">
              <NotificationCount>3</NotificationCount>
              <Image src={nav2}></Image>
            </Link>
            <Popover
              open={notify}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <NotificationList>
                <li>user1 messaged you</li>
                <li>user1 messaged you</li>
                <li>user1 messaged you</li>
              </NotificationList>
            </Popover>
            <FaceStyle>
              <Image src={face}></Image>
            </FaceStyle>
          </Profile>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
