import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions/actions';
import Registration from './registration';

const RegistrationContainer = () => {
    const dispatch = useDispatch();
    const registrationReducer = useSelector(state => state.registrationReducer);
    const { isUserCreated } = registrationReducer;
    const navigate = useNavigate();

    return (
        <Registration
            isUserCreated={isUserCreated}
            navigate={navigate}
            onSignUp={(data) => dispatch({ type: actions.USER_CREATE, data: data })}
        />
    );
};

export default RegistrationContainer;