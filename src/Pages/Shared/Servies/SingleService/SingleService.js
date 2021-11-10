import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './SingleService.css'

const SingleService = ({ product }) => {
    const { image, name, price, description } = product
    return (
        <div>
            <Col>
                <Card className="product-card">
                    <div className="parentDiv">
                        <Card.Img variant="top" className="border rounded" src={image} />
                    </div>
                    <Card.Body className="text-start">
                        <Card.Title className="fs-3">{name}</Card.Title>
                        <Card.Text className="fs-2" style={{ color: '#E52727 ' }}>${price}</Card.Text>
                        <Card.Text style={{ fontFamily: "'roboto" }}>
                            {description.slice(0, 130)}
                        </Card.Text>
                    </Card.Body>
                    <Button className="w-50 mx-auto mb-4" variant="danger">Buy Now</Button>
                </Card>
            </Col>
        </div>
    );
};

export default SingleService;