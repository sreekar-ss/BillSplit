import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import GroupsRoundedIcon from "@mui/icons-material/Groups";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "../css/HomePage.css";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="navigationBar">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="bottomNavigation"
      >
        <BottomNavigationAction
          className={`nav-item ${value === 0 ? "active" : ""}`}
          label="Home"
          icon={<HomeRoundedIcon />}
        />
        <BottomNavigationAction
          className={`nav-item ${value === 1 ? "active" : ""}`}
          label="Friends"
          icon={<PersonOutlineOutlinedIcon />}
        />
        <BottomNavigationAction
          className={`nav-item ${value === 2 ? "active" : ""}`}
          label="Add"
          icon={<AddCircleIcon className="addIcon" />}
        />
        <BottomNavigationAction
          className={`nav-item ${value === 3 ? "active" : ""}`}
          label="Groups"
          icon={<GroupsRoundedIcon />}
        />
        <BottomNavigationAction
          className={`nav-item ${value === 4 ? "active" : ""}`}
          label="Updates"
          icon={<NotificationsOutlinedIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
