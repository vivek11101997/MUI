import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CatchingPokemon from "@mui/icons-material/CatchingPokemon";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";

const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handalClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handalClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }} component="div">
          POKEMON
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Feature</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
          <Button
            color="inherit"
            id="r_btn"
            onClick={handalClick}
            endIcon={<KeyboardArrowDown />}
          >
            Resources
          </Button>
        </Stack>
        <Menu id="r_menu" anchorEl={anchorEl} open={open} 
        anchorOrigin={{vertical:'bottom',horizontal:'right'}}
        transformOrigin={{vertical:'top',horizontal:'right'}}
        onClose={handalClose}>
          <MenuItem onClick={handalClose}>Blog</MenuItem>
          <MenuItem onClick={handalClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
