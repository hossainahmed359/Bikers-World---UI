import React from 'react';
import { Card, Col } from 'react-bootstrap';



// placeholder image
const placeHolderImage = `https://i.ibb.co/t4zRwZj/New-Project.png`

const SingleReview = () => {



    return (
        <div>
            <Col>
                <Card>
                    <Card.Img style={{ width: "30%", margin: 'auto', padding: '10px 0' }} variant="top" src={placeHolderImage} />
                    <Card.Body className="text-start">
                        <Card.Title>Name</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleReview;