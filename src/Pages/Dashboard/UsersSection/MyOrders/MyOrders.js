import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder/SingleOrder';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


const MyOrders = ({ userEmail }) => {


    // Store Orders
    const [allOrders, setAllOrders] = useState([]);


    // Find All Orders 
    useEffect(() => {
        fetch(`http://localhost:5000/findOrder/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setAllOrders(data);
            });
    }, []);

    // Cancel Order
    const handleCancelOrder = orderId => {
        console.log(orderId)
    }

    return (
        <Container fixed>
            <h1>This is My Orders {userEmail}</h1>
            <h2>Orders {allOrders.length}</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                    {allOrders.map(order => (
                        <Grid item xs={4} sm={4} md={6} lg={4} key={order._id}>
                            <SingleOrder
                                key={order._id}
                                order={order}
                                handleCancelOrder={handleCancelOrder}
                            ></SingleOrder>

                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default MyOrders;