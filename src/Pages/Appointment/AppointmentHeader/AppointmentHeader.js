import { Container, Grid } from '@mui/material';
import React from 'react';
import Calendar from '../../Shared/Calendar/Calendar';
import chair from '../../../images/chair.png';

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img style={{ width: '90%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;