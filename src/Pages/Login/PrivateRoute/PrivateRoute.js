import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    // Firebase
    const { user } = useAuth();

    // Redirect
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email
                ?
                children
                :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                />
            }
        >
        </Route>
    );
};

export default PrivateRoute;