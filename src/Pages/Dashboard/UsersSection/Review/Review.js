import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import useAuth from '../../../../Hooks/useAuth';
import { Rating } from 'react-simple-star-rating'
import { fontSize } from '@mui/system';



const Review = () => {

    // Firebase
    const { user } = useAuth();


    // Star Rating
    const [rating, setRating] = useState(0) // initial rating value

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
        userRating.starRating = rating;
    }


    // Overall User Rating
    const [userRating, setUserRating] = useState({ email: user.email, name: user.displayName })


    // Set Descrition Value
    const handleOnBlur = e => {
        const value = e.target.value;
        const field = e.target.name;
        const updateRating = { ...userRating }
        updateRating[field] = value;
        setUserRating(updateRating);
    };


    // Form Submit
    const handleOnSubmit = e => {
        e.preventDefault();
        // Include star rating user ratin
        console.log(userRating)
    }




    return (
        <div style={{ fontFamily: 'roboto', textAlign: 'start', margin: '30px' }}>
            <Container >
                <h3 style={{ margin: '30px 5px' }}>Your Review</h3>
                <Grid item xs={12} md={12} lg={10} >
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            onBlur={handleOnBlur}
                            name="description"
                            style={{ width: '100%' }}
                            id="outlined-multiline-static"
                            label="Write your experience"
                            multiline
                            rows={4}
                            defaultValue="Write something"
                        />
                        <Typography style={{ margin: '7px 5px', color: '#E52727' }}>Double click on the star</Typography>
                        <Rating onClick={handleRating} ratingValue={rating} />
                        <br />
                        <Button style={{ textAlign: 'start', marginLeft: '5px', marginTop: '5px', padding: '6px 30px' }} type="submit" variant="contained" >Submit</Button>
                    </form>
                </Grid>
            </Container>
        </div >
    );
};

export default Review;