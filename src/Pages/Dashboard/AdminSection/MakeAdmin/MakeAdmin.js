import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container } from 'react-bootstrap';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';


const MakeAdmin = () => {

    // State to store email
    const [requestEmail, setRequestEmail] = useState({})

    // handle email field
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newEmail = { ...requestEmail };
        newEmail[field] = value;
        setRequestEmail(newEmail);
    };

    // handle Submit 
    const handleOnSubmit = e => {
        e.preventDefault();
        // send request to database
        fetch('http://localhost:5000/makeAdmin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestEmail)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    window.alert('Admin succssfully created');
                    e.target.reset();
                }
            })

    };

    return (
        <div style={{ fontFamily: 'roboto', textAlign: 'start', margin: '30px' }}>
            <Container>
                <Grid item xs={12} md={12} lg={4}>
                    <h3 style={{ color: '#0A7DD9', marginBottom: '15px' }}>Make Admin</h3>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            onBlur={handleOnBlur}
                            style={{ width: '100%' }}
                            required
                            id="outlined-required"
                            label="Type Email"
                            name="email"
                            type="email"
                        />
                        <Button type="submit" style={{ marginTop: '20px', marginLeft: '2px' }} variant="contained">Submit</Button>
                    </form>
                </Grid>
            </Container>

        </div>
    );
};

export default MakeAdmin;