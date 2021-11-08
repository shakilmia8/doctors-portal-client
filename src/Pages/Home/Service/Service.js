import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Service = (props) => {
    const { name, describe, img } = props.service;
    return (
        <Col>

            <Card.Img style={{ width: '100px', height: '105px', margin: '0px auto' }} variant="top" src={img} />
            <Card.Body>
                <Card.Title style={{ margin: '10px 0px' }}>{name}</Card.Title>
                <Card.Text style={{ textAlign: 'justify', margin: '10px 0px' }}>
                    {describe}
                </Card.Text>
            </Card.Body>

        </Col>
    );
};

export default Service;