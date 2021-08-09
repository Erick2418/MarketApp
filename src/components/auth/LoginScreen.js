import React from 'react'
import {  Button, Card, CardMedia, Grid, Hidden, makeStyles, TextField, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:"3rem"
    },
    cover:{
      height:"90vh",
      width:"100%"
    },
    gridIMG:{
      height:"90vh",
      width:"100%"
    },
    gridMain:{
      backgroundColor: "#444747",
      backgroundImage:"linear-gradient(19deg, #444747 0%, #444449 100%)",      
      height:"90vh",
      width:"50vw",
       
    },
    input:{
        color: "white"
    },
    btnColorG:{
      background: 'primary',
      // padding:10,
      borderRadius: 3,
      color:"white"
    }

}));



export const LoginScreen = () => {
    const classes = useStyles();
    const initialForm={
      email:'erick',
      password:'123456',
    }
    const[ formValues, handleInputChange]= useForm (initialForm);

    const { email, password } = formValues;

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formValues);
        
    }
    return (
        <div className={classes.root}>
          <Grid container  justify="center"
              alignItems="center">

            <Hidden xsDown>
            <Grid item xs={12} sm={7} className={classes.gridIMG}>
              <Card>
              <CardMedia
                className={classes.cover}
                component="img"
                image="https://source.unsplash.com/random"
               
              />
              </Card> 
            </Grid>
            </Hidden>
            <Grid 
              container
              item 
              xs={12} 
              sm={5}
              justify="center"
              alignItems="center"
              spacing={3} 
              direction="column"
              className={classes.gridMain}
              >
                    <Grid item container direction="column" justify="center" alignItems="center"> 
                        <LockOpenIcon color="secondary"/>
                        <Typography className={classes.input} variant="h5">
                        Sign in
                        </Typography>

                    </Grid>
                    <Grid item >  
                        <TextField 
                       
                        InputProps={{
                          className: classes.input,
                          style: { fontFamily: 'nunito', color: 'white'}
                        }}
                        label="User"  
                        variant="outlined"
                        name='email'
                        value={email}
                        onChange={handleInputChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            
                            variant="outlined"
                            label="Password"
                            type="password"
                            name='password'
                            value={password}
                            onChange={handleInputChange}
                            fullWidth
                            InputProps={{
                              className: classes.input,
                              style: { fontFamily: 'nunito', color: 'white'}
                            }}
                        />
                    </Grid>
                    <Grid item>
                    <Link to="/register">
                        <Button 
                          variant="outlined" 
                          type='submit'
                          
                          onClick={handleSubmit} 
                          className={classes.btnColorG}
                          style={{width:"211.72px"}}
                          fullWidth
                        >SIGN IN</Button>
                    </Link>
                        
                   
                    </Grid>
            </Grid>
          </Grid>

        </div>
        



    )
}
