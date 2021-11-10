import React from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const { _id } = useParams()
    return (
        <div>
            <h1>This is purchase {_id}</h1>
        </div>
    );
};

export default Purchase;