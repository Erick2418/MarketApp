import React from 'react'
import { Box, Button, createMuiTheme, Divider, Grid, Input, makeStyles, ThemeProvider, Typography } from '@material-ui/core'

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const useStyles = makeStyles((theme) => ({
    root: {
    //    backgroundColor:"#F8F9F9",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const theme = createMuiTheme({
    palette: {
      secondary: {
          main: '#5c6bc0'
      }
    },
  });


export const DetailProdScreen = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid  
        container
        direction="row"
        alignItems="center"
        justify="center"
        spacing={3}
        >

            <Grid item style={{marginLeft:"20px"}}>
                <img src="/products/2000214.jpg" alt="producto" style={{width:"300px"}}/>
            </Grid>

            <Grid item style={{width:"560px", margin:"20px"}}>
                <Typography gutterBottom  component="h2">
                    <Box fontSize={25} color="red" flexWrap="wrap" style={{textTransform:"uppercase"}} >
                       Enjuague vocal de no se que vaina controla el calculo 180 mis asdas
                    </Box>
                    <Box fontSize={13} color="grey" mt={1}>
                        Lavavajilla en crema Lava 1000 g verde
                    </Box>
                    <Box fontSize={13} color="grey" mb={2}>
                        <b>Marca: </b>LAVA | <b>Codigo: </b> 1231546
                    </Box>
                </Typography>
                <Divider/>
                <Typography gutterBottom  component="h2" style={{marginTop:"15px"}}>
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                            
                        <Box fontSize={25} color="red" mr={2}>
                        0.50$ 
                        </Box>
                        <Box fontSize={13} color="grey">
                        <b>Precio incluye IVA.</b>
                        <br/>
                        Costo de envío se calculará antes del pago.
                        </Box>
                    </Grid>
                </Typography>
                <Box display="flex" justifyContent="center" flexGrow={1} mt={1} mb={2} ml={2} mr={2}>
                    <ThemeProvider theme={theme}>
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{height:"30px", width:"50%"}}
                            className={classes.button}
                            endIcon={<CreditCardIcon style={{ fontSize: 24}}/>}
                        >
                            <Typography gutterBottom  component="h2">
                                <Box fontSize={10} mt={1}>
                                    Conoce las formas de pago
                                </Box>
                            </Typography>
                        </Button>
                    </ThemeProvider>
                </Box>
                
                <Divider/>
                {/* asdasd */}
                
                
                <Box display="flex" justifyContent="center" flexGrow={1} mt={2} mb={2} ml={2} mr={2}>
                    <Typography gutterBottom  component="h2" >
                        <Box  border={1} fontSize={10} mr={2}  mt={0.4} width={75} >
                            <Input placeholder="0"  type="number" inputProps={{ 'aria-label': 'description' }} />
                        </Box>
                    </Typography>
                    <ThemeProvider theme={theme}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{height:"40px"}}
                            fullWidth
                            className={classes.button}
                            startIcon={<ShoppingCartOutlinedIcon style={{ fontSize: 24}}/>}
                        >
                            <Typography gutterBottom  component="h2">
                                <Box fontSize={10} mt={1}>
                                    AGREGAR AL CARRITO
                                </Box>
                            </Typography>
                        </Button>
                    </ThemeProvider>
                </Box>
            </Grid>
        </Grid>
        <Grid  
        container
        direction="row"
        spacing={3}
        justify="center"
        >
            <Box border={1} width="75%" p={3}>
                <Typography gutterBottom  component="h2">
                    <Box fontSize={20} color="red" flexWrap="wrap" style={{textTransform:"uppercase"}} >
                    Mas detalles
                    </Box>
                    <Box fontSize={15} color="grey" mt={1}>
                        Enjuague vocal de no se que vaina controla el calculo 180 mis asdas
                    </Box>
                </Typography>
            </Box>
        </Grid>
    </div>
    )
}
