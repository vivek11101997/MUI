import { Link, Stack } from '@mui/material'
import React from 'react'

const Muilink = () => {
  return (
    <Stack spacing={2} direction="row" margin={4}>
<Link href='#'>Link</Link>
<Link href='#' variant='overline' color="secondary" underline='hover'>Secondary</Link>
    </Stack>
  )
}

export default Muilink