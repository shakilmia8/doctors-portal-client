import React, { useState } from 'react';
import { TextField, Button, Alert } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAddAdmin = e => {
        e.preventDefault();
        const user = { email };
        fetch('https://cryptic-lowlands-15291.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    console.log(data);
                    setEmail('')
                }
            })
    }

    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAddAdmin}>
                <TextField
                    label="Email"
                    type='email'
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type='submit' variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity='success'>Made An Admin Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;