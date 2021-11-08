import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import login from '../../../images/login.png';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { registerUser, isLoading, error, user } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        e.preventDefault();
        if (loginData.password.length < 8) {
            alert('Your Password Must be 8 Character');
            return;
        }
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not matched');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
    }

    return (
        <Container>
            <Grid container spacing={2} >
                <Grid sx={{ mt: 20 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Name"
                            type="text"
                            name="name"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="E-mail"
                            type="email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Re-type Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnChange}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Register</Button>
                        <p>Already Registered? Please <NavLink style={{ textDecoration: 'none' }} to='/login'>Login</NavLink></p>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity='success'>User Created Successfully!</Alert>}
                    {error && <Alert severity='error'>E-mail Already used!</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;