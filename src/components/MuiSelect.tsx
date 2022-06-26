import { Box, TextField, MenuItem } from '@mui/material'
import React, { useState } from 'react'



const MuiSelect = () => {

    const [country,setContry]= useState("");

    const [countries,setCountries]= useState<string[]>([]);

    const handalSingleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setContry(e.target.value as string);
    }

    const handalMultipleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{

        const values=e.target.value
        setCountries(typeof values==='string'?values.split(','):values);
    }
    return (

        // below select single value 
        <Box width="250px">
            <TextField label="Select Country" select value={country} onChange={handalSingleChange} fullWidth>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="China">China</MenuItem>
                <MenuItem value="United States">United States</MenuItem>
                <MenuItem value="Pakistan">Pakistan</MenuItem>
                <MenuItem value="Indonesia">Indonesia</MenuItem>
                <MenuItem value="Russia">Russia</MenuItem>
                <MenuItem value="Mexico">Mexico</MenuItem>
                <MenuItem value="Ethiopia">Ethiopia</MenuItem>
            </TextField>


         {/* below select selects multiple values we need to change state string to array  */}


         <TextField label="Select Country" select value={countries} onChange={handalMultipleChange} fullWidth  SelectProps={{multiple:true}}>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="China">China</MenuItem>
                <MenuItem value="United States">United States</MenuItem>
                <MenuItem value="Pakistan">Pakistan</MenuItem>
                <MenuItem value="Indonesia">Indonesia</MenuItem>
                <MenuItem value="Russia">Russia</MenuItem>
                <MenuItem value="Mexico">Mexico</MenuItem>
                <MenuItem value="Ethiopia">Ethiopia</MenuItem>
            </TextField>



        </Box>



    )
}

export default MuiSelect
