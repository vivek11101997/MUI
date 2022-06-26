import React, { useState } from "react";
import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import AdbTwoToneIcon from "@mui/icons-material/AdbTwoTone";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import FormatUnderline from "@mui/icons-material/FormatUnderlined";


const MuiButton = () => {
    
const [formats,setFormat]=useState<string[]>([])
const handalFormatchanges=(_event:React.MouseEvent<HTMLElement>,updateFormat:string[])=>{
console.log(formats)
    setFormat(updateFormat);

}
    return (
        <>
            <Stack spacing={4} direction="column">
                <Button
                    onClick={() => alert("Hello World")}
                    variant="outlined"
                    startIcon={<AdbTwoToneIcon />}
                >
                    Android
                </Button>
                <Button
                    variant="contained"
                    disableRipple
                    disableElevation
                    endIcon={<AdbTwoToneIcon />}
                >
                    Android
                </Button>
                <IconButton color="error">
                    <AdbTwoToneIcon />
                </IconButton>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="text" href="https://www.google.com/maps">
                    Text Button
                </Button>
                <Button variant="contained"> Contained Button</Button>
                <Button variant="outlined"> OutLine Button</Button>
            </Stack>

            {/* colors of Buttons  */}
            <Stack spacing={4} direction="row">
                <Button variant="outlined" color="info">
                    Info
                </Button>
                <Button variant="outlined" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="primary">
                    Primary
                </Button>
                <Button variant="outlined" color="warning">
                    Warning
                </Button>

                <Button variant="outlined" color="error">
                    Error
                </Button>
            </Stack>

            {/* size of buttons  */}
            <Stack spacing={2} display="block" direction="row">
                <Button variant="outlined" size="small" color="info">
                    Info
                </Button>
                <Button variant="outlined" size="medium" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" size="large" color="success">
                    Success
                </Button>
            </Stack>

            {/* Button Group */}
            <Stack direction="row">
                <ButtonGroup orientation="vertical" size="small" color="secondary" aria-label="alighment button Group" variant="contained">
                    <Button>LEFT</Button>
                    <Button>CENTER</Button>
                    <Button>RIGHT</Button>
                </ButtonGroup>
            </Stack>

            {/* Toggle Button */}
            <Stack direction="row">
                <ToggleButtonGroup value={formats} onChange={handalFormatchanges} aria-label="text formating">
                    <ToggleButton value="bold"  aria-label="bold"><FormatBold/></ToggleButton>
                    <ToggleButton value="italic" aria-label="italic"><FormatItalic/></ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined"><FormatUnderline/></ToggleButton>
                </ToggleButtonGroup>


            </Stack>
        </>
    );
};

export default MuiButton;
