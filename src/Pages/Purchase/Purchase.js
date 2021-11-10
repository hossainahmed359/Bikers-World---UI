import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const { _id } = useParams();

    // Set Load Data in the state
    const [singleProduct, setSingleProduct] = useState({})

    // Get Single Product Details
    useEffect(() => {
        fetch(`http://localhost:5000/signleProduct/${_id}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, []);

    console.log(singleProduct);
    // Continue the rest after adding firebase

    return (
        <div>
            <h1>This is purchase {_id}</h1>
        </div>
    );
};

export default Purchase;