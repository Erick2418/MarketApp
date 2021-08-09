import React from 'react'
import { Backdrop, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, createMuiTheme, Fade, Input, makeStyles, Modal, ThemeProvider, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors';
import {ModalAddCar} from './ModalAddCar';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { ModalProduct } from './ModalProduct';
const useStyles = makeStyles( (theme) => ({
    root: {
      maxWidth: "225px",
      margin:"1rem",
      minWidth:"225px"
    },
    media: {
      height: "160px",
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }));

const theme = createMuiTheme({
  palette: {
    secondary: green,
  },
});

export const CartaProducto = () => {

    const classes = useStyles();
    
    const [openMProducto, setOpenMProducto] = React.useState(false);
    const [openMAddCard, setOpenMAddCard] = React.useState(false);
    
    const handleOpenProducto = () => {
        setOpenMProducto(true);
        
    };
    const handleCloseProducto = () => {
        setOpenMProducto(false);
    };
    const handleOpenAddCard = () => {
        setOpenMAddCard(true);
        
    };
    const handleCloseAddCard = () => {
        setOpenMAddCard(false);
    };
    
    return (
        <Card className={classes.root} >
        <CardActionArea onClick={handleOpenProducto} >
            <CardContent>
            <CardMedia
            className={classes.media}
            component="img"
            alt="Contemplative Reptile"
            image="./products/2000214.jpg"
            title="Contemplative Reptile"
            />
            <Box textAlign="center" height="90px" mt={2}>
                <Typography gutterBottom  component="h2" >
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Enjuague vocal de no se que vaina controla el calculo 180 mi
                </Typography>
            </Box>

            </CardContent>
            <CardContent style={{margin:"-25px"}}>
            <Box display="flex" justifyContent="center" alignItems="flex-end" flexGrow={1}>
                    <Typography gutterBottom  component="h2" style={{marginRight:"25px"}}>
                        <Box fontSize={17}  color="grey">
                        <del>1$</del>
                        </Box>
                        <Box fontSize={10} color="grey">
                           ANTERIOR
                        </Box>
                    </Typography>
               
                    <Typography gutterBottom  component="h2" >
                        <Box fontSize={25} color="red">
                           <b>0.50$</b>
                        </Box>
                        <Box fontSize={10} color="grey">
                            ACTUAL
                        </Box>
                    </Typography>
               
            </Box>
            </CardContent>
        </CardActionArea>
        <CardActions >
            <Box display="flex" justifyContent="flex-end" flexGrow={1}>
                    <Typography gutterBottom  component="h2" >
                        <Box  border={1} fontSize={10} mr={1} mt={0.4}width={75} >
                        <Input placeholder="0"  type="number" inputProps={{ 'aria-label': 'description' }} value="1" />
                        </Box>
                    </Typography>
                <ThemeProvider theme={theme}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{height:"40px"}}
                    className={classes.button}
                    startIcon={<ShoppingCartOutlinedIcon style={{ fontSize: 24}}/>}
                    onClick={handleOpenAddCard}
                >
                    <Typography gutterBottom  component="h2" >
                        <Box fontSize={10} mt={1}>
                            AGREGAR AL CARRITO
                        </Box>
                    </Typography>
                </Button>
                </ThemeProvider>
            </Box>
        </CardActions>

        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openMProducto}
        onClose={handleCloseProducto}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        >
            <Fade in={openMProducto}>
            <div className={classes.paper}>
                <ModalProduct/>
                
            </div>
            </Fade>
        </Modal>

        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openMAddCard}
        onClose={handleCloseAddCard}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        >
            <Fade in={openMAddCard}>
            <div className={classes.paper}>
                <ModalAddCar handleCloseAddCard={handleCloseAddCard} />
                
            </div>
            </Fade>
        </Modal>        

    </Card>
    )
}
