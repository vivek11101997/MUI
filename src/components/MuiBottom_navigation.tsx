import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'
import  HomeIcon  from '@mui/icons-material/Home';
import  FavoriteIcon from '@mui/icons-material/Favorite'; 
import  PersonIcon  from '@mui/icons-material/Person';

const MuiBottom_navigation = () => {
   const[activeIcon,setActiveIcon]= useState(0);
  return (
    <BottomNavigation sx={{width:"100%",position:'absolute', bottom:0 }} showLabels value={activeIcon} onChange={(e,newvalue)=>setActiveIcon(newvalue)}>
        <BottomNavigationAction label="Home" icon={<HomeIcon/>} />
        <BottomNavigationAction label="Favorite" icon={<FavoriteIcon/>} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon/>} />
    </BottomNavigation>
    
  )
}

export default MuiBottom_navigation