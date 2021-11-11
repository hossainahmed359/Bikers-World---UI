import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const Purchase = () => {
    const { product_id } = useParams();
    const { user } = useAuth({})

    // Set Load Data in the state
    const [singleProduct, setSingleProduct] = useState({})

    // Get Single Product Details
    useEffect(() => {
        fetch(`http://localhost:5000/signleProduct/${product_id}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, []);

    console.log(singleProduct);
    console.log(user)



    return (
        <div >
            <Navigation></Navigation>
            <div className="my-5">
                <Container>
                    <Row xs={1} md={2} className="g-1">
                        <Col sm={12} md={6} lg={4}>
                            <Card className="border-0">
                                <Card.Img variant="top" src={singleProduct.image} />
                                <Card.Body className="text-start">
                                    <Card.Title className="fs-3">{singleProduct.name}</Card.Title>
                                    <Card.Text className="fs-2" style={{ color: '#E52727 ' }}>${singleProduct.price}</Card.Text>
                                    <Card.Text className="fs-5" style={{ fontFamily: "'roboto", textAlign: 'justify' }}>
                                        {singleProduct.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={8}>
                            <Col>
                                <Card className="border-0">
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify' }}>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Purchase;