import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

const MuiSwitch = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  console.log(isDarkMode);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(e.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch value={isDarkMode} onChange={handleChange} />}
      />
    </Box>
  );
};

export default MuiSwitch;
