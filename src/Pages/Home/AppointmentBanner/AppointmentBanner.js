import { Container, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmentBg = {
    width: '100%',
    height: '434px',
    background: `url(${bg})`,
    backgroundColor: 'rgba(85, 98, 87)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '200px'
}

const AppointmentBanner = () => {
    return (
        <div style={appointmentBg}>
            <Container sx={{ my: 5 }}>
                <Grid container spacing={2}>
                    <Grid style={{ textAlign: 'left', marginTop: '-150px' }} item xs={12} sm={12} md={6} lg={6}>
                        <img style={{ width: '100%' }} src={doctor} alt="" />
                    </Grid>
                    <Grid style={{ textAlign: 'left', margin: '50px 0px' }} item xs={12} sm={12} md={6} lg={6}>
                        <Typography sx={{ color: 'info.main' }} style={{ textAlign: 'left', fontWeight: '550' }} variant="h6" gutterBottom component="div">
                            APPOINTMENT
                        </Typography>
                        <Typography style={{ fontWeight: '550', color: 'white' }} variant="h3" gutterBottom component="div">
                            Make an appointment Today
                        </Typography>
                        <Typography style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '25px', margin: '30px 0px', color: 'white' }} variant="caption" display="block" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta, consectetur accusamus inventore officiis.
                        </Typography>
                        <Link to='/appointment'>
                            <Button variant="contained">GET APPOINTMENT</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentBanner;