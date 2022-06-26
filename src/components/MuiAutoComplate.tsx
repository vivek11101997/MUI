import { Autocomplete, Stack, TextField } from "@mui/material";
import { spacing } from "@mui/system";
import React, { useState } from "react";

const skills = ["React", "Angular", "Node", "ASP.NET", "HTML", "Bootstrip"];

const MuiAutoComplate = () => {

    const [value,setValue]=useState<string|null>(null);
    console.log(value);
    
  return (
    <Stack width="250px" spacing={2}>
      <Autocomplete
      freeSolo
        options={skills}
        value={value}
        onChange={(e:any,val:string|null)=>setValue(val)}
        renderInput={(params) => <TextField {...params} label="Skills"/>}
      />
    </Stack>
  );
};

export default MuiAutoComplate;
