import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const bannerStyles = {
    background: `url('https://i.ibb.co/0YRdZ4n/Bike-Banner.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    height: '850px'
}

const Banner = () => {
    return (
        <div style={bannerStyles}>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <h1 className="text-light">This is lefts</h1>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <h1 className="text-light">This is right</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;