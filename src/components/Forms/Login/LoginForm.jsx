import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FormInput from '../components/FormInput/FormInput';

import '../form.scss';
import { selectLoginErrorState } from '../../../redux/auth/authSelectors';
import authActions from '../../../redux/auth/authActions';
import formValidator, { validationTypes } from '../Validator/validator';

const LoginForm = props => {

    const inputRefs = {
        username: useRef(),
        password: useRef()
    }

    const [validationObject, setValidationObject] = useState(formValidator.generateValidationObject(inputRefs));
    
    const submitForm = (e) => {
        e.preventDefault();

        const validatedObject = formValidator.validate(inputRefs);

        setValidationObject(validatedObject);

        if(validatedObject.isValid)
            props.startLogin(inputRefs.username.current.value, inputRefs.password.current.value, props.history);
    }

    return (
        <form onSubmit={ e => submitForm(e) } noValidate>
            <FormInput validators={ [validationTypes.required] } validationMessage={ validationObject.username.errorMessage } label='Username' reference={ inputRefs.username } type='username' id='username' />
            <FormInput validators={ [validationTypes.required] } validationMessage={ validationObject.password.errorMessage } label='Password' reference={ inputRefs.password } type='password' id='password' />
            <button type='submit' className='btn btn-success'>Login</button>
            <span className={ props.hasLoginError ? 'error-message' : undefined }>Invalid username or password.</span>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        hasLoginError: selectLoginErrorState(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startLogin: (username, password, history) => dispatch(authActions.signInStart(username, password, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));