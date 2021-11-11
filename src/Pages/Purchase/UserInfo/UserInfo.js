import { fontFamily } from '@mui/system';
import React from 'react';
import { Card, FormControl, InputGroup, Button } from 'react-bootstrap';

const UserInfo = ({ user, singleProduct }) => {

    console.log(singleProduct);
    console.log(user);


    const handleOnBlur = e => {
        // console.log(e.targe.value)
    }

    return (
        <div className="mx-auto">
            <Card
                className="border-0">
                <Card.Body>
                    <Card.Title className="fs-3 text-start">User Details</Card.Title>
                    <form style={{ fontFamily: 'roboto' }}>
                        <InputGroup className="my-3">
                            <FormControl
                                className="py-3"
                                onBlur={handleOnBlur}
                                defaultValue={user.displayName}
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                aria-label="name"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </InputGroup>
                        <InputGroup className="my-3">
                            <FormControl
                                className="py-3"
                                onBlur={handleOnBlur}
                                defaultValue={user.email}
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                aria-label="email"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </InputGroup>
                        <InputGroup className="my-3">
                            <FormControl
                                className="py-3"
                                onBlur={handleOnBlur}
                                name="number"
                                type="number"
                                placeholder="Your Phone Number"
                                aria-label="password"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </InputGroup>
                        <InputGroup className="my-3">
                            <FormControl
                                className="py-3"
                                onBlur={handleOnBlur}
                                name="address"
                                type="text"
                                placeholder="Your Loaction"
                                aria-label="address"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </InputGroup>

                        <Button
                            type="submit"
                            variant="danger"
                            className="w-100 px-3 py-3 my-2 border rounded-pill"
                        >
                            Add To Cart
                        </Button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserInfo;