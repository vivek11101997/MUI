import React, { useState } from 'react'
import { InputAdornment, Stack, TextField } from '@mui/material';




const MuiTextfield = () => {

    const [value,setValue]=useState('');
    return (
        <div>
            <Stack direction="row" spacing={4}>

                <TextField label="Username" size='medium' variant='filled' />
                <TextField label="Username" size="small" variant='standard' />
                <TextField label="Username" variant='outlined' />
            </Stack>

            <Stack direction="row" spacing={6}>

                <TextField label="medium" size='medium' color='primary' />
                <TextField label="small" size="small" color='secondary' />


                {/* for required text field add * to input field  */}
                <TextField label="required" color='primary' required />


                {/* for haplertext filed  */}
                <TextField label="helper text" color='primary' required helperText="example of helper text" />

                {/* type of input password, email disables*/}
                <TextField label="password" color='primary' type="password" />


                {/* read only using Input Props */}
                <TextField label="read only" color='primary' InputProps={{ readOnly: true }} />




            </Stack>

            <Stack direction="row" spacing={2}>
                {/* we can merage or add prefix or postfix to text field using InputAdorment */}
                <TextField label="Amount" color='primary' InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment> }} />
                <TextField label="Weight" color='primary' InputProps={{ endAdornment: <InputAdornment position='end'>KG</InputAdornment> }} />
            </Stack>


<Stack direction="row" spacing={4}>

                
                <TextField label="Password" variant='outlined'
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                error={!value} 
                helperText={!value?"Required" :"do not share your password with any one"}
                />
            </Stack>


        </div>
    )
}

export default MuiTextfield