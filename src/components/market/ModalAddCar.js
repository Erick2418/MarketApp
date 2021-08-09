import React from 'react'
import { Box, Button, createMuiTheme, makeStyles, ThemeProvider, Typography,Grid } from '@material-ui/core'
import { green, pink } from '@material-ui/core/colors';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    avatar: {
      color: theme.palette.getContrastText(pink[500]),
      backgroundColor: pink[500],
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
}));

const theme = createMuiTheme({
  palette: {
    secondary: green,
  },
});

export const ModalAddCar = ({handleCloseAddCard}) => {
    const classes = useStyles();
    return (
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
        >
            <Avatar className={classes.avatar} style={{marginTop:"-44px"}}>
            <ShoppingCartOutlinedIcon style={{ fontSize: 30}}/>
            </Avatar>

            <Grid container item xs={12} justify="center" alignItems="center">
                <Typography gutterBottom  component="h2" >
                        <Box fontSize={15} mt={1}>
                            ¡1 ítem(s) agregado(s) al carrito!
                        </Box>
                </Typography>
            </Grid>
            <Grid item xs={12} 
            container  
            justify="center"
            alignItems="center"
            spacing={2}
            >
            <Grid item>
                <ThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{height:"40px",width:"170px"}}
                        onClick={handleCloseAddCard}
                        startIcon={<ChevronLeftIcon style={{ fontSize: 24}}/>}
                    >
                        <Typography gutterBottom  component="h2" >
                            <Box fontSize={10} mt={1}>
                                VOLVER
                            </Box>
                        </Typography>
                    </Button>
                </ThemeProvider>
            </Grid>
            <Grid item>
                <ThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{height:"40px",width:"170px"}}
                        startIcon={<ShoppingCartOutlinedIcon style={{ fontSize: 24}}/>}
                    >
                        <Typography gutterBottom  component="h2" >
                            <Box fontSize={10} mt={1}>
                                IR A PAGAR
                            </Box>
                        </Typography>
                    </Button>
                </ThemeProvider>
            </Grid>
            </Grid>
        </Grid>
    )
}
