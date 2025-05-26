import React from "react";
import DataTable from "../Components/DataTable";
import { Link, Outlet, Route, Routes } from "react-router";
import Button from "../Components/Button";
import { useContext } from "react";
import { LoginContext, LoginProvider } from "../Data/Contexts";
import NavbarTop from "../Components/NavbarTop";
import SideBar from "../Components/SideBar";
import AllUsers from "../Layouts/AllUsers";
import AllPosts from "../Layouts/AllPosts";
import { patch } from "@mui/material";
// import Button from "@mui/material/Button";

export default function Home() {
  const { userData, setLoginCheck } = useContext(LoginContext);

  const optionsForSideBar = [
    { title: "All Users", path: "/allUsers", icon: "PeopleIcon" },
    { title: "Posts", path: "/allPosts", icon: "PermMediaIcon" },
  ];

  return (
    <div className=" w-screen h-screen flex-col gap-8 bg-blue-100 overflow-hidden">
      {/* Navigation Bar */}
      <div>
        <NavbarTop />
      </div>

      {/* down layout */}
      <div className="flex h-full">
        {/* side bar */}
        <div className="w-fit h-full"></div>
        <SideBar className="h-4/5" options={optionsForSideBar} />
        {/* main panel */}
        <div className=" flex justify-start items-start flex-col m-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
