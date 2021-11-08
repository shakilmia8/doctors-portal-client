import { Container, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import treatment from '../../../images/treatment.png'

const DentalCare = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Grid container spacing={2}>
                <Grid style={{ textAlign: 'left' }} item xs={12} sm={12} md={6} lg={6}>
                    <img style={{ width: '100%' }} src={treatment} alt="" />
                </Grid>
                <Grid style={{ textAlign: 'left', margin: '40px 0px' }} item xs={12} sm={12} md={6} lg={6}>
                    <Typography style={{ textAlign: 'left', fontWeight: '550' }} variant="h3" gutterBottom component="div">
                        Exceptional Dental <br /> Care, on Your Terms
                    </Typography>
                    <Typography style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '25px', margin: '30px 0px' }} variant="caption" display="block" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta, consectetur accusamus inventore officiis quod deleniti aperiam porro nobis natus atque debitis accusantium itaque quae animi obcaecati consequatur. Porro, itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta, consectetur accusamus inventore officiis quod deleniti aperiam porro nobis natus atque debitis accusantium itaque quae animi obcaecati consequatur. Porro, itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta, consectetur accusamus inventore officiis quod deleniti aperiam porro nobis natus atque debitis accusantium itaque quae animi obcaecati consequatur. Porro, itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta, consectetur accusamus inventore officiis quod deleniti aperiam porro nobis natus atque debitis accusantium itaque quae animi obcaecati consequatur. Porro, itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta, consectetur accusamus inventore officiis quod deleniti aperiam porro nobis natus atque debitis accusantium itaque quae animi obcaecati consequatur. Porro, itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta, consectetur accusamus inventore officiis quod deleniti aperiam porro nobis natus atque debitis accusantium itaque quae animi obcaecati consequatur. Porro, itaque!
                    </Typography>
                    <Link to='/appointment'>
                        <Button variant="contained">GET APPOINTMENT</Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DentalCare;