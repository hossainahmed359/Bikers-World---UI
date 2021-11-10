import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServicesHeader from '../ServicesHeader/ServicesHeader';
import SingleService from '../SingleService/SingleService';


const Services = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    console.log(products)
    return (
        <div>
            <ServicesHeader></ServicesHeader>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-5 my-5">
                    {products.map(product => products.indexOf(product) < 6 &&
                        <SingleService
                            key={products[product]}
                            product={product}
                        ></SingleService>)}
                </Row>
            </Container>

        </div>
    );
};

export default Services;