import PermMediaIcon from "@mui/icons-material/PermMedia";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EjectIcon from "@mui/icons-material/Eject";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import Options from "./Options";
import { NavLink } from "react-router";
function SideBar({ optionsForSideBar, className, ...attributes }) {
  const [panelClosed, setPanelClosed] = useState(false);

  const optionsSettings = ["Profile", "preference", "theme"];

  // for setting state
  const [showSetting, setShowSetting] = useState(false);

  //   nav colapse function
  const colapseNav = () => {
    setPanelClosed(!panelClosed);
  };
  const handleSettingButton = () => {
    setShowSetting(!showSetting);
  };
  return (
    <div className={`w-fit bg-white shadow-md flex ${className}`}>
      {/* all options */}
      <div
        className={`flex flex-col justify-between items-start ${
          !panelClosed ? "p-1" : "p-1"
        }`}
      >
        {/* Top icons */}
        <div className="flex items-start flex-col">
          {/* All users */}
          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: "none",
              marginRight: "15px",
            })}
          >
            <div className="flex p-4">
              <DashboardIcon />
              {panelClosed && (
                <h1 className="ml-2 w-fit text-nowrap">Dashboard</h1>
              )}
            </div>
          </NavLink>

          {/* Users */}
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
              {panelClosed && <h1 className="ml-2 w-fit text-nowrap">Users</h1>}
            </div>
          </NavLink>
        </div>

        {/* Bottom icons */}
        <div className="flex justify-start items-center w-full flex-col">
          {/* settings */}
          {showSetting && (
            <Options onClick={handleSettingButton} options={optionsSettings} />
          )}
          {/* <NavLink
            to={"/settings"}
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: "none",
              marginRight: "15px",
            })}
          > */}
            <div className="flex p-4" onClick={handleSettingButton}>
              <SettingsIcon />
              {panelClosed && (
                <h1 className="ml-2 w-fit text-nowrap">Settings</h1>
              )}
            </div>
          {/* </NavLink> */}
        </div>
      </div>

      {/* colapse button */}
      <div className="flex h-full items-center">
        <EjectIcon
          onClick={colapseNav}
          color="info"
          className={`m-2 ${panelClosed ? "-rotate-90" : "rotate-90"}`}
        />
      </div>
    </div>
  );
}

export default SideBar;
