import React, { useEffect, useState } from 'react';
/* import { Card, Col, Container, Button } from 'react-bootstrap'; */
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

// Material UI
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';




// Main Function
const SingleOrder = ({ order }) => {
    const productId = order?.cart?.productId;
    // console.log(productId)
    // Set Matheced Product
    const [product, setProduct] = useState([]);

    // Find Product With id
    useEffect(() => {
        fetch(`http://localhost:5000/signleProduct/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    console.log(product)
    const { _id, image, name, price, description } = product;


    // font awesome
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />





    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={image}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default SingleOrder;