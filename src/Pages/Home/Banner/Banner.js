import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'

// This css style is a major part of this componet
const bannerStyles = {
    background: `url('https://i.ibb.co/0YRdZ4n/Bike-Banner.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    height: '850px',
}


const Banner = () => {
    return (
        <div style={bannerStyles}>
            <Container className="alignment">
                <Row className="banner-item pt-3">
                    <Col xs={12} md={12} lg={8} className="d-flex" >
                        <div className="text-start">
                            <h1 className="text-light innerItemsStyle">NOT ALL WHO</h1>
                            <h1 className="text-light innerItemsStyle" >WANDER</h1>
                            <h1 className="innerItemsStyle" style={{ color: '#E52727 ' }}>ARE LOST !</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Banner;