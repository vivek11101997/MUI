import React, { useState } from 'react'
import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'


const MuiRadio = () => {

    const[value,setValue]= useState('');

    const handelChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    }
    return (
        <Box>
            <FormControl error>

                <FormLabel id="job-ex-group-label">Year of Exprence</FormLabel>
                <RadioGroup row value={value} onChange={handelChange} name='job-ex-group' aria-label='job-ex-group-label'>
                    <FormControlLabel control={<Radio size="small" color='secondary' />} label="0-2" value="0-2" />
                    <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
                    <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
                </RadioGroup>
                <FormHelperText>invalid selection</FormHelperText>
            </FormControl>

        </Box>
    )
}

export default MuiRadio