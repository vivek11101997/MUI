import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const skills = ["React", "Angular", "Node", "ASP.NET", "HTML", "Bootstrip"];

const MuiAutoComplate = () => {

      type skillType={
      id:number,
      label:string
    }

    const [value,setValue]=useState<string|null>(null);
      const [skill,setSkill]=useState<skillType|null>(null);
    console.log(value);



    const skillsoption=skills.map((skill,index)=>({
      id:index+1,
      label:skill
    }))
    
  return (
    <Stack width="250px" spacing={2}>
      <Autocomplete
      freeSolo
        options={skills}
        value={value}
        onChange={(e:any,val:string|null)=>setValue(val)}
        renderInput={(params) => <TextField {...params} label="Skills"/>}
      />



      <Autocomplete
      
        options={skillsoption}
        value={skill}
        onChange={(e:any,val:skillType|null)=>setSkill(val)}
        renderInput={(params) => <TextField {...params} label="Skills"/>}
      />
    </Stack>
  );
};

export default MuiAutoComplate;
