import { Box, Divider, Grid, Stack } from "@mui/material";
import React from "react";

const MuiLayout = () => {
  return (
    // <>
    //   <Box
    //     sx={{
    //       backgroundColor: "primary.main",
    //       color: "whitesmoke",
    //       height: "100px",
    //       width: "100px",
    //       padding: "16px",
    //       "&:hover": {
    //         backgroundColor: "primary.light",
    //       },
    //     }}
    //   >
    //     <Box display="flex" bgcolor="success.light" p={2} height="100px" width="100px" component="div">
    //       MuiLayout
    //     </Box>
    //   </Box>

    // </>
    //  <Stack sx={{border:'1px solid'}} divider={<Divider orientation="horizontal" flexItem/>}>

    //       <Box
    //     sx={{
    //       backgroundColor: "primary.main",
    //       color: "whitesmoke",
    //       height: "100px",
    //       width: "100px",
    //       padding: "16px",
    //       "&:hover": {
    //         backgroundColor: "primary.light",
    //       },
    //     }}
    //   >

    //   </Box>
    //   <Box display="flex" bgcolor="success.light" p={2} height="100px" width="100px" component="div">
    //       MuiLayout
    //     </Box>
    //  </Stack>

    <>
      <Grid container my={4} spacing={2}>
        <Grid item xs={6}>
          <Box  bgcolor="primary.light">ITEM 1</Box>
        </Grid>

        <Grid item xs={6}> 

          <Box bgcolor="primary.light">ITEM 2</Box>
        </Grid>

        <Grid item xs={3}>
          
          <Box bgcolor="primary.light">ITEM 3</Box>
        </Grid>
        <Grid item xs={4}>
          
          <Box bgcolor="primary.light">ITEM 4</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MuiLayout;
