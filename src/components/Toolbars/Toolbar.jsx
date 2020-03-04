import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Box} from '@material-ui/core'

const useStyles = makeStyles( theme => ({
  root: {
    backgroundColor: theme.palette.grey[200],
  }
  }))

export default function Toolbar({children, className, ...props}) {
  
  const classes = useStyles()
    return (
        <Box className={classes.root}  borderRadius="borderRadius" {...props}>
            {children}
        </Box>
    )
    
}