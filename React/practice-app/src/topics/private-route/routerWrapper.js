import React from 'react'
import { Route, useNavigate } from 'react-router-dom';

const PrivateRouter = (props) => {
    const navigate = useNavigate();
    const isAuth = false;
    const {path, element} = props;
    return (
        <Route to={path} element={isAuth ? element : navigate('/')} />
    )
}

export default PrivateRouter;