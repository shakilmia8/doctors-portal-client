import { Button, Grid } from '@mui/material';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';

const HomeBanner = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Grid container spacing={2}>
                <Grid style={{ textAlign: 'left' }} item xs={12} sm={12} md={6} lg={6}>
                    <Typography style={{ textAlign: 'justify', fontWeight: '550' }} variant="h2" gutterBottom component="div">
                        Your New Smile <br /> Starts Here
                    </Typography>
                    <Typography style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '25px', margin: '30px 0px' }} variant="caption" display="block" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta, consectetur accusamus inventore officiis quod deleniti aperiam porro nobis natus atque debitis accusantium itaque quae animi obcaecati consequatur. Porro, itaque!
                    </Typography>
                    <Link to='/appointment'>
                        <Button variant="contained">GET APPOINTMENT</Button>
                    </Link>
                </Grid>
                <Grid style={{ textAlign: 'right' }} item xs={12} sm={12} md={6} lg={6}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomeBanner;