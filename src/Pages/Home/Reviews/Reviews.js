import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleReview from './SingleReview/SingleReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons'

const Reviews = () => {

    // CSS for banner
    const custombg = {
        background: `url("https://i.ibb.co/xCQSRXW/servies-banner.jpg")`,
        height: '150px'
    }

    // fontawesome
    const starIcon = <FontAwesomeIcon icon={faStarHalf} />

    return (
        <div style={{ margin: '70px 0' }}>
            <Container>
                <div className="d-flex align-items-center justify-content-center" style={{ ...custombg, borderRadius: '10px' }}>
                    <h2 style={{ color: '#E52727' }} className=''><span style={{ marginRight: "-20px" }} className="fs-1">{starIcon}</span> Reviews</h2>
                </div>
            </Container>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4 my-5">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <SingleReview></SingleReview>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;