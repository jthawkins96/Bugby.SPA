import React, { useState } from 'react';

import './form-input.scss'

const FormInput = props => {
    const [focusClass, setFocusClass] = useState();
    const showError = props.validationMessage;

    return (
        <div className='input-group'>
            <label className={ `${focusClass} form-label` } htmlFor={ props.id }>{ props.label }</label>
            <input validators={ props.validators } className='form-input' onFocus={ () => setFocusClass('shrink') } ref={ props.reference } type={ props.type } id={ props.id } />
            <span className={ showError ? 'error-message' : undefined }>{ props.validationMessage }</span>
        </div>
    )
}

export default FormInput;