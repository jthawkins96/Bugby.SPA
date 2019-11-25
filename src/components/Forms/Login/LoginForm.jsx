import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FormInput from '../components/FormInput/FormInput';

import '../form.scss';
import { selectLoginErrorState } from '../../../redux/auth/authSelectors';
import authActions from '../../../redux/auth/authActions';

const LoginForm = props => {
    var usernameRef = useRef();
    var passwordRef = useRef();

    return (
        <form>
            <FormInput label="Username" reference={ usernameRef } type="username" id="username" />
            <FormInput label="Password" reference={ passwordRef } type="password" id="password" />
            <button type="button" 
                className='btn btn-success' 
                onClick={ () => props.startLogin(usernameRef.current.value, passwordRef.current.value, props.history) }>
                Login
            </button>
            { props.hasLoginError ? <span className="error-message">Invalid username or password.</span> : null }
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