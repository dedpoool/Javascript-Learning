import PeopleIcon from "@mui/icons-material/People";
import EjectIcon from "@mui/icons-material/Eject";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { useState } from "react";
import { NavLink } from "react-router";
function SideBar({ optionsForSideBar }) {
  const [panelClosed, setPanelClosed] = useState(false);

  //   nav colapse function
  const colapseNav = () => {
    setPanelClosed(!panelClosed);
  };
  return (
    <div className="w-fit bg-white shadow-md flex">
      {/* all options */}
      <div className={`flex flex-col ${!panelClosed ? "p-1" : "p-4"}`}>
        {/* logic to populate options */}

        {/* All users */}
        <NavLink
          to="/allUsers"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: "none",
            marginRight: "15px",
          })}
        >
          <div className="flex p-4">
            <PeopleIcon />
            {panelClosed && (
              <h1 className="ml-2 w-fit text-nowrap">All Users</h1>
            )}
          </div>
        </NavLink>

        {/* Posts */}
        <NavLink
          to="/allPosts"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: "none",
            marginRight: "15px",
          })}
        >
          <div className="flex p-4">
            <PermMediaIcon />
            {panelClosed && <h1 className="ml-2 w-fit text-nowrap">Posts</h1>}
          </div>
        </NavLink>
      </div>

      {/* colapse button */}
      <div className="flex h-full items-center">
        <EjectIcon
          onClick={colapseNav}
          color="info"
          className={`rotate-90 ${!panelClosed ? "m-1" : "m-4"} ${
            panelClosed ? "-rotate-90" : "rotate-90"
          }`}
        />
      </div>
    </div>
  );
}

export default SideBar;
