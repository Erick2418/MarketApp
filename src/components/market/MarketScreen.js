import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core';
import {Navbar} from './../ui/Navbar'
import { CartaProducto } from './CartaProducto';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content:{
        flexGrow:1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }
  }));

export const MarketScreen = () => {

    const x=["1","2","3","14","15","16","17","18","19","10","122"];
    
    const classes = useStyles();

    return (
        <div className={classes.root} >  
            <Navbar />
            <div className={classes.content}>
                <div className={classes.toolbar}/>
                    <Grid container direction="row"  alignItems="center">
                        
                        <Grid item>
                            <Box display="flex" flexWrap="wrap" justifyContent="center" className={classes.root} >
                                {
                                x.map( num=>(<CartaProducto key={num}/>))
                                }        
                            </Box>
                        </Grid>
                    </Grid>                                
            </div> 
        </div>

    )
}
