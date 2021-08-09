
import { GridList, GridListTile, makeStyles } from '@material-ui/core'
import React from 'react'
import { CartaProducto } from './CartaProducto'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      maxHeight:'440px',
    },
    gridList: {
      flexWrap: 'nowrap',
      minWidth:'300px',
      maxWidth:'470px',

    //   overflow: 'hidden',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
   
  }));

export const Carrusel = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={420} className={classes.gridList} >
                <GridListTile>
                <CartaProducto/>
                </GridListTile>
                <GridListTile>
                <CartaProducto/>
                </GridListTile>
                <GridListTile>
                <CartaProducto/>
                </GridListTile>
                <GridListTile>
                <CartaProducto/>
                </GridListTile>
                <GridListTile>
                <CartaProducto/>
                </GridListTile>
                <GridListTile>
                <CartaProducto/>
                </GridListTile>
                <GridListTile>
                <CartaProducto/>
                </GridListTile>
                <GridListTile>
                <CartaProducto/>
                </GridListTile>
            </GridList>
        </div>

    )
}
