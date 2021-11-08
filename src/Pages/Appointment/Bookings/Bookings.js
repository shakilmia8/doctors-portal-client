import { Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const Bookings = ({ date, setBookingSuccess }) => {

    const bookings = [
        {
            id: 101,
            name: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            spaces: '10 SPACES AVAILABLE'
        },
        {
            id: 102,
            name: 'Cosmetic Dentistry',
            time: '10:05 AM - 11:30 AM',
            spaces: '10 SPACES AVAILABLE'
        },
        {
            id: 103,
            name: 'Teeth Cleaning',
            time: '05:00 PM - 06:30 PM',
            spaces: '10 SPACES AVAILABLE'
        },
        {
            id: 104,
            name: 'Cavity Protection',
            time: '07:00 AM - 08:30 AM',
            spaces: '10 SPACES AVAILABLE'
        },
        {
            id: 105,
            name: 'Teeth Orthodontics',
            time: '10:05 AM - 11:30 AM',
            spaces: '10 SPACES AVAILABLE'
        },
        {
            id: 106,
            name: 'Cosmetic Dentistry',
            time: '10:05 AM - 11:30 AM',
            spaces: '10 SPACES AVAILABLE'
        },
    ]

    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    {
                        bookings.map(booking => <Booking
                            key={booking.id}
                            date={date}
                            booking={booking}
                            setBookingSuccess={setBookingSuccess}
                        >
                        </Booking>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Bookings;