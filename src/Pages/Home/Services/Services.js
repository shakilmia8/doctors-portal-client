import React from 'react';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teeth from '../../../images/whitening.png';
import { Row, Container } from 'react-bootstrap';
import Typography from '@mui/material/Typography';

const Services = () => {
    const services = [
        {
            name: 'Fluoride Treatment',
            describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nesciunt dolorem tenetur, enim quis consectetur aspernatur. Omnis optio reiciendis quidem.',
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nesciunt dolorem tenetur, enim quis consectetur aspernatur. Omnis optio reiciendis quidem.',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nesciunt dolorem tenetur, enim quis consectetur aspernatur. Omnis optio reiciendis quidem.',
            img: teeth
        },
    ];

    return (
        <Container>
            <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h6" gutterBottom component="div">
                OUR SERVICES
            </Typography>
            <Typography sx={{ mb: 5, fontWeight: 600 }} variant="h3">Services We Provide</Typography>
            {
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        services.map(service => <Service key={service.name} service={service}></Service>)
                    ))}
                </Row>
            }
        </Container>
    );
};

export default Services;