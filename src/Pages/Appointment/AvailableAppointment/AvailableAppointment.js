import { Typography, Alert } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Bookings from '../Bookings/Bookings';

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <div>
            <Typography variant="h3" sx={{ color: 'info.main', mb: 3 }}>Available Appointments on {date.toLocaleDateString()}</Typography>
            {bookingSuccess && <Alert severity='success'>Appointment Booked Successfully!</Alert>}
            <Bookings
                date={date}
                setBookingSuccess={setBookingSuccess}
            ></Bookings>
        </div>
    );
};

export default AvailableAppointment;