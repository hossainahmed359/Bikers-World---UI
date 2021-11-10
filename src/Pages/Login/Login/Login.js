import React, { useState } from 'react';
import { Card, Col, Container, FormControl, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {

    // Firebase
    const { handleEmailSignIn, handleGoogleSignIn, isLoading, error } = useAuth();

    // setting user input data
    const [loginData, setLoginData] = useState({});

    // Handle input field Changes
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...loginData };
        newUser[field] = value;
        setLoginData(newUser);
    }

    // Handle Form Submit
    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(loginData)
        e.target.reset()
    }

    // Google signIn
    const useGoogleSignIn = () => {
        handleGoogleSignIn();
    }




    return (
        <div >
            <Navigation></Navigation>
            <Container className="mt-5 pt-5">
                <Col sm={12} md={7} lg={4} className="mx-auto border-0 shadow">
                    <Card className="border-0 " style={{ fontFamily: 'roboto' }}>
                        <Card.Body>
                            <Card.Title className="fs-2 text-danger">Login</Card.Title>
                            <form id="login-from" onSubmit={handleOnSubmit}>
                                <InputGroup className="my-3">
                                    <FormControl
                                        className="py-2"
                                        onBlur={handleOnBlur}
                                        name="email"
                                        type="email"
                                        placeholder="Your Email"
                                        aria-label="email"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup className="my-3">
                                    <FormControl
                                        className="py-2"
                                        onBlur={handleOnBlur}
                                        name="password"
                                        type="password"
                                        placeholder="Your Password"
                                        aria-label="email"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                {error && <Card.Text className="text-danger">{error}</Card.Text>}
                                <Link to="/register">Already have an account ?</Link><br />
                                <Button
                                    type="submit"
                                    variant="danger"
                                    className="w-75 px-3 py-2 my-2 border rounded-pill"
                                >
                                    Login
                                </Button>
                            </form>
                            <Button
                                onClick={useGoogleSignIn}
                                variant="success"
                                className="w-75 px-3 py-2 my-2 border rounded-pill"
                            >
                                Continue With Google
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Container >



        </div >
    );
};

export default Login;