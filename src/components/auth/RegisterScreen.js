import React from 'react'
import {  Button, Grid, makeStyles, TextField, Typography} from '@material-ui/core'
import { useForm } from '../hooks/useForm';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin:'3rem',
      
    },
    gridMain:{
        height: '70vh',
        backgroundColor: '#cfe8fc'
    }
}));

export const RegisterScreen = () => {
    const classes = useStyles();

    const initialForm={
        name:'Erick',
        email:'erick@gmail.com',
        password1:'123456',
        password2:'123456',
    }
    const[ formValues, handleInputChange]= useForm(initialForm);

    const { name, email, password1, password2 } = formValues;



    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formValues)
    }



    return (
        <div className={classes.root} >
        <form onSubmit={handleSubmit}>
            <Grid 
                container 
                spacing={3} 
                className={classes.gridMain}
                justify="center"
                alignItems="center"
                direction="column"
                >
                <Grid item>
                    <Typography>
                        Register
                    </Typography>
                </Grid>
                <Grid item >
                    <TextField 
                    id="standard-basic" 
                    label="User" 
                    name='name'
                    value={name}
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item >
                    <TextField
                        label="Email"
                        type="Email"
                        name='email'
                        value={email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item >
                    <TextField
                        label="Password"
                        type="password"
                        name='password1'
                        value={password1}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item >
                    <TextField                    
                        label="Password Repeat"
                        type="password"
                        name='password2'
                        value={password2}
                        onChange={handleInputChange}
                    />
                </Grid>
                
                <Grid item >
                    <Button variant="outlined" type='submit' >Registrar</Button>
                </Grid>
            </Grid>
        </form>
      </div>
    )
}
