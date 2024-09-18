import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GroupsRoundedIcon from '@mui/icons-material/Groups';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import "../css/HomePage.css"


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
    <div className='header'>
    </div>
    
    <div className='NavigationBar'>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className='BottomNavigation'
      >
        <BottomNavigationAction label="Home" icon={<HomeRoundedIcon/>} sx={{ color: 'grey' }} />
        <BottomNavigationAction label="Friends" icon={<PersonOutlineOutlinedIcon/>} sx={{ color: 'grey' }}/>
        <BottomNavigationAction label="Add" icon={<AddCircleIcon className='Add'sx={{ fontSize: 60 }}/>} sx={{ color: 'grey',height: 20 }}/>
        <BottomNavigationAction label="Groups" icon={<GroupsRoundedIcon/>} sx={{ color: 'grey' }}/>
        <BottomNavigationAction label="Updates" icon={<NotificationsOutlinedIcon/>} sx={{ color: 'grey' }}/>
      </BottomNavigation>
    </div>
    <div className='backgroundColor'>
    </div>
    </div>
  );
}
