import { AppBar, Badge, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
  
  }));


export const Navbar = () => {
    const classes = useStyles();
    return (
   
        <AppBar position="fixed" >
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <img src="./comida-rapida.svg" alt="comidac" width="50px"/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    RCook
                </Typography>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Badge badgeContent={4} color="secondary">
                        <LocalGroceryStoreIcon/>
                    </Badge>
                </IconButton>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
      
    
    )
}
