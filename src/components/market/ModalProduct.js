import React from 'react'
import { Box, Button, createMuiTheme, Divider, Grid, Input, makeStyles, ThemeProvider, Typography } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

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



export const ModalProduct = () => {
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
                    <img src="/products/2000214.jpg" alt="producto" style={{width:"200px"}}/>
                </Grid>

                <Grid item style={{width:"560px", margin:"20px"}}>
                    <Typography gutterBottom  component="h2" style={{margin:'25px'}}>
                        <Box fontSize={25} color="red" flexWrap="wrap" style={{textTransform:"uppercase"}}>
                           Enjuague vocal de no se que vaina controla el calculo 180 mis asdas
                        </Box>
                        <Box fontSize={13} color="grey">
                            Lavavajilla en crema Lava 1000 g verde
                        </Box>
                        <Box fontSize={13} color="grey">
                            <b>Marca: </b>LAVA | <b>Codigo: </b> 1231546
                        </Box>
                    </Typography>
                    <Divider/>
                    <Typography gutterBottom  component="h2" >
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
                    <Box display="flex" justifyContent="center" flexGrow={1} mt={2} mb={2} ml={2} mr={2}>
                        
                        <ThemeProvider theme={theme}>
                            <Button
                                variant="contained"
                                color="secondary"
                                style={{height:"40px"}}
                                fullWidth
                                className={classes.button}
                                endIcon={<NavigateNextIcon style={{ fontSize: 24}}/>}
                            >
                                <Typography gutterBottom  component="h2">
                                    <Box fontSize={10} mt={1}>
                                        VER MAS DETALLES
                                    </Box>
                                </Typography>
                            </Button>
                        </ThemeProvider>
                    </Box>



                </Grid>
            </Grid>
        </div>
    )
}
