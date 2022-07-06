import { NavigateNext } from '@mui/icons-material'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'

import React from 'react'

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs maxItems={2} itemsAfterCollapse={2} separator={<NavigateNext/>}>
        <Link underline='hover' href='#'>Home</Link>
         <Link underline='hover' href='#'>Catalog</Link>
          <Link underline='hover' href='#'>Accessories</Link>
        <Typography color='text.primary'>Shoes</Typography>
        
        </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs