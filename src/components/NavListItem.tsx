import * as React from "react";
import { styled } from "@material-ui/core/styles";
import Image from "next/image";
import Link from "next/link";
import menu1 from "../../images/menu1.svg";
import menu2 from "../../images/menu2.svg";
import menu3 from "../../images/menu3.svg";
import menu4 from "../../images/menu4.svg";
import menu5 from "../../images/menu5.svg";
import menu6 from "../../images/menu6.svg";
import menu7 from "../../images/menu7.svg";
import menu8 from "../../images/menu8.svg";
import menu9 from "../../images/menu9.svg";
import menu10 from "../../images/menu10.svg";
import { useRouter } from "next/dist/client/router";

const CustomListItem = styled("li")({
  margin: "auto",
  marginBottom: "0.8rem",
  textAlign: "center",
  padding: "0.5rem",
  width: "80%",
  transition: "all 0.3s",
  "&:hover": {
    backgroundColor: "#7D48B1",
    borderRadius: "5px",
    cursor: "pointer",
  },
  "& svg": {
    color: "#f1f3f4",
  },
  "& p": {
    margin: "0",
    fontSize: "0.7rem",
    textAlign: "center",
    visibility: "hidden",
  },
  "&:hover p": {
    visibility: "visible",
  },
  "&.Active": {
    backgroundColor: "#7D48B1",
    borderRadius: "5px",
  },
  "&.Active p": {
    visibility: "visible",
  },
});

const NavListItem = () => {
  const { route } = useRouter();
  return (
    <>
      <CustomListItem className={route === "/" ? "Active" : ""}>
        <Link href="/">
          <div>
            <Image src={menu1}></Image>
            <p>Dashboard</p>
          </div>
        </Link>
      </CustomListItem>
      <CustomListItem className={route === "/table" ? "Active" : ""}>
        <Link href="/table">
          <div>
            <Image src={menu2}></Image>
            <p>Table</p>
          </div>
        </Link>
      </CustomListItem>
      <CustomListItem className={route === "/profile" ? "Active" : ""}>
        <Link href="/profile">
          <div>
            <Image src={menu3}></Image>
            <p>Profile</p>
          </div>
        </Link>
      </CustomListItem>
      <CustomListItem className={route === "/file" ? "Active" : ""}>
        <Link href="/file">
          <div>
            <Image src={menu4}></Image>
            <p>File</p>
          </div>
        </Link>
      </CustomListItem>
      <CustomListItem className={route === "/post" ? "Active" : ""}>
        <Link href="/post">
          <div>
            <Image src={menu5}></Image>
            <p>Post</p>
          </div>
        </Link>
      </CustomListItem>
      <CustomListItem className={route === "/manage" ? "Active" : ""}>
        <Link href="/manage">
          <div>
            <Image src={menu6}></Image>
            <p>Manage</p>
          </div>
        </Link>
      </CustomListItem>
      <CustomListItem className={route === "/user" ? "Active" : ""}>
        <Link href="/user">
          <div>
            <Image src={menu7}></Image>
            <p>User</p>
          </div>
        </Link>
      </CustomListItem>
      <CustomListItem className={route === "/weather" ? "Active" : ""}>
        <Link href="/weather">
          <div>
            <Image src={menu8}></Image>
            <p>Weather</p>
          </div>
        </Link>
      </CustomListItem>
      <CustomListItem className={route === "/selection" ? "Active" : ""}>
        <Link href="/selection">
          <div>
            <Image src={menu9}></Image>
            <p>Selection</p>
          </div>
        </Link>
      </CustomListItem>
      <CustomListItem className={route === "/record" ? "Active" : ""}>
        <Link href="/record">
          <div>
            <Image src={menu10}></Image>
            <p>Record</p>
          </div>
        </Link>
      </CustomListItem>
    </>
  );
};

export default NavListItem;
