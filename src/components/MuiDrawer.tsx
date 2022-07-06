import { Drawer, Box,Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'


const MuiDrawer = () => {
    const [isdrawerOpen,setIsDrawerOpen]=useState(false);
  return (
    <>
    <IconButton onClick={()=>setIsDrawerOpen(true)} size="large" edge="start" color="inherit">
        <MenuIcon/>
    </IconButton>
        <Drawer anchor='left' onClose={()=>setIsDrawerOpen(false)} open={isdrawerOpen}>
            <Box p={2} width="250px" textAlign="center" role="presentation">
                <Typography variant='h6' component="div" >Side Panel</Typography>
            </Box>
        </Drawer>
        </>

  )
}

export default MuiDrawer