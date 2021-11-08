import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openModal, handleModalClose, booking, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleModalSubmit = e => {
        e.preventDefault();
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        };
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleModalClose();
                }

            });
    }

    return (
        <Modal
            open={openModal}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography sx={{ color: 'info.main' }} id="modal-modal-title" variant="h4" component="h2">
                    {name}
                </Typography>
                <form onSubmit={handleModalSubmit}>
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        id='outlined-size-small'
                        defaultValue={time}
                        size='small'
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id='outlined-size-small'
                        name='patientName'
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        size='small'
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id='outlined-size-small'
                        name='email'
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                        size='small'
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id='outlined-size-small'
                        name='phone'
                        onBlur={handleOnBlur}
                        defaultValue='Phone Number'
                        size='small'
                    />
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        id='outlined-size-small'
                        defaultValue={date.toLocaleDateString()}
                        size='small'
                    />
                    <Button type='submit' variant="contained">SUBMIT</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;